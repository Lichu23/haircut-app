import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex flex-col justify-center gap-5 items-center py-4">
      <h1 className="text-white font-semibold text-2xl">
        Sign Up to choose haircut
      </h1>

      <SignUp />
    </div>
  );
}
