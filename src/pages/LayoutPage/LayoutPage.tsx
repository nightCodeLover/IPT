import React, { FC } from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import styles from "./LayoutPage.module.scss";
import { darkThemeSettings } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import classNames from "classnames";

interface LayoutPageProps {
  children: React.ReactNode;
  className?: string;
}

const SPACES = {
  "--space-xs": "4px",
  "--space-s": "8px",
  "--space-m": "12px",
  "--space-l": "16px",
  "--space-xl": "20px",
  "--space-2xl": "24px",
  "--space-3xl": "32px",
};

const LayoutPage: FC<LayoutPageProps> = ({ children, className }) => {
  return (
    <ThemeProvider theme={darkThemeSettings}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--background-default": theme.palette.background.default,
            ...SPACES,
          },
        })}
      />
      <div className={classNames(styles.container, className)}>{children}</div>
    </ThemeProvider>
  );
};

export default LayoutPage;
