"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation: email must include @, password at least 8 chars
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

  // Trigger login when Enter is pressed in password input
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isFormValid) {
      handleLogin();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center justify-center bg-white dark:bg-black p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
          Welcome! to Manager
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-center">
          Sign up or log in to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 w-full p-3 border rounded-md border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {!email.includes("@") && (
          <p className="text-red-500 text-sm mb-2">Please enter a valid email.</p>
        )}

        <input
          type="password"
          placeholder="Password (min 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown} // <-- triggers login on Enter
          className="mb-2 w-full p-3 border rounded-md border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {password.length < 8 && (
          <p className="text-red-500 text-sm mb-4">
            Password must be at least 8 characters.
          </p>
        )}

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

        <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400 text-sm">
          This website is a personal portfolio and business page where you can explore
          my projects, get in touch, and learn more about what I do.
            <br />AMU CHANTEL
            <br />MEMENTO MORI
        </p>
      </main>
    </div>
  );
}
