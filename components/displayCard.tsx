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

interface DisplayCardProps {
  colour: LeafColor;
  title: string;
  text: string;
  percent: number;
}

type LeafColor =
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "lightOrange"
  | "purple"
  | "pink";

const DisplayCard = ({ colour, title, text, percent }: DisplayCardProps) => {
  const colourDict = {
    green: "#9cd48a",
    yellow: "#f9d284",
    orange: "#fb9731",
    red: "#f15a5f",
    lightOrange: "#ffb462",
    purple: "#6c61f1",
    pink: "#a55af1",
  };

  const dict = {
    green: GreenLeaf,
    yellow: YellowLeaf,
    orange: OrangeLeaf,
    red: RedLeaf,
    lightOrange: LightOLeaf,
    purple: PurpleLeaf,
    pink: PinkLeaf,
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
      className={`border${currentTheme === "light" ? "border-black" : ""} rounded-lg w-full relative py-3 px-5`}
      style={{
        background: `rgba(255,255,255,${currentTheme === "light" ? "1" : "0.1"})`,
      }}
    >
      <Image
        alt={`${colour} leaf`}
        className="absolute -top-3 -left-3"
        height={50}
        src={dict[colour]}
        width={50}
      />
      <div className="flex">
        <div className="flex-grow text-sm">
          <h2 className="font-semibold">{title}</h2>
          <p>{text}</p>
        </div>
        <p
          className="font-bold text-right text-xl self-center"
          style={{ color: colourDict[colour] }}
        >
          {percent}%
        </p>
      </div>
    </section>
  );
};

export default DisplayCard;
