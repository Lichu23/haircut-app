import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-5 items-center py-10">
      <h1 className="text-white font-semibold text-2xl">Sign In to choose haircut</h1>
      <SignIn />
    </div>
  );
}
