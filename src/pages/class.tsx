import "../app/globals.css";
import { Footer } from "@/components/Footer";
import Link from "next/link";
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
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DecodedToken } from "@/lib/interface";

export default function Class() {
  const router = useRouter();
  const [class_name, setClass_name] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  //retrive the user from the localstorage

  const [user, setUser] = useState<DecodedToken | null>(null);
  const [Token, setToken] = useState<string | null>(null);

  //the code needed to get the user from the localstorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (storedUser) {
      setToken(token);
      const userDetails: DecodedToken = JSON.parse(storedUser);
      setUser(userDetails);
      console.log(userDetails);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(Token);
      const response = await fetch("http://localhost:3001/class/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ class_name, description, level }),
      });

      if (!response.ok) {
        console.log("cant create class", response);
        return;
      }

      const data = await response.json();
      console.log("Class created successfully:", data);
      router.push("/feedt");
    } catch (error) {
      console.error("Error creating Class:", error);
    }
  };

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
              href="feedt"
            >
              Home
            </Link>

            <div className="flex items-center gap-2">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/home"
              >
                Log Out
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="container py-12 md:py-24">
          <div className="mx-auto grid max-w-4xl gap-8">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Create a Class
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter the details to create a new class.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <Card>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="className">Class Name</Label>
                      <Input
                        id="className"
                        placeholder="Intro to Computer Science"
                        value={class_name}
                        onChange={(e) => setClass_name(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="classDescription">
                        Class Description
                      </Label>
                      <Textarea
                        id="classDescription"
                        placeholder="Enter a description for your class"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="Level">Class Level</Label>
                      <Input
                        id="level"
                        placeholder="MPI"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Create Class
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
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