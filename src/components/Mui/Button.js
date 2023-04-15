import styled from "@emotion/styled";

export const Button = styled('button')(({ theme: { palette } }) => ({
    display: 'inline-block',
    height: "40px",
    minWidth: "120px",
    padding: "0 12px",
    fontWeight: "700",
    backgroundColor: palette.primary.main,
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    transition: ".4s ease all",
    '&:hover': {
        backgroundColor: "#E62423",
        color:"white!important"
    },
    '&.search-btn':{
        position: "absolute",
        right: 0,
    }
}));