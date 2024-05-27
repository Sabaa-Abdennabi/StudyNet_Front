import "../app/globals.css";
import Link from "next/link";
import { Button } from "@/components/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/popover";
import { CardContent, Card } from "@/components/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/avatar";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import router from "next/router";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (role === "teacher") {
      var url = "http://localhost:3001/teachers";
    } else {
      var url = "http://localhost:3001/students";
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        level:"MPI",
      }),
    });

    if (response.status !== 201) {
      console.error("Login failed:", response);
      return;
    }
    if (response.status === 201) {
    const data = await response.json();
    console.log("Response:", data);
    console.log("success");
    router.push("/login");
  };}
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

            <Popover></Popover>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="container py-12 md:py-24">
          <div className="mx-auto grid max-w-4xl gap-8">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Sign Up to studyNet
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your information to create an account.
              </p>
            </div>
            <Card>
              <form onSubmit={handleSubmit}>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="isTeacher"
                        name="role"
                        className="radio"
                        value="teacher"
                        checked={role === "teacher"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      I am a teacher
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="isStudent"
                        name="role"
                        className="radio"
                        value="student"
                        checked={role === "student"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      I am a student
                    </Label>
                  </div>

                  <Button className="w-full">Sign Up</Button>
                </CardContent>
              </form>
            </Card>
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
