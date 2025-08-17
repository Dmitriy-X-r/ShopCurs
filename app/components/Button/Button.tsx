import React, { JSX } from "react";
import { ButtonProps } from "./Button.props";
// import ArrowIcon from './arrow.svg';
import styles from "./Button.module.css";
import cn from "classnames";
import Image from "next/image";

export const Button = ({appearance, arrow = 'none', children, className, ...props} : ButtonProps) : JSX.Element => {
    return (
        <button 
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <Image
                    src="/icons/arrow.svg"
                    alt="Стрелка"
                    height={10}
                    width={6}
                    priority
                 />
                {/* <ArrowIcon /> */}
                </span>}
        </button>
    ) 
}