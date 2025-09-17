"use client"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/shared/ui/avatar"
import { Button } from "@/src/shared/ui/button"
import { Progress } from "@/src/shared/ui/progress"
import { AlertCircle, Check, Upload, X } from "lucide-react"
import type React from "react"
import { useCallback, useRef, useState } from "react"
import { getInitials, processImageFile } from "../lib/imageUtils"

export interface ImageUploadProps {
	/** 現在のプロフィール画像URL */
	currentImage?: string | null
	/** ユーザー名（フォールバック用） */
	userName?: string | null
	/** アップロード完了時のコールバック */
	onUploadComplete: (imageData: string) => void
	/** アップロード中状態 */
	isUploading?: boolean
	/** 無効状態 */
	disabled?: boolean
	/** アバターのサイズ */
	size?: "sm" | "md" | "lg"
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
	currentImage,
	userName,
	onUploadComplete,
	isUploading = false,
	disabled = false,
	size = "lg",
}) => {
	const [dragActive, setDragActive] = useState(false)
	const [preview, setPreview] = useState<string | null>(null)
	const [uploadProgress, setUploadProgress] = useState(0)
	const [error, setError] = useState<string | null>(null)
	const [isProcessing, setIsProcessing] = useState(false)

	const fileInputRef = useRef<HTMLInputElement>(null)

	// サイズ設定
	const sizeClasses = {
		sm: "h-16 w-16",
		md: "h-24 w-24",
		lg: "h-32 w-32",
	}

	/**
	 * ファイル処理の共通ロジック
	 */
	const processFile = useCallback(
		async (file: File) => {
			setError(null)
			setIsProcessing(true)
			setUploadProgress(0)

			try {
				// 画像処理
				const processedImage = await processImageFile(file)

				// プレビューを設定
				setPreview(processedImage.dataUrl)

				// アップロード進行状況をシミュレート
				const progressSteps = [20, 40, 60, 80, 100]
				for (const progress of progressSteps) {
					await new Promise((resolve) => setTimeout(resolve, 200))
					setUploadProgress(progress)
				}

				// アップロード完了
				onUploadComplete(processedImage.dataUrl)
				setUploadProgress(0)
				setIsProcessing(false)
			} catch (err) {
				const errorMessage =
					err instanceof Error ? err.message : "画像の処理に失敗しました"
				setError(errorMessage)
				setUploadProgress(0)
				setIsProcessing(false)
				setPreview(null)
			}
		},
		[onUploadComplete],
	)

	/**
	 * ドラッグイベントハンドラー
	 */
	const handleDrag = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault()
			e.stopPropagation()

			if (disabled || isUploading) return

			if (e.type === "dragenter" || e.type === "dragover") {
				setDragActive(true)
			} else if (e.type === "dragleave") {
				setDragActive(false)
			}
		},
		[disabled, isUploading],
	)

	/**
	 * ドロップイベントハンドラー
	 */
	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault()
			e.stopPropagation()
			setDragActive(false)

			if (disabled || isUploading) return

			const files = Array.from(e.dataTransfer.files)
			const imageFile = files.find((file) => file.type.startsWith("image/"))

			if (imageFile) {
				processFile(imageFile)
			} else if (files.length > 0) {
				setError("画像ファイルを選択してください")
			}
		},
		[disabled, isUploading, processFile],
	)

	/**
	 * ファイル選択ハンドラー
	 */
	const handleFileSelect = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0]
			if (file) {
				processFile(file)
			}
		},
		[processFile],
	)

	/**
	 * ファイル選択ダイアログを開く
	 */
	const openFileDialog = useCallback(() => {
		if (disabled || isUploading) return
		fileInputRef.current?.click()
	}, [disabled, isUploading])

	/**
	 * プレビューをクリア
	 */
	const clearPreview = useCallback(() => {
		setPreview(null)
		setError(null)
		setUploadProgress(0)
		if (fileInputRef.current) {
			fileInputRef.current.value = ""
		}
	}, [])

	const displayImage = preview || currentImage
	const isActive = dragActive && !disabled && !isUploading

	return (
		<div className="space-y-4">
			{/* 隠しファイル入力 */}
			<input
				ref={fileInputRef}
				type="file"
				accept="image/jpeg,image/png,image/gif,image/webp"
				onChange={handleFileSelect}
				className="hidden"
				disabled={disabled || isUploading}
			/>

			{/* メインのアップロードエリア */}
			<div
				className={cn(
					"relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors",
					isActive
						? "border-primary bg-primary/10"
						: "border-muted-foreground/25 hover:border-muted-foreground/50",
					disabled || isUploading
						? "cursor-not-allowed opacity-50"
						: "cursor-pointer hover:bg-muted/50",
				)}
				onDragEnter={handleDrag}
				onDragLeave={handleDrag}
				onDragOver={handleDrag}
				onDrop={handleDrop}
				onClick={openFileDialog}
			>
				{/* アバター表示 */}
				<div className="mb-4">
					<Avatar
						className={cn(sizeClasses[size], "ring-2 ring-offset-2 ring-muted")}
					>
						<AvatarImage
							src={displayImage || undefined}
							alt="プロフィール画像"
						/>
						<AvatarFallback className="text-lg">
							{getInitials(userName)}
						</AvatarFallback>
					</Avatar>
				</div>

				{/* アップロード状態の表示 */}
				{isProcessing || isUploading ? (
					<div className="text-center space-y-2">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary" />
							処理中...
						</div>
						{uploadProgress > 0 && (
							<div className="w-32">
								<Progress value={uploadProgress} />
								<div className="text-xs text-center mt-1">
									{uploadProgress}%
								</div>
							</div>
						)}
					</div>
				) : (
					<div className="text-center space-y-2">
						<Upload className="mx-auto h-8 w-8 text-muted-foreground" />
						<div className="text-sm">
							<span className="font-semibold text-primary">クリック</span>{" "}
							または
							<span className="font-semibold text-primary">
								ドラッグ&ドロップ
							</span>
							で画像をアップロード
						</div>
						<div className="text-xs text-muted-foreground">
							JPEG, PNG, GIF, WebP (最大5MB)
						</div>
					</div>
				)}
			</div>

			{/* プレビューエリア（プレビューがある場合） */}
			{preview && !isProcessing && (
				<div className="flex items-center justify-between rounded-lg border bg-muted/30 p-3">
					<div className="flex items-center gap-3">
						<Check className="h-5 w-5 text-green-600" />
						<div>
							<div className="text-sm font-medium">画像が準備できました</div>
							<div className="text-xs text-muted-foreground">
								400x400pxに最適化されました
							</div>
						</div>
					</div>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={clearPreview}
						disabled={disabled || isUploading}
					>
						<X className="h-4 w-4" />
					</Button>
				</div>
			)}

			{/* エラー表示 */}
			{error && (
				<div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800">
					<AlertCircle className="h-4 w-4" />
					<div className="text-sm">{error}</div>
				</div>
			)}
		</div>
	)
}
