import styled from 'styled-components';

const Background = styled.div`
  background-color: ${(props) => props.theme.palette.secondary.main};
  padding: 40px;
  margin: 10px;
  box-shadow: ${(props) => props.theme.palette.side.contrastText};
  border-radius: 40px;
`;

const Svg = styled.svg`
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

export { Background, Svg };
