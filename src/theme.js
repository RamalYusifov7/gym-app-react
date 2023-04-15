
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    main: "#341212",
    primary: {
      main: "#FF2625",
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 516,
      md: 718,
      lg: 980,
      xl: 1149,
      xxl: 1349
    },
  },
});