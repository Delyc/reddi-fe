import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Image from "next/image";

interface Props {
    image: string,
    backText: string,
    title: string
}

const FlipCard = ({ image, backText, title }: Props) => {
    const [isFlipped, setIsflipped] = useState(false);
    function handleClick() {
        setIsflipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
            <div
                className="grid w-[25rem] h-[12rem] gap-2"
                onMouseEnter={() => handleClick()}
                onMouseLeave={() => handleClick()}
            >
                <Image src={image} layout="fill" alt="test" />
            </div>
            <div
                className="grid  h-[12rem] gap-2 bg-white/10 rounded-lg shadow-xl place-content-center"
                onClick={() => handleClick()}
            >
                <span className="flex flex-col gap-2 items-center px-8">
                    <p className="text-primary-orange font-semibold tracking-[1px]">{title}</p>
                    <p className="text-primary-blue tracking-[1px]">{backText}</p>
                </span>
            </div>
        </ReactCardFlip>
    );
}

export default FlipCard;