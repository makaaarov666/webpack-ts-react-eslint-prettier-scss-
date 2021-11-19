import styled from 'styled-components';

const Line = styled.line`
  stroke: ${(props) => props.theme.palette.primary.contrastText};
`;

export default Line;
