import { styled } from "@mui/material";


export const Wrapper = styled('header')(({ theme: { palette } }) => ({
  padding: '16px 0',
  "a": {
    textDecoration: "none",
    color: palette.main,
    transition: ".4s ease all",
    '&:hover': {
      color: palette.primary.main,
    }
  },
  "ul": {
    listStyleType: "none",
    "li": {
      display: "inline-block",
    }
  }
}));
