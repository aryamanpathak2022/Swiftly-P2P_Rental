/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/FzKGGBXqTbm
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function Bulk_items() {
  return (
    (<div className="bg-background text-foreground">
      <header
        className="flex items-center justify-between px-4 py-3 border-b border-muted sm:px-6 md:px-8">
        <Link href="#" className="font-bold text-2xl" prefetch={false}>
          Swiftly
        </Link>
        <div className="relative w-full max-w-md">
          <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search rentals..."
            className="pl-10 pr-4 py-2 rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
              <img
                src="/placeholder.svg"
                width="32"
                height="32"
                className="rounded-full"
                alt="Avatar" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <PlusIcon className="h-4 w-4" />
                Post new item
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <PackageIcon className="h-4 w-4" />
                Items posted
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <TruckIcon className="h-4 w-4" />
                Items rented
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <UserIcon className="h-4 w-4" />
                Your profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <CircleHelpIcon className="h-4 w-4" />
                Help and support
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8">
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Rental Item 1"
              width={300}
              height={200}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Cozy Cabin in the Woods</h3>
              <p className="text-sm text-muted-foreground">Hosted by Jane Doe</p>
              <p className="text-lg font-bold">$99/day</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Rental Item 2"
              width={300}
              height={200}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Beachfront Bungalow</h3>
              <p className="text-sm text-muted-foreground">Hosted by John Smith</p>
              <p className="text-lg font-bold">$150/day</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Rental Item 3"
              width={300}
              height={200}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Luxury Loft Apartment</h3>
              <p className="text-sm text-muted-foreground">Hosted by Sarah Lee</p>
              <p className="text-lg font-bold">$200/day</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Rental Item 4"
              width={300}
              height={200}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Charming Countryside Cottage</h3>
              <p className="text-sm text-muted-foreground">Hosted by Michael Johnson</p>
              <p className="text-lg font-bold">$120/day</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Rental Item 5"
              width={300}
              height={200}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Modern City Apartment</h3>
              <p className="text-sm text-muted-foreground">Hosted by Emily Davis</p>
              <p className="text-lg font-bold">$180/day</p>
            </div>
          </Link>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Rental Item 6"
              width={300}
              height={200}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Rustic Mountain Retreat</h3>
              <p className="text-sm text-muted-foreground">Hosted by David Lee</p>
              <p className="text-lg font-bold">$160/day</p>
            </div>
          </Link>
        </div>
      </main>
    </div>)
  );
}

function CircleHelpIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>)
  );
}


function PackageIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}


function PlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function TruckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path
        d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
