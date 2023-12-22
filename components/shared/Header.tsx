import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <ClerkLoading>
              <Skeleton className="rounded-full w-[32px] h-[32px]" />
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </ClerkLoaded>
          </SignedIn>

          {/* when user is not signed in this button will be appeared */}
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
