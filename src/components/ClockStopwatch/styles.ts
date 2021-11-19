import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  background-color: ${(props) => props.theme.palette.side.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
  &:hover {
    cursor: pointer;
  }
`;

const Background = styled.div`
  width: 300px;
  padding: 40px;
  margin: 10px;
  box-shadow: ${(props) => props.theme.palette.side.contrastText};
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

export { Button, Background };
