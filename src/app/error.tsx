/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/error.tsx
"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  // Detect DOM node errors and handle them specially
  const isDOMNodeError =
    error.message?.includes("removeChild") &&
    error.message?.includes("Node") &&
    error.message?.includes("not a child of this node");

  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV !== "production") {
      console.error("Error caught by error boundary:", error);
    }

    // Auto-handle DOM node errors with redirect or refresh
    if (isDOMNodeError) {
      // Option 1: Navigate to home page
      // router.push('/');

      // Option 2: Refresh the page (uncomment this and comment out the above for refresh instead)
      window.location.reload();
    }
  }, [error, router, isDOMNodeError]);

  // Return early with minimal UI during redirect/refresh for DOM errors
  if (isDOMNodeError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Reloading page...</p>
        </div>
      </div>
    );
  }

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

            <button
              onClick={() => window.location.reload()}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Refresh Page
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-100 text-center text-sm text-gray-600">
          If this problem persists, please contact{" "}
          <a
            href="mailto:support@yourapp.com"
            className="text-blue-600 hover:underline"
          >
            support@yourapp.com
          </a>
        </div>
      </div>
    </div>
  );
}
