import React from "react";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import Image, { StaticImageData } from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const CatComic = localFont({
  src: [
    {
      path: "../public/cat_comic/Cat Comic.ttf",
      weight: "400",
    },
  ],
  variable: "--font-cat-comic",
});

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

interface CloudProps {
  img: StaticImageData;
  padding: string;
  iconPosition: string;
  heading: string;
  desc: string;
}

const Cloud = (props: CloudProps) => {
  return (
    <div className="w-fit relative">
      <Image
        alt="Cloud"
        className="relative z-0"
        height={0}
        priority={true}
        src={props.img}
        style={{
          objectFit: "contain",
        }}
        width={400}
      />
      <Link href="#">
        <FaXTwitter
          className={`text-black absolute z-20 text-2xl ${props.iconPosition}`}
        />
      </Link>
      <div
        className={`absolute top-0 left-0 z-10 text-black w-full h-full flex items-center ${props.padding}`}
      >
        <div className="p-3">
          <h2
            className={`${CatComic.className} capitalize text-[150%]`}
          >
            {props.heading}
          </h2>
          <p className={`${mulish.className} text-[100%]`}>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
