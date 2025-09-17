import zxcvbn from "zxcvbn"

export interface PasswordStrengthResult {
	score: number // 0-4 (0: 最弱, 4: 最強)
	level: "very_weak" | "weak" | "fair" | "good" | "strong"
	levelText: string
	isValid: boolean
	feedback: {
		warning?: string
		suggestions: string[]
	}
	criteria: {
		length: boolean
		uppercase: boolean
		lowercase: boolean
		numbers: boolean
		symbols: boolean
	}
	estimatedCrackTime: string
}

export interface PasswordValidationResult {
	isValid: boolean
	errors: string[]
}

/**
 * パスワードの基本バリデーション
 */
export function validatePassword(password: string): PasswordValidationResult {
	const errors: string[] = []

	if (password.length < 8) {
		errors.push("パスワードは8文字以上である必要があります")
	}

	if (password.length > 128) {
		errors.push("パスワードは128文字以下である必要があります")
	}

	return {
		isValid: errors.length === 0,
		errors,
	}
}

/**
 * パスワード確認のバリデーション
 */
export function validatePasswordConfirmation(
	password: string,
	confirmation: string,
): PasswordValidationResult {
	const errors: string[] = []

	if (password !== confirmation) {
		errors.push("パスワードと確認用パスワードが一致しません")
	}

	return {
		isValid: errors.length === 0,
		errors,
	}
}

/**
 * パスワード強度の詳細分析
 */
export function analyzePasswordStrength(
	password: string,
): PasswordStrengthResult {
	if (!password) {
		return {
			score: 0,
			level: "very_weak",
			levelText: "非常に弱い",
			isValid: false,
			feedback: {
				suggestions: ["パスワードを入力してください"],
			},
			criteria: {
				length: false,
				uppercase: false,
				lowercase: false,
				numbers: false,
				symbols: false,
			},
			estimatedCrackTime: "即座に",
		}
	}

	// zxcvbnでパスワード強度を分析
	const result = zxcvbn(password)

	// 文字種類の判定
	const criteria = {
		length: password.length >= 8,
		uppercase: /[A-Z]/.test(password),
		lowercase: /[a-z]/.test(password),
		numbers: /[0-9]/.test(password),
		symbols: /[^A-Za-z0-9]/.test(password),
	}

	// レベルテキストの決定
	const levelMap = {
		0: { level: "very_weak" as const, text: "非常に弱い" },
		1: { level: "weak" as const, text: "弱い" },
		2: { level: "fair" as const, text: "普通" },
		3: { level: "good" as const, text: "良い" },
		4: { level: "strong" as const, text: "強い" },
	}

	const levelInfo = levelMap[result.score as keyof typeof levelMap]

	// 推定クラック時間の日本語化
	const crackTimeText = formatCrackTime(
		String(result.crack_times_display.offline_slow_hashing_1e4_per_second),
	)

	// 改善提案の日本語化
	const suggestions = (result.feedback.suggestions as string[]).map(translateSuggestion)

	// 追加の改善提案
	if (!criteria.length) {
		suggestions.unshift("8文字以上にしてください")
	}
	if (!criteria.uppercase) {
		suggestions.push("大文字を含めてください")
	}
	if (!criteria.lowercase) {
		suggestions.push("小文字を含めてください")
	}
	if (!criteria.numbers) {
		suggestions.push("数字を含めてください")
	}
	if (!criteria.symbols) {
		suggestions.push("記号を含めてください")
	}

	// 基本バリデーションの結果も考慮
	const validation = validatePassword(password)
	const isValid = validation.isValid && result.score >= 2 // スコア2以上を有効とする

	return {
		score: result.score,
		level: levelInfo.level,
		levelText: levelInfo.text,
		isValid,
		feedback: {
			warning: result.feedback.warning
				? translateWarning(result.feedback.warning)
				: undefined,
			suggestions: [...new Set(suggestions)], // 重複除去
		},
		criteria,
		estimatedCrackTime: crackTimeText,
	}
}

/**
 * クラック時間の日本語化
 */
