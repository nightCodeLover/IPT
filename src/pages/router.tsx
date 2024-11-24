import { createBrowserRouter, Navigate } from "react-router-dom";
import ReplenishmentPortfolioPage from "./ReplenishmentPortfolioPage/ReplenishmentPortfolioPage";
import { APP_ROUTS } from "../constants/routs";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to={APP_ROUTS.REPLENISHMENT_PORTFOLIO_PAGE} replace />,
  },
  {
    path: APP_ROUTS.REPLENISHMENT_PORTFOLIO_PAGE,
    element: <ReplenishmentPortfolioPage />,
  },
]);
