import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
      <Link
      href="/"
      className="flex items-center gap-2 font-bold text-2xl font-mono hover:opacity-80 transition-opacity"
    >
      <span className="flex items-center space-x-1 text-[#0070BA]">
        <span className="text-3x1">ʕノ•ᴥ•ʔノ</span>
      </span>
      <span className="bg-gradient-to-r from-[#0070BA] to-[#00AEEF] bg-clip-text text-transparent">
        Code-INT
      </span>
    </Link>

        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;