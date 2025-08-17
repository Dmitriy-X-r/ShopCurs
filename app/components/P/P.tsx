import React, { JSX } from "react";
import {PProps} from "./P.props"
import { ButtonProps } from "../Button/Button.props";
import styles from "./P.module.css";
import cn from "classnames";


export const P = ({children, size = '16px', className, ...props} : PProps) : JSX.Element => {
    return (
        <p 
            className={cn(styles.p, className, {
                [styles.s14] : size == '14px',
                [styles.s16] : size == '16px',
                [styles.s18] : size == '18px',
            })}
            {...props}
        >
            {children}
        </p>
    );
}