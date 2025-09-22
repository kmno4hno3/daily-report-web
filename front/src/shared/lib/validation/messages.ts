/**
 * バリデーションメッセージ定義
 * 日本語のユーザーフレンドリーなエラーメッセージと改善提案
 */

/**
 * 共通エラーメッセージ
 */
export const validationMessages = {
	// 必須項目
	required: "この項目は必須です",
	requiredField: (field: string) => `${field}は必須項目です`,

	// 文字数
	minLength: (field: string, min: number) =>
		`${field}は${min}文字以上で入力してください`,
	maxLength: (field: string, max: number) =>
		`${field}は${max}文字以内で入力してください`,
	lengthRange: (field: string, min: number, max: number) =>
		`${field}は${min}文字以上${max}文字以内で入力してください`,

	// 形式
	invalidFormat: (field: string) => `${field}の形式が正しくありません`,
	invalidEmail: "有効なメールアドレスを入力してください",
	invalidUrl: "有効なURLを入力してください",

	// 文字種類
	containsEmoji: "絵文字は使用できません",
	containsSpecialChars: "特殊文字（< > ' \" & \\）は使用できません",
	invalidCharacters: "使用できない文字が含まれています",

	// 重複
	alreadyExists: (field: string) => `この${field}は既に使用されています`,
	duplicate: "重複しています",

	// 一致
	notMatch: (field1: string, field2: string) =>
		`${field1}と${field2}が一致しません`,
	passwordNotMatch: "パスワードと確認用パスワードが一致しません",

	// ネットワーク
	networkError:
		"通信エラーが発生しました。しばらく待ってから再度お試しください",
	serverError: "サーバーエラーが発生しました",
	timeout: "タイムアウトしました",

	// その他
	invalidValue: "無効な値です",
	unknownError: "エラーが発生しました",
} as const

/**
 * ユーザー名バリデーションメッセージ
 */
export const usernameMessages = {
	required: "ユーザー名は必須です",
	minLength: (min: number) => `ユーザー名は${min}文字以上で入力してください`,
	maxLength: (max: number) => `ユーザー名は${max}文字以内で入力してください`,
	invalidCharacters:
		"ユーザー名には日本語、英数字、ハイフン、アンダースコアのみ使用できます",
	containsEmoji: "ユーザー名に絵文字は使用できません",
	containsSpecialChars: "ユーザー名に特殊文字は使用できません",
	suggestions: {
		useAlphanumeric: "英数字を含めることをお勧めします",
		avoidSpaces: "スペースの代わりにアンダースコアを使用してください",
		makeUnique: "他のユーザーと区別できる名前にしてください",
	},
} as const

/**
 * メールアドレスバリデーションメッセージ
 */
export const emailMessages = {
	required: "メールアドレスは必須です",
	invalid: "有効なメールアドレスを入力してください",
	maxLength: (max: number) =>
		`メールアドレスは${max}文字以内で入力してください`,
	alreadyUsed: "このメールアドレスは既に登録されています",
	domainInvalid: "有効なドメインのメールアドレスを使用してください",
	suggestions: {
		checkTypo: "入力内容に誤りがないか確認してください",
		useValidDomain: "実在するメールサービスのアドレスを使用してください",
		avoidTemporary: "一時的なメールアドレスの使用は避けてください",
	},
} as const

/**
 * パスワードバリデーションメッセージ
 */
