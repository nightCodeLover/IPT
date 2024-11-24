import React, { useState } from "react";
import LayoutPage from "../LayoutPage/LayoutPage";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Portfolio } from "./types";
import { PORTFOLIO_LIST_API_MOCK } from "../../constants/constants";
import PortfolioSelect from "./components/PortfolioSelect/PortfolioSelect";

const ReplenishmentPortfolioPage = () => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  const handleSelectPortfolio = (val: any) => {
    console.log(val);
  };

  return (
    <LayoutPage>
      <Typography variant="h4" component="h1">
        История пополнений портфеля
      </Typography>

      <PortfolioSelect portfolio={portfolio} setPortfolio={setPortfolio} />
    </LayoutPage>
  );
};

export default ReplenishmentPortfolioPage;
