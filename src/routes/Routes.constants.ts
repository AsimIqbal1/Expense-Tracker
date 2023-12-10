import { faChartLine, faWallet, faGear, faPencil } from "@fortawesome/free-solid-svg-icons";
import { IRoutePages, IRoutes } from "./routes.types";
import { LandingPage, CustomizePage, WalletManagement } from "pages";

export const ROUTES: IRoutes = {
  LANDING: '/',
  WALLETS: '/wallets',
  SETTINGS: '/settings',
  CUSTOMIZE: '/customize',
};

export const ROUTE_PAGES: IRoutePages[] = [
  {
    id: 1,
    route: ROUTES.LANDING,
    name: 'Insights',
    icon: faChartLine,
    Component: LandingPage
  },
  {
    id: 2,
    route: ROUTES.WALLETS,
    name: 'Wallets',
    icon: faWallet,
    Component: WalletManagement,
  },
  {
    id: 3,
    route: ROUTES.SETTINGS,
    name: 'Settings',
    icon: faGear,
    Component: () => "Settings page",
  },
  {
    id: 4,
    route: ROUTES.CUSTOMIZE,
    name: 'Customize',
    icon: faPencil,
    Component: CustomizePage,
  },
]
