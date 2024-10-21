import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

async function Header() {
  return (
    <div className="bg-black relative top-0  right-0 left-0 p-3">
      <div className="flex justify-between lg:px-10 sm:px-0 items-center text-white">
        <SignedOut>
          <Link href="/">
            <Image
              width={200}
              height={200}
              src="/images/logo.png"
              alt="logo image"
            />
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/haircuts">
            <Image
              width={200}
              height={200}
              src="/images/logo.png"
              alt="logo image"
            />
          </Link>
        </SignedIn>

        <div className="flex lg:gap-10 gap-4 text-lg font-semibold md:text-2xl">
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
