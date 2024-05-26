import Link from "next/link";
import "../app/globals.css";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/popover";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/avatar";
import { useEffect, useState } from "react";

interface notif {
  post: string;
 // user:string;
  class:string;
}


export default function Feed() {
  const [notifications, setNotifications] = useState<notif[]>([]); 

  useEffect(() => {
    
    console.log("useEffect called");
    
    const url = 'http://localhost:3000/posts/sse';
    const eventSource = new EventSource(url, { withCredentials: true });
    console.log(eventSource)
    eventSource.onmessage = (event) => {
      console.log("Event received:", event.data);
      const data = JSON.parse(event.data);
      console.log('Received data:', data);
      setNotifications((prevNotifications) => [...prevNotifications, data]);
    };
    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      // You can add additional error handling logic here
    };
  
    console.log("EventSource created");
    // Cleanup function to close EventSource when the component unmounts
    return () => {
      console.log("Cleaning up EventSource");
      eventSource.close();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
      <header className="flex h-16 shrink-0 items-center border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex w-full max-w-6xl items-center justify-between">
          <Link className="flex items-center gap-2 font-semibold" href="/feed">
            <BookIcon className="h-6 w-6" />
            <span>studyNet</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="/joinClass"
            >
              Join Class
            </Link>

            <Popover>
              <PopoverTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <BellIcon className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-80">
                <Card className="shadow-none border-0">
                  <CardHeader className="border-b">
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      You have 3 unread messages.
                    </CardDescription>
                  </CardHeader>
                  {notifications.map((notification, index) => (
                  <CardContent  key={index}  className="p-6">
              
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                      <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                      <div className="grid gap-1">
                        <p className="text-sm font-medium">
                        {notification.class}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                        {notification.post}
                        </p>
                      </div>
                    </div> 
                  </CardContent>
                  ))}
                </Card>
              </PopoverContent>
            </Popover>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/home"
            >
              Log out
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="container py-12 md:py-24">
          <div className="mx-auto grid max-w-4xl gap-8">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Intro to Computer Science
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                View updates and announcements for this class.
              </p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
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
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posted 2 hours ago
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold">
                    Lecture 1: Introduction to Computer Science
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    In this lecture, we will cover the fundamentals of computer
                    science, including hardware, software, and programming
                    concepts.
                  </p>
                </CardContent>
                <div className="mt-4">
                  <h4 className="text-md font-medium">Related Files:</h4>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="/files/c.pdf"
                        className="text-blue-500 hover:underline text-md font-medium"
                      >
                        First-File.pdf
                      </a>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card>
                <CardHeader>
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
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posted 1 day ago
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold">
                    Lecture 2: Data Structures and Algorithms
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    In this lecture, we will explore the fundamental data
                    structures and algorithms used in computer science.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
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

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}