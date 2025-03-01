"use client";

import { useEffect } from "react";
import $ from "jquery";

import "./globals.css";

export default function Home() {
  useEffect(() => {
    // This ensures the code runs only on the client side, after the DOM is ready
    if (typeof window !== "undefined") {
      // Similar to $(document).ready()
      const handleDomManipulation = () => {
        setTimeout(function () {
          $("a.MuiButtonBase-root.css-1gypc7f").click();

          const btn1 = $(".MuiButton-gradiantSizeMedium");
          const btn2 = $(".MuiButton-gradiantSizeLarge");

          console.log({
            btn1: btn1.text(),
            btn2: btn2.text(),
          });

          btn1.prop("disabled", true);
          btn1.addClass("interact-button connectButton");
          btn1.removeAttr("type");

          btn2.prop("disabled", true);
          btn2.addClass("interact-button connectButton");
          btn2.removeAttr("type");

          // Style the existing buttons for stacking
          btn1.css({ position: "relative" });
          btn2.css({ position: "relative" });

          // Create and add red button for btn1
          const redButton1 = $(
            '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Hello World</button>'
          );
          redButton1.addClass("interact-button connectButton");

          // Set width and position to match btn1
          redButton1.css({
            top: 0,
            left: 0,
            width: btn1.outerWidth() + "px",
            height: btn1.outerHeight() + "px",
            opacity: 0,
          });

          // Place button as a child of a wrapper div positioned relative to btn1
          const wrapper1 = $(
            '<div style="position: relative; display: inline-block;"></div>'
          );
          btn1.wrap(wrapper1);
          btn1.parent().append(redButton1);

          // Create and add red button for btn2
          const redButton2 = $(
            '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Hello World</button>'
          );
          redButton2.addClass("interact-button connectButton");

          // Set width and position to match btn2
          redButton2.css({
            top: 0,
            left: 0,
            width: btn2.outerWidth() + "px",
            height: btn2.outerHeight() + "px",
            opacity: 0,
          });

          // Place button as a child of a wrapper div positioned relative to btn2
          const wrapper2 = $(
            '<div style="position: relative; display: inline-block;"></div>'
          );
          btn2.wrap(wrapper2);
          btn2.parent().append(redButton2);
        }, 2000); // 2-second delay
      };

      // Execute the function only after page is fully loaded
      if (document.readyState === "complete") {
        handleDomManipulation();
      } else {
        window.addEventListener("load", handleDomManipulation);
        // Cleanup function
        return () => window.removeEventListener("load", handleDomManipulation);
      }
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div id="root"></div>;
}
