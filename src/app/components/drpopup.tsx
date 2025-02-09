"use client";

import React, { useState } from "react";

const DrPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const popupStyle: React.CSSProperties = {
    display: isVisible ? "flex" : "none",
    position: "fixed",
    inset: 0,
    zIndex: 150,
    height: "100%",
    width: "100%",
    transition: "opacity 0.3s ease-in-out",
    background: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "100%",
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: "16px",
    background: "#191919",
    width: "360px",
    maxHeight: "calc(100vh)",
    maxWidth: "100%",
  };

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Popup" : "Show Popup"}
      </button>

      <div id="drPopup" className="drPopup" style={popupStyle}>
        <div className="keks-container" style={{ margin: "40px 0" }}>
          <div className="keks-content" style={contentStyle}>
            <div
              className="keks-title"
              style={{
                position: "relative",
                textAlign: "center",
                padding: "16px 24px",
              }}
            >
              <h4
                style={{
                  fontWeight: 600,
                  lineHeight: "110%",
                  fontSize: "22px",
                  color: "#fff",
                  padding: "4px 16px",
                }}
              >
                Pending...
              </h4>
              <div className="keks-close" id="popupClose"></div>
            </div>
            <div className="keks-details" style={{ padding: "24px" }}>
              <div style={{ alignItems: "center", gap: "25px" }}>
                <div className="keks-image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                      margin: "auto",
                      background: "0 0",
                      display: "block",
                      shapeRendering: "auto",
                    }}
                    width="200px"
                    height="200px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="32"
                      strokeWidth="8"
                      stroke="#2775ca"
                      strokeDasharray="50.26548245743669 50.26548245743669"
                      fill="none"
                      strokeLinecap="round"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1s"
                        keyTimes="0;1"
                        values="0 50 50;360 50 50"
                      ></animateTransform>
                    </circle>
                  </svg>
                </div>
                <div className="keks-imageName">
                  <p
                    style={{
                      fontSize: "16.5px",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  ></p>
                </div>
              </div>
              <hr
                style={{
                  padding: 0,
                  margin: "28px 0",
                  opacity: 0.2,
                  borderColor: "#8a939b currentcolor currentcolor",
                  borderStyle: "solid none none",
                  borderWidth: "1px medium medium",
                  borderImage: "none 100%/1/0 stretch",
                  color: "#8a939b",
                  textAlign: "center",
                }}
              />
              <div className="keks-text">
                <div
                  style={{
                    color: "#fff",
                    alignItems: "center",
                    marginBottom: "12px",
                    display: "flex",
                    textAlign: "center",
                    fontWeight: 600,
                    background: "#323232",
                    borderRadius: "12px",
                    padding: "7px",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    Approve assets to use our new protocol
                  </h3>
                </div>
                <div
                  style={{
                    color: "#fff",
                    lineHeight: "140%",
                    marginBottom: "12px",
                    fontWeight: 600,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: 600,
                      position: "relative",
                    }}
                  >
                    Check your wallet for signature request
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrPopup;
