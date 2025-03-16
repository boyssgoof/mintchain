/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/error.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ERROR_FLAG_KEY = "dom_error_occurred";
const MAX_RELOAD_ATTEMPTS = 2;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [errorCount, setErrorCount] = useState(0);

  // Detect DOM node errors
  const isDOMNodeError =
    error.message?.includes("removeChild") &&
    error.message?.includes("Node") &&
    error.message?.includes("not a child of this node");

  useEffect(() => {
    // Log error to console
    console.error("Error caught by error boundary:", error);

    if (isDOMNodeError) {
      // Get current error count
      const count = parseInt(sessionStorage.getItem(ERROR_FLAG_KEY) || "0");
      setErrorCount(count);

      // If we're under the max attempts and this is a DOM error
      if (count < MAX_RELOAD_ATTEMPTS) {
        // Increment counter
        sessionStorage.setItem(ERROR_FLAG_KEY, (count + 1).toString());

        // Navigate to home if not already there
        if (window.location.pathname !== "/") {
          router.push("/");
        } else {
          // We're already at home, so just reset the component
          reset();
        }
      }
      // If we've hit max attempts, stay on error page (don't redirect)
    }
  }, [error, router, reset, isDOMNodeError]);

  // Function to clear storage and try again
  const handleClearAndReset = () => {
    sessionStorage.removeItem(ERROR_FLAG_KEY);
    reset();
  };

  // Special view for DOM errors that have hit max attempts
  if (isDOMNodeError && errorCount >= MAX_RELOAD_ATTEMPTS) {
    return (
      <div className="flex flex-col min-h-[80vh] items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-orange-600 px-6 py-4">
            <h1 className="text-xl font-bold text-white flex items-center">
              <span className="mr-2">⚠️</span>
              Persistent Error Detected
            </h1>
          </div>

          <div className="px-6 py-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                We are having trouble rendering this page
              </h2>
              <p className="text-gray-600 mb-6">
                We have detected a persistent DOM-related error. To resolve this
                issue:
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleClearAndReset}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear Cache & Try Again
                </button>

                <Link
                  href="/"
                  className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Go to Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard error view for other errors
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Error header */}
        <div className="bg-red-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white flex items-center">
              <span className="mr-2">⚠️</span>
              Application Error
            </h1>
            <span className="bg-red-700 text-white text-xs px-2 py-1 rounded-full">
              Something Went Wrong
            </span>
          </div>
        </div>

        {/* Error body */}
        <div className="px-6 py-8">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="relative w-24 h-24">
                <Image
                  src="/error-illustration.svg"
                  alt="Error illustration"
                  fill
                  className="object-contain"
                  onError={(e: any) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Something went wrong
              </h2>
              <p className="text-gray-600">
                We encountered an error while processing your request.
                {error?.digest && (
                  <span className="block text-sm text-gray-500 mt-1">
                    Error ID: {error.digest}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <button
              onClick={reset}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
