import { createGlobalStyle } from "styled-components";
import background from "./360_F_357201360_S3j3ygHsJGKmKcdgcYVMV7jXpdYLmnS4.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-image: url("${background}");
        background-position: center;
    }
`;