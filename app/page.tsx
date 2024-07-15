"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import MainHeading from "@/components/mainHeading";
import DisplayCard from "@/components/displayCard";
import DonutChart from "@/components/donutChart";
import Cloud from "@/components/cloud";
import TextBox from "@/components/textBox";

import PlanetsNight from "../public/nightt 1_LE_auto_x2.jpg";
import PlanetsDay from "../public/dayy 1_LE_auto_x2.jpg";
import LayerNight from "../public/Layer 1.jpg";
import LayderDay from "../public/Layer 1_2.jpg";
import GroundNight from "../public/Group1.png";
import GroundDay from "../public/Group1_2.png";
import CatPlane from "../public/paperplane1.png";
import Cloud1 from "../public/TG _for website 2.png";
import Cloud2 from "../public/TG _for website 3.png";

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents SSR issues

  const currentTheme = theme === "system" ? systemTheme : theme;
  const PlanetsType = currentTheme === "light" ? PlanetsDay : PlanetsNight;
  const GroundType = currentTheme === "light" ? GroundDay : GroundNight;
  const LayerType = currentTheme === "light" ? LayderDay : LayerNight;

  return (
    <>
      <section
        className="relative w-full pt-40 sm:pt-44 h-fit"
        id="planetsAndCatAirplaine"
      >
        <Image
          alt="Background"
          className="w-full z-0"
          fill={true}
          priority={true}
          src={PlanetsType}
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <div className="px-20">
          <div
            className="relative w-full z-20 text-center sm:text-left"
            style={{ maxWidth: "800px" }}
          >
            <p className="uppercase text-white text-shadow font-bold mb-5">
              welcome to simon cat offical token
            </p>
            <MainHeading text="one cat, billions of owners'" type="large" />
          </div>
          <div className="flex w-full justify-end items-center relative z-10 -mt-3 xs:-mt-20 sm:-mt-32 md:-mt-[22rem]">
            <Image
              alt="Cat on Paper Plane"
              className="w-half"
              priority={true}
              src={CatPlane}
            />
          </div>
        </div>
        <div className="px-5 sm:px-20 relative">
          <Cloud
            desc="We need a small description here"
            heading="Floki"
            iconPosition="top-[11%] right-[33%]"
            img={Cloud1}
            padding="pt-[20%] pb-[32%] pl-[12%] pr-[19%]"
          />
          <div className="relative w-full flex justify-end -mt-16" id="cloud2">
            <Cloud
              desc="We need a small description here"
              heading="Floki"
              iconPosition="top-[30%] right-[33%]"
              img={Cloud2}
              padding="pt-[35%] pb-[25%] pl-[11%] pr-[17%]"
            />
          </div>
        </div>
      </section>
      <section className="w-full relative h-fit pt-[29%]" id="feedCats">
        <Image
          alt="Layer"
          fill={true}
          priority={true}
          src={LayerType}
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />

        <MainHeading text="Tokenomics" type="small" />
        <div className="grid md:grid-cols-3 grid-container pl-[15%] pr-[17%] gap-4 pb-[25%]">
          <div className="flex flex-col gap-4 md:gap-7 item1 md:pb-0">
            <DisplayCard
              colour="pink"
              percent={5}
              text="100% TGE"
              title="Airdrop"
            />
            <DisplayCard
              colour="purple"
              percent={9.25}
              text="50% TGE | 2 Months Linear Vesting"
              title="Contributors"
            />
            <DisplayCard
              colour="lightOrange"
              percent={17}
              text="100% TGE"
              title="Public"
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-10 item2 md:pb-0">
            <DonutChart />
            <DisplayCard
              colour="red"
              percent={30}
              text="Strategic Unlock 100% TGE"
              title="Liquidity / MM / CEX"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-7 item3">
            <DisplayCard
              colour="green"
              percent={16.75}
              text="36 Months Linear Vesting"
              title="Ecosystem"
            />
            <DisplayCard
              colour="orange"
              percent={10}
              text="36 Months Linear Vesting"
              title="Treasury"
            />
            <DisplayCard
              colour="yellow"
              percent={17}
              text="100% TGE"
              title="Public"
            />
          </div>
        </div>

        <section className="relative z-10 p-10 flex flex-col gap-6">
          <div style={{ maxWidth: "400px" }}>
            <TextBox
              bullets={[
                "Launch initial community engagement campaigns on social media and forums.",
                "Pre-sale on Token-Fi",
                "Airdrop to Floki holders and core BNB communities",
                "BNB chain integration",
                "Dex listings",
                "Socialfi Campaign on Apex Launch including DAO campaign",
              ]}
              colour="cyan"
              title="Phase 1"
            />
          </div>
          <div style={{ maxWidth: "400px" }}>
            <TextBox
              bullets={[
                "CEX listings",
                "Official Simon Cat foundation launch (charitable events)",
                "Expansion and unity of the BNB ecosystem",
                "Co-marketing event with BNB chain and core BNB protocols",
                "Expanding Simon's Cat to global audience",
              ]}
              colour="red"
              title="Phase 2"
            />
          </div>
          <div style={{ maxWidth: "400px" }}>
            <TextBox
              bullets={[
                "Simon's cat quests: Launch the Simon's cat platform for community engagement.",
                "Simon's Cat crypto focused web series",
                "Integration of Web3 into Simon's Cat app game with 18M+ downloads",
                "Onboard the next 10 million web2 holders with off-chain events and content",
                "Simon's cat private community passes (burn tokens to get access to exclusive closed community discord)",
                "Feature Enhancements: Continuously improve existing features based on community feedback.",
                "Sustainability Measures: Implement measures to ensure the long-term sustainability and growth of the project.",
                "Expanding CEX listings",
              ]}
              colour="blue"
              title="Phase 3"
            />
          </div>
        </section>
        <div className="w-full h-[80vh] md:h-[110vh] relative px-5 sm:px-20 mt-10">
          <div style={{ maxWidth: "700px" }}>
            <MainHeading text="say no to empty bowls" type="large" />
          </div>
          <h2
            className="relative z-10 uppercase font-semibold text-xl"
            style={{ maxWidth: "300px" }}
          >
            Every trade feeds hungry cats around the world
          </h2>
          <Image
            alt="Ground"
            className="relative z-0"
            fill={true}
            priority={true}
            src={GroundType}
            style={{ objectFit: "cover", objectPosition: "bottom right" }}
          />
        </div>
      </section>
    </>
  );
}