function formatCrackTime(crackTime: string): string {
	const timeMap: Record<string, string> = {
		instant: "即座に",
		"less than a second": "1秒未満",
		"1 second": "1秒",
		"1 minute": "1分",
		"1 hour": "1時間",
		"1 day": "1日",
		"1 month": "1ヶ月",
		"1 year": "1年",
		centuries: "何世紀も",
	}

	// 数値を含む時間の処理
	if (crackTime.includes("second")) {
		const match = crackTime.match(/(\d+) second/)
		if (match) return `${match[1]}秒`
	}
	if (crackTime.includes("minute")) {
		const match = crackTime.match(/(\d+) minute/)
		if (match) return `${match[1]}分`
	}
	if (crackTime.includes("hour")) {
		const match = crackTime.match(/(\d+) hour/)
		if (match) return `${match[1]}時間`
	}
	if (crackTime.includes("day")) {
		const match = crackTime.match(/(\d+) day/)
		if (match) return `${match[1]}日`
	}
	if (crackTime.includes("month")) {
		const match = crackTime.match(/(\d+) month/)
		if (match) return `${match[1]}ヶ月`
	}
	if (crackTime.includes("year")) {
		const match = crackTime.match(/(\d+) year/)
		if (match) return `${match[1]}年`
	}

	return timeMap[crackTime] || crackTime
}

/**
 * 警告メッセージの日本語化
 */
function translateWarning(warning: string): string {
	const warningMap: Record<string, string> = {
		"This is a top-10 common password":
			"これは一般的によく使われるパスワードです",
		"This is a top-100 common password":
			"これはよく使われるパスワードの一つです",
		"This is a very common password": "これは非常によく使われるパスワードです",
		"This is similar to a commonly used password":
			"これは一般的なパスワードに似ています",
		"A word by itself is easy to guess": "単語そのものは推測されやすいです",
		"Names and surnames by themselves are easy to guess":
			"名前や姓だけでは推測されやすいです",
		"Common names and surnames are easy to guess":
			"一般的な名前や姓は推測されやすいです",
	}

	return warningMap[warning] || warning
}

/**
 * 改善提案の日本語化
 */
function translateSuggestion(suggestion: string): string {
	const suggestionMap: Record<string, string> = {
		"Use a longer password": "より長いパスワードを使用してください",
		"Add another word or two": "単語を1〜2個追加してください",
		"Use a few words, avoid common phrases":
			"一般的でない複数の単語を組み合わせてください",
		"No need for symbols, digits, or uppercase letters":
			"記号、数字、大文字は必須ではありません",
		"Avoid repeated words and characters":
			"同じ単語や文字の繰り返しは避けてください",
		"Avoid sequences": "連続した文字列は避けてください",
		"Avoid recent years": "最近の年号は避けてください",
		"Avoid years that are associated with you":
			"あなたに関連する年号は避けてください",
		"Avoid dates and years that are associated with you":
			"あなたに関連する日付や年号は避けてください",
		"Capitalization doesn't help very much":
			"大文字化だけではあまり効果がありません",
		"All-uppercase is almost as easy to guess as all-lowercase":
			"すべて大文字でも小文字と同程度に推測されやすいです",
		"Reversed words aren't much harder to guess":
			"単語を逆にしても推測の難易度はあまり上がりません",
		"Predictable substitutions like '@' instead of 'a' don't help very much":
			"'a'を'@'に置き換えるような予測可能な置換はあまり効果がありません",
	}

	return suggestionMap[suggestion] || suggestion
}

/**
 * パスワード強度のカラークラスを取得
 */
export function getPasswordStrengthColor(
	level: PasswordStrengthResult["level"],
): string {
	const colorMap = {
		very_weak: "text-red-600 bg-red-100",
		weak: "text-red-500 bg-red-50",
		fair: "text-yellow-600 bg-yellow-100",
		good: "text-blue-600 bg-blue-100",
		strong: "text-green-600 bg-green-100",
	}
	return colorMap[level]
}

/**
 * パスワード強度のプログレスバー用の値を取得（0-100%）
 */
export function getPasswordStrengthProgress(score: number): number {
	return Math.max(10, (score + 1) * 20) // 最低10%、最高100%
}
