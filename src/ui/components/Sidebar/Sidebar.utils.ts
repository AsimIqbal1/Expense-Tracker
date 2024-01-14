import { ROUTE_PAGES } from "routes";

export function getActivePageName(currentPath: string) {
    for (let i = 0; i < ROUTE_PAGES.length; i++) {
        const { route, name } = ROUTE_PAGES[i];
        if (route === currentPath) return name;
    }
    return '';
}