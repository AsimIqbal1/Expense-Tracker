import { ROUTE_PAGES } from "routes";

export function getActivePageName(currentPath: string) {
    let pageData;
    for (let i = 0; i < ROUTE_PAGES.length; i++) {
        const { route } = ROUTE_PAGES[i];
        if (route === currentPath) {
            pageData = ROUTE_PAGES[i];
            break;
        }
    }

    return pageData!;
}