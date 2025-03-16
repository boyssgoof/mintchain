// src/utils/errorHandler.ts
"use client";

const ERROR_FLAG_KEY = "dom_error_occurred";
const MAX_RELOAD_ATTEMPTS = 1;

export function setupGlobalErrorHandlers() {
  if (typeof window === "undefined") return;

  // First, check if we're in a potential reload loop
  const errorCount = parseInt(sessionStorage.getItem(ERROR_FLAG_KEY) || "0");

  // If we've already tried reloading too many times, don't set up the handlers
  // that would cause another reload
  if (errorCount >= MAX_RELOAD_ATTEMPTS) {
    console.warn(
      `Detected ${errorCount} consecutive reloads due to DOM errors. Stopping reload loop.`
    );
    return;
  }

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
      console.error("Caught DOM node error:", error);

      // Increment error counter in session storage
      sessionStorage.setItem(ERROR_FLAG_KEY, (errorCount + 1).toString());

      // If we haven't hit the max attempts, redirect to home instead of reloading
      if (errorCount < MAX_RELOAD_ATTEMPTS) {
        // Go to home page instead of reloading the current page
        if (window.location.pathname !== "/") {
          window.location.href = "/";
        } else {
          // If we're already on the home page, try reloading once
          window.location.reload();
        }
      } else {
        // Display an error message to the user instead of reloading
        displayFallbackErrorMessage();
      }

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
      console.error("Caught DOM node error in promise:", error);
      event.preventDefault();

      // Increment error counter in session storage
      sessionStorage.setItem(ERROR_FLAG_KEY, (errorCount + 1).toString());

      // If we haven't hit the max attempts, redirect to home
      if (errorCount < MAX_RELOAD_ATTEMPTS) {
        if (window.location.pathname !== "/") {
          window.location.href = "/";
        } else {
          // If we're already on the home page, try reloading once
          window.location.reload();
        }
      } else {
        // Display an error message instead of reloading
        displayFallbackErrorMessage();
      }
    }
  });

  // Reset error counter on successful page load
  window.addEventListener("load", () => {
    // Small delay to ensure the page has fully loaded without errors
    setTimeout(() => {
      sessionStorage.removeItem(ERROR_FLAG_KEY);
    }, 1000);
  });
}

// Function to display a minimal error UI when we've hit max reload attempts
function displayFallbackErrorMessage() {
  // Create a simple error overlay
  const errorDiv = document.createElement("div");
  errorDiv.style.position = "fixed";
  errorDiv.style.top = "0";
  errorDiv.style.left = "0";
  errorDiv.style.width = "100%";
  errorDiv.style.height = "100%";
  errorDiv.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  errorDiv.style.zIndex = "9999";
  errorDiv.style.display = "flex";
  errorDiv.style.flexDirection = "column";
  errorDiv.style.justifyContent = "center";
  errorDiv.style.alignItems = "center";
  errorDiv.style.padding = "20px";
  errorDiv.style.textAlign = "center";

  errorDiv.innerHTML = `
    <div style="max-width: 500px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
      <h2 style="color: #e53e3e; margin-bottom: 16px;">Something went wrong</h2>
      <p style="margin-bottom: 16px;">We're having trouble displaying this page. Please try one of the following:</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <a href="/" style="background: #3182ce; color: white; padding: 8px 16px; border-radius: 4px; text-decoration: none; margin-bottom: 8px;">Go to Home Page</a>
        <button id="clearStorageBtn" style="background: #718096; color: white; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;">Clear Cache & Reload</button>
      </div>
    </div>
  `;

  document.body.appendChild(errorDiv);

  // Add event listener to the clear cache button
  document.getElementById("clearStorageBtn")?.addEventListener("click", () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  });
}
