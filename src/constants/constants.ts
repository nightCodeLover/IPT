import {
  Portfolio,
  PortfolioType,
} from "../pages/ReplenishmentPortfolioPage/types";

export const PORTFOLIO_LIST_API_MOCK: Portfolio[] = [
  {
    id: "97a5175f-c9fc-40d2-a16d-b2b4156345c2",
    name: "Накопительный портфель",
    type: PortfolioType.MONEY,
  },
  {
    id: "c738ef52-2f6f-4c76-a469-aa50ff21b4dc",
    name: "Вклад в тинькофф",
    type: PortfolioType.DEPOSIT,
  },
];
