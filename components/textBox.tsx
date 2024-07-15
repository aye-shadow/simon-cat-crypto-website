import React from "react";

type colour = "cyan" | "blue" | "red";

interface TextBoxProps {
  title: string;
  colour: colour;
  bullets: string[];
}

const TextBox = ({ title, colour, bullets }: TextBoxProps) => {
  const colourDict = {
    cyan: "#00a2bc",
    red: "#d8575f",
    blue: "#4ecdc6",
  };

  return (
    <>
      <h3 className="font-bold text-xl" style={{ color: colour }}>
        {title}
      </h3>
      <ul className="coloured-markers relative list-inside list-disc">
        <style jsx>{`
          li::marker {
            color: ${colourDict[colour]};
          }
        `}</style>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </>
  );
};

export default TextBox;
