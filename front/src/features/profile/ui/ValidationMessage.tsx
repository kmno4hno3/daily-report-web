/**
 * ValidationMessage コンポーネント
 * フォームバリデーションメッセージの表示
 */

"use client"

import { cn } from "@/lib/utils"
import type {
	FieldValidationState,
	ValidationError,
} from "@/src/shared/lib/validation/common"
import { generateSuggestions } from "@/src/shared/lib/validation/messages"
import {
	AlertCircle,
	CheckCircle,
	Info,
	Lightbulb,
	XCircle,
} from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"

/**
 * ValidationMessage コンポーネントのプロパティ
 */
export interface ValidationMessageProps {
	/** エラーメッセージまたはエラーオブジェクト */
	error?: string | ValidationError | ValidationError[]
	/** 警告メッセージ */
	warning?: string | string[]
	/** 成功メッセージ */
	success?: string
	/** 情報メッセージ */
	info?: string
	/** 改善提案を表示するか */
	showSuggestions?: boolean
	/** フィールドタイプ（提案生成用） */
	fieldType?: "username" | "email" | "password" | "image"
	/** アニメーション有効/無効 */
	animated?: boolean
	/** コンパクト表示 */
	compact?: boolean
	/** カスタムクラス名 */
	className?: string
	/** 表示時のコールバック */
	onShow?: () => void
	/** 非表示時のコールバック */
	onHide?: () => void
}

/**
 * メッセージタイプに応じたスタイル設定
 */
const messageStyles = {
	error: {
		container: "bg-red-50 border-red-200 text-red-800",
		icon: XCircle,
		iconClass: "text-red-600",
	},
	warning: {
		container: "bg-yellow-50 border-yellow-200 text-yellow-800",
		icon: AlertCircle,
		iconClass: "text-yellow-600",
	},
	success: {
		container: "bg-green-50 border-green-200 text-green-800",
		icon: CheckCircle,
		iconClass: "text-green-600",
	},
	info: {
		container: "bg-blue-50 border-blue-200 text-blue-800",
		icon: Info,
		iconClass: "text-blue-600",
	},
}

/**
 * ValidationMessage コンポーネント
 */
