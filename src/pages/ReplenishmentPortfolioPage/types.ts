export enum PortfolioType {
  MONEY = "MONEY",
  IIA = "IIA",
  DEPOSIT = "DEPOSIT",
}

export type Portfolio = {
  id: string;
  name: string;
  type: PortfolioType;
};