export const passwordMessages = {
	required: "パスワードは必須です",
	minLength: (min: number) => `パスワードは${min}文字以上で入力してください`,
	maxLength: (max: number) => `パスワードは${max}文字以内で入力してください`,
	tooWeak: "パスワードが弱すぎます",
	commonPassword: "よく使われるパスワードは避けてください",
	similarToUserInfo: "個人情報に関連するパスワードは避けてください",
	sequential: "連続する文字や数字の使用は避けてください",
	repeated: "同じ文字の繰り返しは避けてください",
	notMatch: "パスワードと確認用パスワードが一致しません",
	currentPasswordWrong: "現在のパスワードが正しくありません",
	sameAsOld: "新しいパスワードは現在のパスワードと異なる必要があります",
	complexity: {
		missingUpperCase: "大文字を含めてください（例：A, B, C）",
		missingLowerCase: "小文字を含めてください（例：a, b, c）",
		missingNumber: "数字を含めてください（例：1, 2, 3）",
		missingSymbol: "記号を含めてください（例：!, @, #）",
		needMoreTypes: (current: number, required: number) =>
			`文字種類が不足しています（現在: ${current}種類、必要: ${required}種類）`,
	},
	suggestions: {
		useLonger: "より長いパスワードを使用してください",
		usePhrase: "覚えやすいフレーズを使用してください",
		addVariety: "大文字、小文字、数字、記号を組み合わせてください",
		avoidPersonalInfo: "名前、誕生日、電話番号などは使用しないでください",
		avoidDictionary: "辞書に載っている単語はそのまま使用しないでください",
		usePasswordManager: "パスワードマネージャーの使用を検討してください",
	},
	strength: {
		veryWeak: "非常に弱い",
		weak: "弱い",
		fair: "普通",
		good: "良い",
		strong: "強い",
		excellent: "非常に強い",
	},
} as const

/**
 * 画像アップロードバリデーションメッセージ
 */
export const imageMessages = {
	required: "画像は必須です",
	invalidFormat: "対応していない画像形式です",
	tooLarge: (maxMB: number) => `ファイルサイズは${maxMB}MB以下にしてください`,
	tooSmall: (minSize: number) =>
		`画像は${minSize}x${minSize}ピクセル以上にしてください`,
	uploadFailed: "画像のアップロードに失敗しました",
	processingFailed: "画像の処理に失敗しました",
	supportedFormats: "対応形式：JPEG、PNG、GIF、WebP",
	suggestions: {
		resize: "画像が大きい場合は、リサイズしてからアップロードしてください",
		checkFormat: "ファイル形式を確認してください",
		tryAgain: "もう一度アップロードを試してください",
	},
} as const

/**
 * 改善提案メッセージ生成
 */
export function generateSuggestions(
	fieldType: "username" | "email" | "password" | "image",
	errors: string[],
): string[] {
	const suggestions: string[] = []

	switch (fieldType) {
		case "username":
			if (errors.some((e) => e.includes("文字"))) {
				suggestions.push(usernameMessages.suggestions.makeUnique)
			}
			if (errors.some((e) => e.includes("絵文字"))) {
				suggestions.push(usernameMessages.suggestions.useAlphanumeric)
			}
			break

		case "email":
			if (errors.some((e) => e.includes("形式"))) {
				suggestions.push(emailMessages.suggestions.checkTypo)
			}
			if (errors.some((e) => e.includes("既に"))) {
				suggestions.push(emailMessages.suggestions.useValidDomain)
			}
			break

		case "password":
			if (errors.some((e) => e.includes("弱"))) {
				suggestions.push(passwordMessages.suggestions.addVariety)
				suggestions.push(passwordMessages.suggestions.useLonger)
			}
			if (errors.some((e) => e.includes("個人情報"))) {
				suggestions.push(passwordMessages.suggestions.avoidPersonalInfo)
			}
			break

		case "image":
			if (errors.some((e) => e.includes("サイズ"))) {
				suggestions.push(imageMessages.suggestions.resize)
			}
			if (errors.some((e) => e.includes("形式"))) {
				suggestions.push(imageMessages.suggestions.checkFormat)
			}
			break
	}

	return suggestions
}

/**
 * エラーレベルに応じたスタイルクラス
 */
export const errorLevelStyles = {
	error: "text-red-600 bg-red-50 border-red-200",
	warning: "text-yellow-600 bg-yellow-50 border-yellow-200",
	info: "text-blue-600 bg-blue-50 border-blue-200",
	success: "text-green-600 bg-green-50 border-green-200",
} as const

/**
 * フィールド状態に応じたボーダースタイル
 */
export const fieldBorderStyles = {
	default: "border-gray-300",
	focused: "border-blue-500",
	error: "border-red-500",
	warning: "border-yellow-500",
	success: "border-green-500",
	disabled: "border-gray-200",
} as const
