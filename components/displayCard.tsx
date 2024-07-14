import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import GreenLeaf from "../public/Vector6.png";
import YellowLeaf from "../public/Vector61.png";
import OrangeLeaf from "../public/Vector62.png";
import RedLeaf from "../public/Vector63.png";
import LightOLeaf from "../public/Vector64.png";
import PurpleLeaf from "../public/Vector65.png";
import PinkLeaf from "../public/Vector66.png";

// Define a type for the valid colors
type LeafColor =
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "lightOrange"
  | "purple"
  | "pink";

interface DisplayCardProps {
  colour: LeafColor;
  title: string;
  text: string;
  percent: number;
}

const DisplayCard = (props: DisplayCardProps) => {
  const dict = {
    green: GreenLeaf,
    yellow: YellowLeaf,
    orange: OrangeLeaf,
    red: RedLeaf,
    lightOrange: LightOLeaf,
    purple: PurpleLeaf,
    pink: PinkLeaf,
  } as const;

  const colourDict = {
    green: "#9cd48a",
    yellow: "#f9d284",
    orange: "#fb9731",
    red: "#f15a5f",
    lightOrange: "#ffb462",
    purple: "#6c61f1",
    pink: "#a55af1",
  };

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents SSR issues

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section
      className={`border ${currentTheme === 'light' ? 'border-black' : ''} rounded-lg w-full relative py-3 px-5`}
      style={{ background: `rgba(255, 255, 255, ${currentTheme === 'light' ? '1' : '0.1'})` }}
    >
      <Image
        src={dict[props.colour]}
        alt={`${props.colour} leaf`}
        className="absolute -top-3 -left-3"
      />
      <div className="flex">
        <div className="flex-grow text-sm">
          <h2 className="font-semibold">{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <p
          style={{ color: `${colourDict[props.colour]}` }}
          className="font-bold text-right text-xl self-center"
        >
          {props.percent}%
        </p>
      </div>
    </section>
  );
};

export default DisplayCard;
