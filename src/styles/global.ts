import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        background-color: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.primary.contrastText};
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
        margin: 0;
        padding: 0;
        outline: 0;
        transition: .33s linear;
    }
    
    #root {
        margin: 0 auto;
    }
`;

export default GlobalStyle;
