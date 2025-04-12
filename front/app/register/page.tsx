import { RegisterForm } from "@/src/features/register"

const Register = () => {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="w-[600px]">
				<RegisterForm className="border-red-100" />
			</div>
		</div>
	)
}

export default Register
