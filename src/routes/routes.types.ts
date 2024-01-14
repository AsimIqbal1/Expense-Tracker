import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IRoutes {
    [key: string]: string
}

export interface IRoutePage {
    id: number;
    route: string;
    name: string;
    icon: IconDefinition;
    Component: React.FunctionComponent;
}