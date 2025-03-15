// src/app/globals.ts or src/utils/errorHandler.ts
"use client";

export function setupGlobalErrorHandlers() {
  if (typeof window !== "undefined") {
    // Keep the original error event handler
    const originalOnError = window.onerror;

    // Override with our custom handler
    window.onerror = function (message, source, lineno, colno, error) {
      // Check if it's the specific DOM node error
      if (
        error instanceof Error &&
        error.message?.includes("removeChild") &&
        error.message?.includes("Node") &&
        error.message?.includes("not a child of this node")
      ) {
        console.error("Caught DOM node error, refreshing page:", error);

        // Option 1: Refresh the page
        window.location.reload();

        // Option 2: Redirect to home (uncomment to use this instead)
        // window.location.href = '/';

        return true; // Prevents the error from bubbling up
      }

      // Call the original handler for other errors
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }

      return false;
    };

    // For unhandled promise rejections
    window.addEventListener("unhandledrejection", (event) => {
      const error = event.reason;

      if (
        error instanceof Error &&
        error.message?.includes("removeChild") &&
        error.message?.includes("Node") &&
        error.message?.includes("not a child of this node")
      ) {
        console.error(
          "Caught DOM node error in promise, refreshing page:",
          error
        );
        event.preventDefault();

        // Refresh the page
        window.location.reload();

        // Or redirect to home
        // window.location.href = '/';
      }
    });
  }
}
