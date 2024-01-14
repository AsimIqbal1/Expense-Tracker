import { CardBodyProps, CardProps } from "@chakra-ui/react";

export type StyledCardProps = {
    children: React.ReactElement[] | React.ReactElement;
    title?: string | React.ReactElement;
    cardBodyProps?: CardBodyProps;
} & CardProps