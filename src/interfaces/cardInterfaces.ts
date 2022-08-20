import { ReactElement } from "react";

export interface valuesCard {
    title?: string;
    subtitle?: string;
    urlImg?: string;
    description?: string;
    alt?: string;
};

export interface propsCard {
    children?: ReactElement | ReactElement[];
    values?: valuesCard;
    bgImg?: string
};

export interface propsHeader {
    title?: string;
};

export interface propsImage {
    imgUrl?: string;
    alt?: string
};

export interface propsDescription {
    description?: string;
};