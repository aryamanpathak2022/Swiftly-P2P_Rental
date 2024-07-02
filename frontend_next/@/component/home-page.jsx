/**


/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Footer } from "./footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function HomePage() {
  return (
    (<div className="flex flex-col w-screen  ">
      <header className="items-center bg-primary text-primary-foreground py-6 sm:py-8 md:py-10">
        <div className="  px-4 md:px-6 flex items-center justify-between w-screen ">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            Swiftly
          </Link>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Login
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Sign Up
            </Link>
          </div>
        </div>
        <div className="container px-4 md:px-6 mt-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-4">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Discover the world with Swiftly
              </h1>
              <p className="text-lg md:text-xl">
                Rent unique items from local hosts and experience the world like a local.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Find an item
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Become a host
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Hero"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover " />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="flex gap-2">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="flex justify-center py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-8 md:space-y-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Popular item categories</h2>
                <p className="mt-2 text-muted-foreground md:text-lg">
                  Explore a wide range of unique items for your next getaway.
                </p>
              </div>
              <div
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <HomeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center text-sm font-medium">Furniture</div>
                </Link>
                
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <CaravanIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center text-sm font-medium">Electronics</div>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <SailboatIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center text-sm font-medium">Sporting Goods</div>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <TentIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center text-sm font-medium">Outdoor Gear</div>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <TreesIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center text-sm font-medium">Decor & Accessories</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex justify-center py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-8 md:space-y-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Featured items</h2>
                <p className="mt-2 text-muted-foreground md:text-lg">Discover unique and inspiring items.</p>
              </div>
              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Link
                  href="#"
                  className="group relative block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Item"
                    className="h-[240px] w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Vintage Camera</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Capture memories with this classic camera.</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <span>4.9</span>
                      </div>
                      <div className="text-primary font-medium">$50 / day</div>
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group relative block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Item"
                    className="h-[240px] w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Retro Bike</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Explore the city in style on this classic bike.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <span>4.7</span>
                      </div>
                      <div className="text-primary font-medium">$20 / day</div>
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group relative block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Item"
                    className="h-[240px] w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Vintage Typewriter</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Experience the nostalgia of this classic typewriter.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <span>4.8</span>
                      </div>
                      <div className="text-primary font-medium">$30 / day</div>
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group relative block overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Item"
                    className="h-[240px] w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Vintage Suitcase</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Travel in style with this classic suitcase.</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <span>4.9</span>
                      </div>
                      <div className="text-primary font-medium">$15 / day</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="flex justify-center py-12 md:py-16 lg:py-20"> */}
          <Footer />
        {/* </section> */}
       
      </main>
    </div>)
  );
}

function CaravanIcon(props) {
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
      <rect width="4" height="4" x="2" y="9" />
      <rect width="4" height="10" x="10" y="9" />
      <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
      <circle cx="8" cy="19" r="2" />
      <path d="M10 19h12v-2" />
    </svg>)
  );
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function SailboatIcon(props) {
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
      <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
      <path d="M21 14 10 2 3 14h18Z" />
      <path d="M10 2v16" />
    </svg>)
  );
}


function StarIcon(props) {
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
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}


function TentIcon(props) {
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
      <path d="M3.5 21 14 3" />
      <path d="M20.5 21 10 3" />
      <path d="M15.5 21 12 15l-3.5 6" />
      <path d="M2 21h20" />
    </svg>)
  );
}


function TreesIcon(props) {
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
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path
        d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>)
  );
}
