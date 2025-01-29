import Link from "next/link"
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b px-10">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src='/logo.png' alt="logo" width={200} height={200} />
          </Link>
          <nav className="flex gap-6">
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            {/* <Link
              href="/"
              className="flex items-center text-sm font-medium text-muted-foreground"
            >
              Home
            </Link> */}
            <Link
              href="/examples"
              className="flex items-center text-sm font-medium text-muted-foreground"
            >
              Examples
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}