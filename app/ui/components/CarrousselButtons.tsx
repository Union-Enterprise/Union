import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ButtonProps {
  direction?: string;
  isAtLeft?: boolean;
  isAtRight?: boolean;
  scroll?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ direction, isAtLeft, isAtRight, scroll }: ButtonProps) {
  return (
    <button
      className={`hover:text-main-purple text-black font-bold py-2 px-4 rounded ${
        (direction === "left" && isAtLeft) ||
        (direction === "right" && isAtRight)
          ? "opacity-25 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
      onClick={scroll}
    >
      {direction === "left" ? (
        <FontAwesomeIcon icon={faArrowLeft} size="3x" />
      ) : (
        <FontAwesomeIcon icon={faArrowRight} size="3x" />
      )}
    </button>
  );
}

export default function CarrousselButtons() {
  const [isAtLeft, setIsAtLeft] = useState(true);
  const [isAtRight, setIsAtRight] = useState(false);

  const scroll =
    (direction: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      const container = document.getElementById("partners");
      if (container) {
        const currentScroll = container.scrollLeft;
        const newScroll =
          direction === "left" ? currentScroll - 820 : currentScroll + 820;
        container.scrollTo({ left: newScroll, behavior: "smooth" });

        setIsAtLeft(newScroll <= 10);
        setIsAtRight(newScroll >= 930);
      }
    };

  return (
    <div>
      <Button direction="left" isAtLeft={isAtLeft} scroll={scroll("left")} />
      <Button
        direction="right"
        isAtRight={isAtRight}
        scroll={scroll("right")}
      />
    </div>
  );
}
