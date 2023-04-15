import styled from "@emotion/styled";

export const Input = styled('input')(({ theme: { palette } }) => ({
    width: "100%",
    height: "40px",
    backgroundColor: "#FFFFFF",
    border: "1px solid gray",
    outline: "none",
    borderRadius: "4px",
    paddingLeft:"16px",
    '&:focus': {
        border: `1px solid ${palette.primary.main}`
    }
}));