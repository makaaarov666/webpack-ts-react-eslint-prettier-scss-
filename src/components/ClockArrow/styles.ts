import styled from 'styled-components';

const Line = styled.line`
  stroke: ${(props) =>
    props.stroke ? props.stroke : props.theme.palette.primary.contrastText};
`;

export default Line;
