import { ReactNode } from "react";

export interface CardInterface {
  className?: string;
  children: ReactNode;
}
const Card: React.FC<CardInterface> = (props) => {
  return (
    <div
      style={{ boxShadow: "0px 1px 4px 0px #00000029" }}
      className={`rounded-lg bg-white p-2.5 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
