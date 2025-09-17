/**
 * 画像処理とバリデーションのユーティリティ関数
 */

export interface ImageValidationResult {
	isValid: boolean
	error?: string
}

export interface ProcessedImage {
	dataUrl: string
	file: File
	size: number
}

// サポートする画像形式
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/gif", "image/webp"]
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const TARGET_SIZE = 400 // 推奨サイズ 400x400px

/**
 * ファイルが画像として有効かチェック
 */
export function validateImageFile(file: File): ImageValidationResult {
	// ファイル形式チェック
	if (!SUPPORTED_FORMATS.includes(file.type)) {
		return {
			isValid: false,
			error:
				"対応していないファイル形式です。JPEG、PNG、GIF、WebPをご利用ください。",
		}
	}

	// ファイルサイズチェック
	if (file.size > MAX_FILE_SIZE) {
		const maxSizeMB = MAX_FILE_SIZE / (1024 * 1024)
		return {
			isValid: false,
			error: `ファイルサイズが大きすぎます。${maxSizeMB}MB以下のファイルをご利用ください。`,
		}
	}

	return { isValid: true }
}

/**
 * 画像ファイルを読み込んでImageオブジェクトを作成
 */
export function loadImage(file: File): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image()
		const url = URL.createObjectURL(file)

		img.onload = () => {
			URL.revokeObjectURL(url)
			resolve(img)
		}

		img.onerror = () => {
			URL.revokeObjectURL(url)
			reject(new Error("画像の読み込みに失敗しました"))
		}

		img.src = url
	})
}

/**
 * 画像を正方形にクロップしてリサイズする
 */
export function resizeAndCropImage(
	img: HTMLImageElement,
	targetSize: number = TARGET_SIZE,
): string {
	const canvas = document.createElement("canvas")
	const ctx = canvas.getContext("2d")

	if (!ctx) {
		throw new Error("Canvas context の取得に失敗しました")
	}

	// キャンバスのサイズを設定
	canvas.width = targetSize
	canvas.height = targetSize

	// 元画像のサイズを取得
	const { width: imgWidth, height: imgHeight } = img

	// 正方形にクロップするための計算
	const minDimension = Math.min(imgWidth, imgHeight)
	const cropX = (imgWidth - minDimension) / 2
	const cropY = (imgHeight - minDimension) / 2

	// 画像をキャンバスに描画（クロップ + リサイズ）
	ctx.drawImage(
		img,
		cropX, // ソース画像のX座標
		cropY, // ソース画像のY座標
		minDimension, // ソース画像の幅
		minDimension, // ソース画像の高さ
		0, // キャンバスのX座標
		0, // キャンバスのY座標
		targetSize, // キャンバスの幅
		targetSize, // キャンバスの高さ
	)

	// Base64データURLとして返す
	return canvas.toDataURL("image/jpeg", 0.9)
}

/**
 * ファイルを処理して最適化された画像データを返す
 */
export async function processImageFile(file: File): Promise<ProcessedImage> {
	// バリデーション
	const validation = validateImageFile(file)
	if (!validation.isValid) {
		throw new Error(validation.error)
	}

	try {
		// 画像を読み込み
		const img = await loadImage(file)

		// リサイズ & クロップ
		const dataUrl = resizeAndCropImage(img)

		// 処理後のファイルサイズを計算（Base64の場合）
		const base64Size = Math.round((dataUrl.length * 3) / 4)

		return {
			dataUrl,
			file,
			size: base64Size,
		}
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "画像の処理に失敗しました"
		throw new Error(message)
	}
}

/**
 * Data URLからファイル名を生成する
 */
export function generateImageFileName(originalName?: string): string {
	const timestamp = Date.now()
	const baseName = originalName
		? originalName.replace(/\.[^/.]+$/, "")
		: "avatar"
	return `${baseName}_${timestamp}.jpg`
}

/**
 * ユーザー名からイニシャルを生成（フォールバック用）
 */
export function getInitials(name: string | null | undefined): string {
	if (!name) return "?"

	const names = name.trim().split(/\s+/)
	if (names.length === 1) {
		return names[0].charAt(0).toUpperCase()
	}

	return names
		.map((n) => n.charAt(0).toUpperCase())
		.slice(0, 2)
		.join("")
}
