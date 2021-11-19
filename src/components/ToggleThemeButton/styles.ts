import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  width: 100px;
  height: 50px;
  margin: 8px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
  background-color: ${(props) => props.theme.palette.side.main};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
