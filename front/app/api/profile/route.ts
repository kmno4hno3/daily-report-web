import { auth } from "@/auth"
import db from "@/lib/db"
import { profileSchema } from "@/src/features/profile/lib/validationSchema"
import { NextResponse } from "next/server"

/**
 * GET /api/profile
 * 現在のユーザーのプロフィール情報を取得
 */
export async function GET() {
	try {
		// セッション確認
		const session = await auth()
		if (!session?.user?.id) {
			return NextResponse.json({ error: "認証が必要です" }, { status: 401 })
		}

		// ユーザー情報を取得
		const user = await db.user.findUnique({
			where: {
				id: BigInt(session.user.id),
			},
			select: {
				id: true,
				name: true,
				email: true,
				image: true,
			},
		})

		if (!user) {
			return NextResponse.json(
				{ error: "ユーザーが見つかりません" },
				{ status: 404 },
			)
		}

		// BigIntをstringに変換
		const userData = {
			id: user.id.toString(),
			name: user.name,
			email: user.email,
			image: user.image,
		}

		return NextResponse.json(userData)
	} catch (error) {
		console.error("プロフィール取得エラー:", error)
		return NextResponse.json(
			{ error: "サーバーエラーが発生しました" },
			{ status: 500 },
		)
	}
}

/**
 * PUT /api/profile
 * 現在のユーザーのプロフィール情報を更新
 */
export async function PUT(request: Request) {
	try {
		// セッション確認
		const session = await auth()
		if (!session?.user?.id) {
			return NextResponse.json({ error: "認証が必要です" }, { status: 401 })
		}

		// リクエストボディを取得
		const body = await request.json()

		// バリデーション
		const validationResult = profileSchema.safeParse(body)
		if (!validationResult.success) {
			return NextResponse.json(
				{
					error: "入力データが不正です",
					details: validationResult.error.flatten(),
				},
				{ status: 400 },
			)
		}

		const { name, email } = validationResult.data

		// メールアドレスの重複チェック（自分以外）
		const existingUser = await db.user.findFirst({
			where: {
				email: email,
				NOT: {
					id: BigInt(session.user.id),
				},
			},
		})

		if (existingUser) {
			return NextResponse.json(
				{ error: "このメールアドレスは既に使用されています" },
				{ status: 409 },
			)
		}

		// プロフィール更新
		const updatedUser = await db.user.update({
			where: {
				id: BigInt(session.user.id),
			},
			data: {
				name,
				email,
				updatedAt: new Date(),
			},
			select: {
				id: true,
				name: true,
				email: true,
				image: true,
			},
		})

		// BigIntをstringに変換
		const userData = {
			id: updatedUser.id.toString(),
			name: updatedUser.name,
			email: updatedUser.email,
			image: updatedUser.image,
		}

		return NextResponse.json({
			success: true,
			message: "プロフィールを更新しました",
			data: userData,
		})
	} catch (error) {
		console.error("プロフィール更新エラー:", error)
		return NextResponse.json(
			{ error: "サーバーエラーが発生しました" },
			{ status: 500 },
		)
	}
}
