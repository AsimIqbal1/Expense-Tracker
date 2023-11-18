import { BoxProps, FlexProps } from "@chakra-ui/react";
import { IRoutePages } from "routes";

export interface ISidebarProps {
    pages: IRoutePages[];
    children: React.ReactElement;
}

export interface SidebarProps extends BoxProps {
    onClose: () => void;
    pages: IRoutePages[]
}

export interface NavItemProps {
    page: IRoutePages;
    onClose: () => void;
}

export interface MobileProps extends FlexProps {
    onOpen: () => void
}