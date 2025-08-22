import React, { JSX, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import Image from "next/image";
import StarIcon from "./StarIcon"

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <>
                    {/* <Image
                        src="/icons/star.svg"
                        alt="звездочка"
                        height={20}
                        width={20}
                        priority
                    /> */}
                    <StarIcon />
                </>
            );
        });
    };
    return (
        <div {...props}>

        </div>
    );
}