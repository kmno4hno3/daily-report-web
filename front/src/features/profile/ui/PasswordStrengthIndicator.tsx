"use client"

import { cn } from "@/lib/utils"
import { Progress } from "@/src/shared/ui/progress"
import type React from "react"
import { useMemo } from "react"
import {
	type PasswordStrengthResult,
	analyzePasswordStrength,
	getPasswordStrengthColor,
	getPasswordStrengthProgress,
} from "../lib/passwordStrength"

interface PasswordStrengthIndicatorProps {
	/** パスワード文字列 */
	password: string
	/** 表示をコンパクトにするかどうか */
	compact?: boolean
	/** カスタムクラス名 */
	className?: string
}

export const PasswordStrengthIndicator: React.FC<
	PasswordStrengthIndicatorProps
> = ({ password, compact = false, className }) => {
	// パスワード強度を分析
	const strength = useMemo(() => analyzePasswordStrength(password), [password])

	// パスワードが空の場合は何も表示しない
	if (!password) {
		return null
	}

	return (
		<div className={cn("space-y-3", className)}>
			{/* 強度レベルとプログレスバー */}
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium">パスワード強度</span>
					<span
						className={cn(
							"px-2 py-1 rounded-full text-xs font-medium",
							getPasswordStrengthColor(strength.level),
						)}
					>
						{strength.levelText}
					</span>
				</div>
				<Progress
					value={getPasswordStrengthProgress(strength.score)}
					className="h-2"
				/>
			</div>

			{/* 条件チェック（コンパクトモードでない場合） */}
			{!compact && (
				<div className="space-y-2">
					<h4 className="text-sm font-medium text-gray-700">パスワード条件</h4>
					<div className="grid grid-cols-1 gap-1 text-sm">
						<CriteriaItem met={strength.criteria.length} text="8文字以上" />
						<CriteriaItem
							met={strength.criteria.uppercase}
							text="大文字を含む"
						/>
						<CriteriaItem
							met={strength.criteria.lowercase}
							text="小文字を含む"
						/>
						<CriteriaItem met={strength.criteria.numbers} text="数字を含む" />
						<CriteriaItem met={strength.criteria.symbols} text="記号を含む" />
					</div>
				</div>
			)}

			{/* フィードバックメッセージ */}
			{strength.feedback.warning && (
				<div className="p-2 bg-yellow-50 border border-yellow-200 rounded-md">
					<p className="text-sm text-yellow-800">
						⚠️ {strength.feedback.warning}
					</p>
				</div>
			)}

			{/* 改善提案（コンパクトモードでない場合） */}
			{!compact && strength.feedback.suggestions.length > 0 && (
				<div className="space-y-2">
					<h4 className="text-sm font-medium text-gray-700">改善提案</h4>
					<ul className="space-y-1">
						{strength.feedback.suggestions.map((suggestion, index) => (
							<li
								key={index}
								className="text-sm text-gray-600 flex items-start"
							>
								<span className="text-blue-500 mr-2">•</span>
								{suggestion}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* 推定クラック時間（コンパクトモードでない場合） */}
			{!compact && (
				<div className="text-xs text-gray-500">
					推定解読時間: {strength.estimatedCrackTime}
				</div>
			)}
		</div>
	)
}

interface CriteriaItemProps {
	met: boolean
	text: string
}

const CriteriaItem: React.FC<CriteriaItemProps> = ({ met, text }) => {
	return (
		<div className="flex items-center space-x-2">
			<span
				className={cn(
					"inline-block w-4 h-4 rounded-full flex items-center justify-center text-xs",
					met ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400",
				)}
			>
				{met ? "✓" : "○"}
			</span>
			<span className={cn("text-sm", met ? "text-gray-900" : "text-gray-500")}>
				{text}
			</span>
		</div>
	)
}