export const ValidationMessage: React.FC<ValidationMessageProps> = ({
	error,
	warning,
	success,
	info,
	showSuggestions = false,
	fieldType,
	animated = true,
	compact = false,
	className,
	onShow,
	onHide,
}) => {
	const [isVisible, setIsVisible] = useState(false)
	const [suggestions, setSuggestions] = useState<string[]>([])

	// メッセージとタイプの決定
	let message: string | string[] | undefined
	let messageType: keyof typeof messageStyles = "error"
	let Icon = messageStyles.error.icon

	if (error) {
		if (typeof error === "string") {
			message = error
		} else if (Array.isArray(error)) {
			message = error.map((e) => e.message)
		} else {
			message = error.message
		}
		messageType = "error"
	} else if (warning) {
		message = warning
		messageType = "warning"
	} else if (success) {
		message = success
		messageType = "success"
	} else if (info) {
		message = info
		messageType = "info"
	}

	Icon = messageStyles[messageType].icon

	// メッセージの表示/非表示制御
	useEffect(() => {
		const hasMessage = Boolean(message)
		setIsVisible(hasMessage)

		if (hasMessage) {
			onShow?.()
		} else {
			onHide?.()
		}
	}, [message, onShow, onHide])

	// 改善提案の生成
	useEffect(() => {
		if (showSuggestions && fieldType && error) {
			const errors = Array.isArray(message) ? message : [message as string]
			const generatedSuggestions = generateSuggestions(fieldType, errors)
			setSuggestions(generatedSuggestions)
		} else {
			setSuggestions([])
		}
	}, [showSuggestions, fieldType, error, message])

	// メッセージがない場合は何も表示しない
	if (!message) return null

	const style = messageStyles[messageType]
	const messages = Array.isArray(message) ? message : [message]

	return (
		<div
			className={cn(
				"border rounded-md transition-all duration-200",
				style.container,
				compact ? "p-2 text-sm" : "p-3",
				animated && "animate-in fade-in slide-in-from-top-1",
				!isVisible && animated && "animate-out fade-out slide-out-to-top-1",
				className,
			)}
			role="alert"
			aria-live="polite"
		>
			<div className="flex items-start space-x-2">
				<Icon
					className={cn(
						"flex-shrink-0 mt-0.5",
						compact ? "h-4 w-4" : "h-5 w-5",
						style.iconClass,
					)}
					aria-hidden="true"
				/>
				<div className="flex-1 space-y-1">
					{messages.map((msg, index) => (
						<p key={index} className={compact ? "text-sm" : ""}>
							{msg}
						</p>
					))}

					{/* 改善提案の表示 */}
					{suggestions.length > 0 && (
						<div
							className={cn(
								"mt-2 pt-2 border-t",
								messageType === "error"
									? "border-red-200"
									: messageType === "warning"
										? "border-yellow-200"
										: "border-gray-200",
							)}
						>
							<div className="flex items-start space-x-2">
								<Lightbulb
									className={cn(
										"flex-shrink-0 mt-0.5",
										compact ? "h-3 w-3" : "h-4 w-4",
										"text-gray-500",
									)}
								/>
								<div className="space-y-1">
									<p
										className={cn(
											"font-medium",
											compact ? "text-xs" : "text-sm",
										)}
									>
										改善のヒント：
									</p>
									<ul
										className={cn(
											"list-disc list-inside space-y-0.5",
											compact ? "text-xs" : "text-sm",
										)}
									>
										{suggestions.map((suggestion, idx) => (
											<li key={idx}>{suggestion}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

/**
 * フィールドバリデーション状態コンポーネント
 */
export interface FieldValidationProps {
	/** フィールドの状態 */
	state?: FieldValidationState
	/** フィールドタイプ */
	fieldType?: "username" | "email" | "password" | "image"
	/** コンパクト表示 */
	compact?: boolean
	/** カスタムクラス名 */
	className?: string
}

export const FieldValidation: React.FC<FieldValidationProps> = ({
	state,
	fieldType,
	compact = false,
	className,
}) => {
	if (!state) return null

	// バリデーション中の表示
	if (state.isValidating) {
		return (
			<div
				className={cn(
					"flex items-center space-x-2 text-gray-500",
					compact ? "text-sm" : "",
					className,
				)}
			>
				<div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-500" />
				<span>検証中...</span>
			</div>
		)
	}

	// エラーまたは警告の表示
	if (state.error || state.warning) {
		return (
			<ValidationMessage
				error={state.error}
				warning={state.warning}
				fieldType={fieldType}
				showSuggestions={state.touched && state.dirty}
				compact={compact}
				className={className}
				animated
			/>
		)
	}

	// 成功状態の表示（タッチされて有効な場合のみ）
	if (state.touched && state.isValid) {
		return (
			<div
				className={cn(
					"flex items-center space-x-1 text-green-600",
					compact ? "text-sm" : "",
					className,
				)}
			>
				<CheckCircle className={compact ? "h-3 w-3" : "h-4 w-4"} />
				<span>OK</span>
			</div>
		)
	}

	return null
}

/**
 * インラインバリデーションメッセージ
 */
export interface InlineValidationProps {
	/** エラーメッセージ */
	error?: string
	/** タッチ状態 */
	touched?: boolean
	/** カスタムクラス名 */
	className?: string
}

export const InlineValidation: React.FC<InlineValidationProps> = ({
	error,
	touched,
	className,
}) => {
	if (!error || !touched) return null

	return (
		<span
			className={cn(
				"text-sm text-red-600 mt-1 block animate-in fade-in slide-in-from-top-1",
				className,
			)}
			role="alert"
		>
			{error}
		</span>
	)
}
