"use client";

import { useState } from "react";

interface PosterProps {
  url: string;
  desc: string;
  pdf: string;
}

export default function Poster(poster: PosterProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative justify-center p-6 w-4/5 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={poster.url}
          alt="poster"
          className="shadow-lg shadow-red-300 rounded-xl transition duration-500 ease-in-out brightness-100 group-hover:brightness-50"
        />
        {isHovered && (
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="font-semibold bg-slate-200 p-3 rounded-lg">
              <a href={poster.pdf} download={poster.pdf}>
                <div className="flex gap-2 justify-center items-center pt-1">
                  {/* <Download width={20} height={20} /> */}
                  <img src="./svgs/download.svg" />
                  <p>Download Poster</p>
                </div>
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
