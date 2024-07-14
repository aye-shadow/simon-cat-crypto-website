import React from "react";
import localFont from "next/font/local";

const CatComic = localFont({
  src: [
    {
      path: "../public/cat_comic/Cat Comic.ttf",
      weight: "400",
    },
  ],
  variable: "--font-cat-comic",
});

type type =
  | "large"
  | "small";

interface MainHeadingProps {
  text: string;
  type: type;
}

const MainHeading = (props: MainHeadingProps) => {
  return (
    <h1
      className={`text-white relative z-10 uppercase ${props.type === 'large' ? 'text-5xl sm:text-7xl md:text-8xl' : 'text-4xl text-center'} text-shadow ${CatComic.className}`}
    >
      {props.text}
    </h1>
  );
};

export default MainHeading;
