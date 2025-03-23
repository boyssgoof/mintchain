"use client";

import { useEffect, useRef, useState } from "react";
import $ from "jquery";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import menuMintGif from "../images/menu-mint-token.gif";
import mintyLogo from "../images/minty-logo.png";
import mintyText from "../images/minty-text.png";
import coinGif from "../images/coin.gif";
import picPercentage from "../images/pic-percentage.png";

import "../css/03ccc20be64f85af.css";
import "../css/style.css";

export default function Home() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBuildMenu, setShowBuildMenu] = useState(false);
  const [showUseMenu, setShowUseMenu] = useState(false);
  const [showMintTokenMenu, setShowMintTokenMenu] = useState(false);
  const [showEcosystemMenu, setShowEcosystemMenu] = useState(false);
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if any menu is open
      const anyMenuIsOpen =
        showBuildMenu ||
        showUseMenu ||
        showMintTokenMenu ||
        showEcosystemMenu ||
        showCommunityMenu ||
        showMobileMenu;

      // If a menu is open and the click is outside the menu container
      if (anyMenuIsOpen) {
        setShowMobileMenu(false);
        setShowBuildMenu(false);
        setShowUseMenu(false);
        setShowMintTokenMenu(false);
        setShowEcosystemMenu(false);
        setShowCommunityMenu(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    showBuildMenu,
    showUseMenu,
    showMintTokenMenu,
    showEcosystemMenu,
    showCommunityMenu,
    showMobileMenu,
  ]);
  return (
    <div id="root">
      <div data-rk="">
        <div
          className="__classNameName_4bc053 pt-36 mobile:pt-18 bg-bg-main"
          id="app-root"
        >
          <header className="fixed w-full top-0 py-8 laptop:py-3 z-[99] header-root bg-g-10">
            <div className="flex justify-between items-center w-full gap-12 max-w-[1320px] px-10 mx-auto laptop:block">
              <div className="flex-1 laptop:flex laptop:justify-between laptop:items-center">
                <Link
                  className="block relative w-[126px] h-[32px] laptop:w-[86px] laptop:h-[22px] group text-[#EBF5ED]"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="126"
                    height="32"
                    fill="none"
                    viewBox="0 0 126 32"
                    className="w-full h-full"
                  >
                    <g fill="currentColor">
                      <path d="M0 0c8.837 0 16 7.163 16 16C7.163 16 0 8.837 0 0M32 32c-8.837 0-16-7.163-16-16 8.837 0 16 7.163 16 16M16 16a8 8 0 0 1 8-8 8 8 0 0 1-8 8M16 16a8 8 0 0 1-8 8 8 8 0 0 1 8-8M82.96 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M72 6v22h3v2H65v-2h3V8h-.3l-8.2 17.58L51.3 8v20H54v2h-8v-2h2.7V6H46V4h8l6.5 13.94L67 4h8v2zM87.5 30v-2H85V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2zM111.7 30v-2H109V16c0-3.32-2.68-6-6-6-2.96 0-5.42 2.14-5.9 4.94V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2h9.1v-2h-2.5V16.96c0-2.2 1.74-3.96 3.94-3.96s3.96 1.76 3.96 3.96V28h-2.4v2zM120.7 13v15h5.3v2h-7.3c-1.1 0-2-.9-2-2V13h-3.74v-2h1.24c1.04 0 1.92-.64 2.3-1.52l.2-.42L118.6 5h2.1v6h5.3v2z"></path>
                    </g>
                    <mask
                      id="logo_svg__a"
                      width="126"
                      height="32"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                      style={{ maskType: "alpha" }}
                    >
                      <g fill="currentColor">
                        <path d="M0 0c8.837 0 16 7.163 16 16C7.163 16 0 8.837 0 0M32 32c-8.837 0-16-7.163-16-16 8.837 0 16 7.163 16 16M16 16a8 8 0 0 1 8-8 8 8 0 0 1-8 8M16 16a8 8 0 0 1-8 8 8 8 0 0 1 8-8M82.96 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M72 6v22h3v2H65v-2h3V8h-.3l-8.2 17.58L51.3 8v20H54v2h-8v-2h2.7V6H46V4h8l6.5 13.94L67 4h8v2zM87.5 30v-2H85V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2zM111.7 30v-2H109V16c0-3.32-2.68-6-6-6-2.96 0-5.42 2.14-5.9 4.94V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2h9.1v-2h-2.5V16.96c0-2.2 1.74-3.96 3.94-3.96s3.96 1.76 3.96 3.96V28h-2.4v2zM120.7 13v15h5.3v2h-7.3c-1.1 0-2-.9-2-2V13h-3.74v-2h1.24c1.04 0 1.92-.64 2.3-1.52l.2-.42L118.6 5h2.1v6h5.3v2z"></path>
                      </g>
                    </mask>
                  </svg>
                  <div className="absolute top-0 left-0 h-full w-0 z-10 overflow-hidden transition-all group-hover:w-full laptop:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="126"
                      height="32"
                      fill="none"
                      viewBox="0 0 126 32"
                      className="w-[126px] h-full"
                    >
                      <path
                        fill="#EBF5ED"
                        d="M0 0c8.837 0 16 7.163 16 16C7.163 16 0 8.837 0 0M32 32c-8.837 0-16-7.163-16-16 8.837 0 16 7.163 16 16M16 16a8 8 0 0 1 8-8 8 8 0 0 1-8 8M16 16a8 8 0 0 1-8 8 8 8 0 0 1 8-8M82.96 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M72 6v22h3v2H65v-2h3V8h-.3l-8.2 17.58L51.3 8v20H54v2h-8v-2h2.7V6H46V4h8l6.5 13.94L67 4h8v2zM87.5 30v-2H85V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2zM111.7 30v-2H109V16c0-3.32-2.68-6-6-6-2.96 0-5.42 2.14-5.9 4.94V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2h9.1v-2h-2.5V16.96c0-2.2 1.74-3.96 3.94-3.96s3.96 1.76 3.96 3.96V28h-2.4v2zM120.7 13v15h5.3v2h-7.3c-1.1 0-2-.9-2-2V13h-3.74v-2h1.24c1.04 0 1.92-.64 2.3-1.52l.2-.42L118.6 5h2.1v6h5.3v2z"
                      ></path>
                      <mask
                        id="logo-primary_svg__a"
                        width="126"
                        height="32"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: "alpha" }}
                      >
                        <path
                          fill="#EBF5ED"
                          d="M0 0c8.837 0 16 7.163 16 16C7.163 16 0 8.837 0 0M32 32c-8.837 0-16-7.163-16-16 8.837 0 16 7.163 16 16M16 16a8 8 0 0 1 8-8 8 8 0 0 1-8 8M16 16a8 8 0 0 1-8 8 8 8 0 0 1 8-8M82.96 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M72 6v22h3v2H65v-2h3V8h-.3l-8.2 17.58L51.3 8v20H54v2h-8v-2h2.7V6H46V4h8l6.5 13.94L67 4h8v2zM87.5 30v-2H85V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2zM111.7 30v-2H109V16c0-3.32-2.68-6-6-6-2.96 0-5.42 2.14-5.9 4.94V10l-4 .6-2.6.4v2l2.6.4V28h-2.6v2h9.1v-2h-2.5V16.96c0-2.2 1.74-3.96 3.94-3.96s3.96 1.76 3.96 3.96V28h-2.4v2zM120.7 13v15h5.3v2h-7.3c-1.1 0-2-.9-2-2V13h-3.74v-2h1.24c1.04 0 1.92-.64 2.3-1.52l.2-.42L118.6 5h2.1v6h5.3v2z"
                        ></path>
                      </mask>
                      <g mask="url(#logo-primary_svg__a)">
                        <path fill="#30BF54" d="M0 0h126v32H0z"></path>
                      </g>
                    </svg>
                  </div>
                </Link>
                <div className="flex items-center">
                  <div className="relative cursor-pointer group/connect hidden justify-center text-center laptop:flex monile:text-right interact-button">
                    <p className="text-md font-medium text-g-1">
                      Connect Wallet
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 -960 960 960"
                      className="w-18 h-18 text-g-1 cursor-pointer hidden laptop:block"
                      onClick={() => {
                        setShowMobileMenu(!showMobileMenu);
                      }}
                    >
                      <path
                        fill="currentColor"
                        d="M120-240v-80h720v80zm0-200v-80h720v80zm0-200v-80h720v80z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-24 laptop:hidden">
                <div
                  className="flex gap-3 items-center cursor-pointer relative"
                  onClick={() => setShowBuildMenu(!showBuildMenu)}
                >
                  <span className="block py-4 text-md text-g-1">Build</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="12"
                    fill="none"
                    viewBox="0 0 19 12"
                    className="w-7 h-7 transition-all rotate-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m2.115.656-1.5 1.5 9.193 9.193L19 2.156l-1.5-1.5L9.808 8.35z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {showBuildMenu && (
                    <div
                      className="absolute text-gray-400 left-0 w-fit px-4 select-none shadow-lg"
                      style={{
                        backgroundColor: "#1A2019",
                        minWidth: "200px",
                        top: "100%",
                      }}
                    >
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1  border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="https://docs.mintchain.io"
                      >
                        Developer Docs
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1  border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="/nips"
                      >
                        NIPs Platform
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1  border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="https://explorer.mintchain.io"
                      >
                        Block Explorer
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1  border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="https://mint.nftscan.com/"
                      >
                        Mint NFTScan
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1  border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="https://docs.mintchain.io/build/erc7765"
                      >
                        ERC7765
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1  border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="https://vote.optimism.io/delegates/mintblockchain.eth"
                      >
                        $OP Delegate
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="flex gap-3 items-center cursor-pointer relative"
                  onClick={() => {
                    setShowUseMenu(!showUseMenu);
                  }}
                >
                  <span className="block py-4 text-md text-g-1">Use</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="12"
                    fill="none"
                    viewBox="0 0 19 12"
                    className="w-7 h-7 transition-all rotate-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m2.115.656-1.5 1.5 9.193 9.193L19 2.156l-1.5-1.5L9.808 8.35z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {showUseMenu && (
                    <div
                      className="absolute text-gray-400 left-0 w-fit px-4 select-none shadow-lg"
                      style={{
                        backgroundColor: "#1A2019",
                        minWidth: "200px",
                        top: "100%",
                      }}
                    >
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="/bridge"
                      >
                        Bridge
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="/mint-forest"
                      >
                        Mint Forest
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="flex gap-3 items-center cursor-pointer relative cursor-pointer select-none"
                  onClick={() => setShowMintTokenMenu(!showMintTokenMenu)}
                >
                  <Image
                    alt="airdrop"
                    loading="lazy"
                    width="139"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={menuMintGif}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="12"
                    fill="none"
                    viewBox="0 0 19 12"
                    className="w-7 h-7 transition-all rotate-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m2.115.656-1.5 1.5 9.193 9.193L19 2.156l-1.5-1.5L9.808 8.35z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {showMintTokenMenu && (
                    <div
                      className="absolute text-gray-400 left-0 w-fit px-4 select-none shadow-lg"
                      style={{
                        backgroundColor: "#1A2019",
                        minWidth: "250px",
                        top: "100%",
                      }}
                    >
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="/mint-token"
                      >
                        $MINT Token
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="https://mintpool.mintchain.io/"
                      >
                        Staking & Restaking
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-g-1  hover:border-g-1 hover:bg-[#293329]"
                        href="/airdrop/claim"
                      >
                        $MINT Airdrop
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="flex gap-3 items-center cursor-pointer relative select-none"
                  onClick={() => setShowEcosystemMenu(!showEcosystemMenu)}
                >
                  <span className="block py-4 text-md text-g-1">Ecosystem</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="12"
                    fill="none"
                    viewBox="0 0 19 12"
                    className="w-7 h-7 transition-all rotate-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m2.115.656-1.5 1.5 9.193 9.193L19 2.156l-1.5-1.5L9.808 8.35z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {showEcosystemMenu && (
                    <div
                      className="absolute text-gray-400 left-0 w-fit px-4 select-none shadow-lg"
                      style={{
                        backgroundColor: "#1A2019",
                        minWidth: "250px",
                        top: "100%",
                      }}
                    >
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="/applications"
                      >
                        Applications
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="/ecofund"
                      >
                        Mint Eco Fund
                      </Link>
                      <Link
                        className="block px-5 mx-5 py-8 text-md text-g-1 border-transparent  hover:border-g-1 hover:bg-[#293329]"
                        href="/mintpass"
                      >
                        Mint Pass
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="flex gap-3 items-center cursor-pointer select-none relative"
                  onClick={() => setShowCommunityMenu(!showCommunityMenu)}
                >
                  <span className="block py-4 text-md text-g-1">Community</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="12"
                    fill="none"
                    viewBox="0 0 19 12"
                    className="w-7 h-7 transition-all rotate-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m2.115.656-1.5 1.5 9.193 9.193L19 2.156l-1.5-1.5L9.808 8.35z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {showCommunityMenu && (
                    <div
                      className="absolute text-gray-400 left-0 w-fit px-4 select-none shadow-lg"
                      style={{
                        backgroundColor: "#1A2019",
                        minWidth: "250px",
                        top: "100%",
                      }}
                    >
                      <div className="bg-[#1A201A] relative">
                        <div className="absolute -top-8 left-[50%] translate-x-[-50%] w-8 border-8 border-r-transparent border-l-transparent border-t-transparent border-b-[#1A201A]"></div>
                        <div className="flex items-center gap-6 p-6 mb-6 cursor-pointer text-g-6 hover:text-g-1 hover:bg-[#293329]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-12 h-12"
                          >
                            <path
                              fill="currentColor"
                              d="M9.072 16.927c.674 3.223 1.936 5.081 2.93 5.082.994-.001 2.257-1.858 2.93-5.083-.946.1-1.928.157-2.93.157s-1.984-.056-2.93-.156m-.284-8.139a26 26 0 0 0-.191 3.214c0 1.158.07 2.232.191 3.214.98.122 2.053.191 3.21.191 1.16 0 2.235-.07 3.218-.192.122-.981.19-2.055.19-3.213s-.068-2.232-.19-3.214a26 26 0 0 0-3.214-.191c-1.158 0-2.232.07-3.214.191m-1.706 6.144c-.1-.945-.156-1.927-.156-2.93s.056-1.984.156-2.93c-3.187.666-5.034 1.906-5.08 2.892L2 12.002l.002.038c.046.986 1.893 2.226 5.08 2.892m7.85-7.85C14.256 3.856 12.993 2 12.002 2s-2.255 1.858-2.93 5.082c.947-.1 1.928-.156 2.93-.156s1.983.056 2.93.156M22 12.002c0-.99-1.855-2.255-5.078-2.93a27.8 27.8 0 0 1 0 5.859C20.144 14.256 22 12.993 22 12.002m-5.325-4.673c1.206.217 2.324.515 3.294.896q.884.348 1.568.763a10.05 10.05 0 0 0-6.522-6.522q.416.684.764 1.569c.38.972.679 2.089.896 3.294m-9.346 0c.217-1.205.515-2.323.896-3.294q.348-.885.764-1.57a10.05 10.05 0 0 0-6.525 6.53q.684-.418 1.57-.765c.97-.383 2.089-.682 3.295-.9m0 9.35c-1.206-.216-2.324-.515-3.295-.896a10 10 0 0 1-1.567-.763 10.05 10.05 0 0 0 6.522 6.522 10 10 0 0 1-.764-1.568c-.38-.972-.678-2.09-.896-3.294m9.346-.002c-.217 1.206-.515 2.325-.896 3.297q-.348.885-.764 1.569a10.04 10.04 0 0 0 6.525-6.529q-.684.416-1.57.765c-.971.381-2.089.68-3.295.898"
                            ></path>
                          </svg>
                          <span className="text-md text-nowrap">
                            Global Hubs
                          </span>
                        </div>
                        <div className="flex items-center gap-6 p-6 mb-6 cursor-pointer text-g-6 hover:text-g-1 hover:bg-[#293329]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-12 h-12"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M2 12.5c0-5.523 4.477-10 10-10h.5a9.5 9.5 0 0 1 0 19H2zm5.5-2a1.5 1.5 0 1 1 3 0v3a1.5 1.5 0 0 1-3 0zM15 9a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 15 9"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-md">Forum</span>
                        </div>
                        <div className="flex items-center gap-6 p-6 mb-6 cursor-pointer text-g-6 hover:text-g-1 hover:bg-[#293329]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-12 h-12"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M15.996 18.545a6 6 0 0 0 3.4-2.119c-.674.428-1.396.782-2.153 1.058a13 13 0 0 1-2.73.766q-1.172.207-2.362.207a14.5 14.5 0 0 1-2.519-.225 16.4 16.4 0 0 1-2.776-.77q-.71-.255-1.374-.602a.5.5 0 0 0-.09-.048 1 1 0 0 1-.079-.044.2.2 0 0 1-.077-.056 7 7 0 0 1-.528-.3 5.9 5.9 0 0 0 3.306 2.103c-.553.663-1.263 1.482-1.263 1.482-2.275.061-4.432-.956-5.751-2.712.062-3.617.99-7.174 2.713-10.403a9.7 9.7 0 0 1 5.27-1.878h.013l.198.214A13.6 13.6 0 0 0 4.238 7.53c0 .01-.008.016-.008.016q0 0 .008-.003.004-.001.036-.017c.115-.057.502-.25 1.077-.5A14.8 14.8 0 0 1 9.626 5.9h.056a2 2 0 0 1 .266-.027 16.7 16.7 0 0 1 3.803-.035c1.99.217 3.916.799 5.672 1.713a13 13 0 0 0-4.692-2.265L14.994 5h.022a9.7 9.7 0 0 1 5.271 1.878A23.1 23.1 0 0 1 23 17.281c-1.336 1.745-3.49 2.758-5.765 2.713l-.03-.035c-.138-.157-.718-.82-1.21-1.414m-2.707-4.023c.383.736 1.204 1.174 2.066 1.102h-.002c1.106-.048 1.964-.933 1.92-1.981 0-.82-.532-1.557-1.339-1.854a2.18 2.18 0 0 0-2.31.51 1.91 1.91 0 0 0-.335 2.223m-6.729-.88c0 1.032.833 1.893 1.918 1.982 1.108-.047 1.966-.934 1.92-1.983a1.96 1.96 0 0 0-.595-1.445 1.9 1.9 0 0 0-1.325-.535c-1.085.09-1.918.95-1.918 1.982"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-md">Discord</span>
                        </div>
                        <div className="flex items-center gap-6 p-6 mb-6 cursor-pointer text-g-6 hover:text-g-1 hover:bg-[#293329]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-12 h-12"
                          >
                            <path
                              fill="currentColor"
                              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            ></path>
                          </svg>
                          <span className="text-md">Twitter</span>
                        </div>
                        <div className="flex items-center gap-6 p-6 mb-6 cursor-pointer text-g-6 hover:text-g-1 hover:bg-[#293329]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-12 h-12"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M12.008 2C6.474 2 2 6.507 2 12.083c0 4.457 2.867 8.23 6.843 9.565.498.1.68-.217.68-.484 0-.234-.017-1.035-.017-1.87-2.784.601-3.363-1.202-3.363-1.202-.448-1.168-1.11-1.469-1.11-1.469-.912-.617.066-.617.066-.617 1.01.066 1.54 1.035 1.54 1.035.895 1.535 2.337 1.101 2.917.834.083-.65.348-1.102.63-1.352-2.22-.234-4.557-1.102-4.557-4.975 0-1.101.397-2.003 1.027-2.704-.1-.25-.447-1.285.1-2.67 0 0 .845-.268 2.75 1.034a9.6 9.6 0 0 1 2.502-.334c.845 0 1.707.117 2.502.334 1.906-1.302 2.75-1.035 2.75-1.035.548 1.386.2 2.42.1 2.671.647.701 1.028 1.603 1.028 2.704 0 3.873-2.337 4.725-4.574 4.975.365.317.68.918.68 1.87 0 1.352-.017 2.437-.017 2.77 0 .268.183.585.68.485A10.075 10.075 0 0 0 22 12.083C22.016 6.507 17.526 2 12.008 2"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-md">Github</span>
                        </div>
                        <div className="flex items-center gap-6 p-6 mb-6 cursor-pointer text-g-6 hover:text-g-1 hover:bg-[#293329]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="36"
                            fill="none"
                            viewBox="0 0 44 36"
                            className="w-12 h-12"
                          >
                            <path
                              fill="currentColor"
                              d="m11.044 20.46 4.697 13s.587 1.215 1.215 1.215c.63 0 9.98-9.728 9.98-9.728l10.4-20.085-26.124 12.244z"
                            ></path>
                            <path
                              fill="#C7DACA"
                              d="m17.271 23.794-.901 9.582s-.378 2.935 2.557 0 5.745-5.2 5.745-5.2"
                            ></path>
                            <path
                              fill="currentColor"
                              d="m11.13 20.925-9.661-3.148s-1.155-.468-.783-1.53c.077-.22.231-.406.693-.726C3.519 14.029 40.997.558 40.997.558s1.058-.356 1.682-.12a.91.91 0 0 1 .622.679c.067.279.096.566.084.853-.003.248-.033.477-.056.838-.228 3.683-7.059 31.17-7.059 31.17s-.409 1.608-1.873 1.663a2.68 2.68 0 0 1-1.954-.756c-2.874-2.472-12.805-9.146-15-10.614a.42.42 0 0 1-.18-.297c-.03-.154.138-.346.138-.346S34.694 8.256 35.154 6.643c.036-.125-.099-.187-.28-.132-1.148.422-21.06 12.996-23.257 14.384a1.06 1.06 0 0 1-.488.03"
                            ></path>
                          </svg>
                          <span className="text-md">Telegram</span>
                        </div>
                        <div className="flex items-center gap-6 p-6 mb-6 cursor-pointer text-g-6 hover:text-g-1 hover:bg-[#293329]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-12 h-12"
                          >
                            <path
                              fill="currentColor"
                              d="M4 10a8 8 0 1 1 16 0v12H4z"
                            ></path>
                          </svg>
                          <span className="text-md">Mirror</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  className="py-4 flex items-center gap-3 flex-shrink-0 border-b whitespace-nowrap border-transparent hover:border-g-1"
                  target="_blank"
                  href="https://minty.mintchain.io/"
                />
                <Image
                  alt="minty"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-sm"
                  style={{ color: "transparent" }}
                  src={mintyLogo}
                />
                <Image
                  alt="minty"
                  loading="lazy"
                  width="56"
                  height="14"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src={mintyText}
                />
                <a />
              </div>
              <div className="flex-1 flex justify-end laptop:hidden">
                <div className="relative cursor-pointer group/connect  monile:text-right interact-button">
                  <p className="text-md font-medium text-g-1">Connect Wallet</p>
                </div>
              </div>
            </div>
          </header>

          {showMobileMenu && (
            <div
              className="absolute top-26 z-40 left-0 w-full bg-g-10 transition-all overflow-y-auto h-0 pb-0"
              style={{
                backgroundColor: "#141715",
                width: "100%",
                height: "20vh",
                overflowY: "auto",
              }}
            >
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1 hover:bg-[#293329]"
                href="/"
              >
                HOME
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="https://docs.mintchain.io"
              >
                Developer Docs
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/nips"
              >
                NIPs Platform
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="https://explorer.mintchain.io"
              >
                Block Explorer
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="https://mint.nftscan.com/"
              >
                Mint NFTScan
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="https://docs.mintchain.io/build/erc7765"
              >
                ERC7765
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="https://vote.optimism.io/delegates/mintblockchain.eth"
              >
                $OP Delegate
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/bridge"
              >
                Bridge
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/mint-forest"
              >
                Mint Forest
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/mint-token"
              >
                $MINT Token
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="https://mintpool.mintchain.io/"
              >
                Staking & Restaking
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-g-1  hover:border-g-1"
                href="/airdrop/claim"
              >
                $MINT Airdrop
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/applications"
              >
                Applications
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/ecofund"
              >
                Mint Eco Fund
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/mintpass"
              >
                Mint Pass
              </Link>
              <Link
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="/hackathon"
              >
                NIPs-Hackathon
              </Link>
              <a
                className="block px-5 mx-5 py-8 text-md text-g-1 border-b border-transparent  hover:border-g-1"
                href="https://minty.mintchain.io/"
              >
                Minty
              </a>
            </div>
          )}
          <div className="bg-bg-main w-full min-h-screen relative py-[70px]">
            <div className="w-full h-[100vh] max-h-[800px] absolute left-0 top-0 z-0">
              <canvas id="space-travel" className="!w-full !h-full"></canvas>
              <div
                className="absolute bottom-0 left-0 h-[600px] w-full"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 1)",
                }}
              ></div>
            </div>
            <div className="w-full flex flex-col items-center relative z-10">
              <div className="flex flex-col items-center">
                <div className="relative w-[200px] h-[200px]">
                  <Image
                    className="!w-full h-auto scale-[1] max-w-[unset] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
                    src={coinGif}
                    alt=""
                  />
                  <div className="w-[210px] h-[210px] rounded-full bg-[#52FF7E] blur-[148px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"></div>
                </div>
                <span className="text-[52px] leading-[60px] lg:text-[48px] lg:leading-[56px] font-bold mb-24">
                  120,000,000
                </span>
                <div className="relative w-[80vw] h-[42vw] lg:w-[559px] lg:h-[300px]">
                  <Image
                    className="w-[67%] h-auto absolute left-1/2 -translate-x-1/2 bottom-0"
                    src={picPercentage}
                    alt=""
                  />
                  <div className="h-30 lg:h-50 flex gap-4 absolute -left-10 lg:left-8 -top-4">
                    <span className="text-sm lg:text-base text-right">
                      <span className="text-md lg:text-[20px] font-bold">
                        10%{" "}
                      </span>
                      <br />
                      10% of total supply
                      <br />
                      is claimable for
                      <br />
                      eligible users.
                    </span>
                    <div className="w-6 h-full relative">
                      <div
                        className="w-6 h-6 rounded-full absolute left-0 top-0"
                        style={{ background: "rgba(54,217,95,1)" }}
                      ></div>
                      <div
                        className="w-[3px] h-full rounded-full absolute left-1/2 -translate-x-1/2 top-2"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(54,217,95,1), rgba(54,217,95,0))",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="h-30 lg:h-50 flex gap-4 absolute -right-20 lg:-right-8 -top-4">
                    <div className="w-6 h-full relative">
                      <div
                        className="w-6 h-6 rounded-full absolute left-0 top-0"
                        style={{ background: "rgba(254,146,2,1)" }}
                      ></div>
                      <div
                        className="w-[3px] h-full rounded-full absolute left-1/2 -translate-x-1/2 top-2"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(254,146,2,1), rgba(254,146,2,0))",
                        }}
                      ></div>
                    </div>
                    <span className="text-sm lg:text-base text-left">
                      <span className="text-md lg:text-[20px] font-bold">
                        2%
                      </span>{" "}
                      <br />
                      2% of total supply
                      <br />
                      will be airdropped to Mint
                      <br />
                      Forest V3 in 2026.
                    </span>
                  </div>
                  <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-[78px] lg:top-[120px]">
                    <span className="text-sm">$MINT Airdrop</span>
                    <span className="text-sm lg:text-[20px] font-bold">
                      12%
                    </span>
                    <span className="text-sm lg:text-[20px] font-bold">
                      120,000,000 $MINT
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[320px] h-30 bg-primary rounded-xl mt-30 hover:brightness-110 text-lg font-medium flex items-center justify-center break-keep whitespace-nowrap cursor-pointer interact-button">
                Connect wallet
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
