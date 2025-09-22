/**
 * メールアドレス重複チェックAPI
 * POST /api/validation/email-check
 */

import { auth } from "@/auth"
import db from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

/**
 * リクエストボディのスキーマ
 */
const requestSchema = z.object({
	email: z.string().email("有効なメールアドレスを入力してください"),
})

/**
 * POST /api/validation/email-check
 * メールアドレスの利用可能性をチェック
 */
export async function POST(request: Request) {
	try {
		// セッション確認（オプション：ログインユーザーのみに制限する場合）
		const session = await auth()

		// リクエストボディを取得
		const body = await request.json()

		// バリデーション
		const validationResult = requestSchema.safeParse(body)
		if (!validationResult.success) {
			return NextResponse.json(
				{
					available: false,
					error: "無効なメールアドレス形式です",
				},
				{ status: 400 },
			)
		}

		const { email } = validationResult.data

		// 現在のユーザーのメールアドレスと同じ場合は利用可能
		if (session?.user?.email === email) {
			return NextResponse.json({
				available: true,
				message: "現在のメールアドレスです",
			})
		}

		// データベースでメールアドレスの存在チェック
		const existingUser = await db.user.findFirst({
			where: {
				email: email,
				// ログインユーザーがいる場合、そのユーザーを除外
				...(session?.user?.id && {
					NOT: {
						id: BigInt(session.user.id),
					},
				}),
			},
			select: {
				id: true,
			},
		})

		if (existingUser) {
			return NextResponse.json({
				available: false,
				message: "このメールアドレスは既に使用されています",
			})
		}

		// メールアドレスが利用可能
		return NextResponse.json({
			available: true,
			message: "利用可能なメールアドレスです",
		})
	} catch (error) {
		console.error("メールアドレスチェックエラー:", error)

		// エラーレスポンス
		return NextResponse.json(
			{
				available: false,
				error: "サーバーエラーが発生しました",
			},
			{ status: 500 },
		)
	}
}

/**
 * OPTIONS /api/validation/email-check
 * CORS対応（必要に応じて）
 */
export async function OPTIONS() {
	return new NextResponse(null, {
		status: 200,
		headers: {
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	})
}
