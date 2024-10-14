import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

async function Header() {
  return (
    <div className="bg-slate-600 p-4 size-full">
      <div className="flex justify-between px-4 text-white">
        <SignedOut>
          <Link href="/">Logo</Link>
        </SignedOut>

        <SignedIn>
          <Link href="/haircuts">Logo</Link>
        </SignedIn>

        <div className="flex gap-4">
          <SignedIn>
              <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Header;
