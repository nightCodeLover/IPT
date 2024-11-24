import React, { FC, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Portfolio } from "../../types";
import { PORTFOLIO_LIST_API_MOCK } from "../../../../constants/constants";

interface PortfolioSelect {
  portfolio: Portfolio | null;
  setPortfolio: (portfolio: Portfolio) => void;
}

const PortfolioSelect: FC<PortfolioSelect> = ({ portfolio, setPortfolio }) => {
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>(
    PORTFOLIO_LIST_API_MOCK,
  );

  const handleSelectPortfolio = () => {};

  return (
    <Box>
      <Button variant={"outlined"} color={"primary"} startIcon={<AddIcon />}>
        Добавить портфель
      </Button>

      <FormControl fullWidth>
        <InputLabel>Портфель</InputLabel>
        <Select
          value={portfolio}
          variant={"standard"}
          label="Портфель"
          onChange={handleSelectPortfolio}
        >
          {portfolioList.map((portfolio) => (
            <MenuItem key={portfolio.id} value={portfolio.id}>
              {portfolio.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PortfolioSelect;
