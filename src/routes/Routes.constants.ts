import { faChartLine, faWallet, faGear, faPencil } from "@fortawesome/free-solid-svg-icons";
import { LandingPage, CustomizePage, WalletManagement } from "pages";
import { IRoutePage, IRoutes } from "./routes.types";

export const ROUTES: IRoutes = {
  LANDING: '/',
  WALLETS: '/wallets',
  SETTINGS: '/settings',
  CUSTOMIZE: '/customize',
};

export const ROUTE_PAGES: IRoutePage[] = [
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
