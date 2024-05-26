import Link from "next/link";
import "../app/globals.css";

import { Button } from "@/components/button";
import { Popover } from "@/components/popover";
import { CardContent, Card } from "@/components/card";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import router from "next/router";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<DecodedToken | null>(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify({ email, password }));
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log(response);
        console.error("Login failed:", response.statusText);
        return;
      }
      console.log(response);
      if (response.status === 201) {
        console.log("Login successful (status 201)");
        router.push("/home");
      }
      const Token = await response.text();
      try {
        //decode the token
        const decodedToken: DecodedToken = jwtDecode(Token);
        const { id, role, email } = decodedToken;

        //get the infos needed and set the token in localstorage
        const userDetails = { id, role, email };
        localStorage.setItem("token", Token);

        //set the user in state
        localStorage.setItem("user", JSON.stringify(userDetails));

      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
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
              href="/home"
            >
              Home
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>{" "}
      <main className="flex-1 overflow-auto">
        <section className="container py-8 ">
          <div className="mx-auto grid max-w-4xl gap-8">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Login to studyNet
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your credentials to access your account.
              </p>
            </div>
            <Card>
              <form onSubmit={handleLogin}>
                <CardContent className="grid gap-4">
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
                  <Button className="w-full">Sign In</Button>

                  <div className="flex items-center justify-between">
                    <Link
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="/sign-up"
                    >
                      Don't have an account? Sign up
                    </Link>
                  </div>
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
interface DecodedToken {
  id: string;
  role: string;
  email: string;
}
