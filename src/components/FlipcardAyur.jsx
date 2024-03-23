import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./flipcard.css";

const FlipcardAyur = ({ imageUrl, name, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="ayur-card ayur-card-popout">
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection="horizontal"
            >
                {/* Front side */}
                <div
                    className="ayur-card-front"
                    onClick={handleClick}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={name}
                    />
                </div>
                {/* Back side */}
                <div className="ayur-card-back" onClick={handleClick}>
                    <h2 className="text-2xl text-center font-primary font-bold mb-3 mt-[2rem]">{name}</h2>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default FlipcardAyur;