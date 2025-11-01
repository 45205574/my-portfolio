"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.includes("@") && password.length >= 8;

  const handleSignUp = async () => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
  };

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isFormValid) {
      handleLogin();
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <main className="flex flex-col w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg space-y-6">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Welcome! to Manager
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Sign up or log in to continue
          </p>
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
          />
          {!email.includes("@") && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid email.</p>
          )}
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <input
            type="password"
            placeholder="Password (min 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 border rounded-md border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
          />
          {password.length < 8 && (
            <p className="text-red-500 text-sm mt-1">
              Password must be at least 8 characters.
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button
            onClick={handleSignUp}
            disabled={!isFormValid}
            className="w-full sm:w-1/2 bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            disabled={!isFormValid}
            className="w-full sm:w-1/2 bg-green-600 text-white font-medium py-3 rounded-md hover:bg-green-700 disabled:opacity-50 transition"
          >
            Log In
          </button>
        </div>

        {/* Footer / Info */}
        <p className="text-center text-zinc-600 dark:text-zinc-400 text-sm">
          This website is a personal portfolio and business page where you can explore
          my projects, get in touch, and learn more about what I do.
          <br />
          AMU CHANTEL
          <br />
          MEMENTO MORI
        </p>
      </main>
    </div>
  );
}
