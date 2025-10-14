import AuthLayout from "@/components/auth/auth-layout"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
        {/* Success message */}
        <h1 className="text-center [font-family:'Poppins',Helvetica] text-3xl lg:text-4xl font-bold" style={{ color: "#41C23B" }}>
          Thank you for signed up
        </h1>
        
        <p className="text-center [font-family:'Inter',Helvetica] text-gray-600 text-lg">
          Please check your email
          <br />
          to verify your account
        </p>
      </div>
    </AuthLayout>
  )
}
