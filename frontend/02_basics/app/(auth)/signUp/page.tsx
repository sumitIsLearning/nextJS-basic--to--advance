"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AtSign } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-6 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Sign Up
        </h2>

        {/* Input Card */}
        <EmailInput />

        {/* Submit Button */}
        <div className="my-3">
          <PasswordInput />
        </div>

        <div>
          <ButtonComponent />
        </div>

        <p className="text-sm text-center mt-4 text-black">
          have an account?{" "}
          <a href="/auth/signIn" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

function EmailInput() {
  return (
    <div className="space-y-4">
      {/* Email Input */}
      <div className="space-y-2">
        <Label htmlFor="input-09" className="text-sm font-medium text-black">
          Email
        </Label>
        <div className="relative">
          <Input
            id="input-09"
            className="peer ps-9 border border-gray-300 rounded-md w-full px-4 py-2"
            placeholder="Enter your email"
            type="email"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-gray-500">
            <AtSign size={16} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PasswordInput() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-23">Show/hide password input</Label>
      <div className="relative">
        <Input
          id="input-23"
          className="pe-9 border border-gray-300"
          placeholder="Password"
          type={isVisible ? "text" : "password"}
        />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}

function ButtonComponent() {
  return (
    <Button className="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm border border-gray-300 transition-all hover:border-gray-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      Sign Up
    </Button>
  );
}

export default SignUp;
