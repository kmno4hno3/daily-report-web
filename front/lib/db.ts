import { PrismaClient } from "@/generated/client"

const prismaClientSingleton = () => {
	return new PrismaClient()
}

declare global {
	var prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined
}

const prisma = global.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") global.prismaGlobal = prisma
