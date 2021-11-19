import styled from 'styled-components';

const Line = styled.line`
  stroke: ${(props) => props.theme.palette.primary.contrastText};
`;

const Text = styled.text`
  fill: ${(props) => props.theme.palette.primary.contrastText};
`;

export { Line, Text };
