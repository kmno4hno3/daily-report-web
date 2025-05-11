const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin")
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	webpack: (config) => {
		config.plugins.push(new PrismaPlugin())
		return config
	},
}

export default nextConfig
