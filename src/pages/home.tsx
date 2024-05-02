import Link from "next/link";
import "../app/globals.css";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/popover";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/avatar";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
      <header className="flex h-16 shrink-0 items-center border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex w-full max-w-6xl items-center justify-between">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <BookIcon className="h-6 w-6" />
            <span>studyNet</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="/home"
            >
              Home
            </Link>

            <Popover>
              <PopoverTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <BellIcon className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-80"></PopoverContent>
            </Popover>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="/login"
            >
              Log In
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="container py-12 md:py-24">
          <div className="mx-auto grid max-w-4xl gap-8">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome to studyNet
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Explore and join classes to start learning.
              </p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Intro to Computer Science</CardTitle>
                  <CardDescription>
                    Learn the fundamentals of computer science with this
                    introductory course.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          John Doe
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Instructor
                        </p>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Calculus</CardTitle>
                  <CardDescription>
                    Dive deep into the world of advanced calculus and master
                    complex mathematical concepts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/avatars/02.png" />
                        <AvatarFallback>JA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Jane Avery
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Instructor
                        </p>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Creative Writing Workshop</CardTitle>
                  <CardDescription>
                    Unleash your creative potential and hone your writing skills
                    in this interactive workshop.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/avatars/03.png" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Olivia Martin
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Instructor
                        </p>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex h-16 shrink-0 items-center border-t bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex w-full max-w-6xl items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 studyNet. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
