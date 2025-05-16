"use client";

"use client";

import Link from "next/link";

import { GithubIcon, HeyGenLogo } from "./Icons";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-[1000px] m-auto p-6">
        <div className="flex flex-row items-center gap-4">
          <Link href="https://github.com/" target="_blank">
            <HeyGenLogo />
          </Link>
          <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text">
            <p className="text-xl font-semibold text-transparent">
              EDVIZ Interactive Avatar SDK Demo
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
          >
            Avatars
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
          >
            Voices
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
          >
            API Docs
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
          >
            Guide
          </Link>
          <Link
            aria-label="Github"
            className="flex flex-row justify-center gap-1 text-foreground"
            href="https://github.com/"
            target="_blank"
          >
            <GithubIcon className="text-default-500" />
            SDK
          </Link>
        </div>
      </div>
    </>
  );
}
