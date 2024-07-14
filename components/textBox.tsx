import React from "react";

interface TextBoxProps {
  title: string;
  colour: string;
  bullets: string[];
}

const TextBox = (props: TextBoxProps) => {
  return (
    <>
      <h3 className="font-bold text-xl" style={{ color: `${props.colour}` }}>
        {props.title}
      </h3>
      <ul className="coloured-markers relative list-inside list-disc">
        <style jsx>{`
          li::marker {
            color: ${props.colour};
          }
        `}</style>
        {props.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </>
  );
};

export default TextBox;
