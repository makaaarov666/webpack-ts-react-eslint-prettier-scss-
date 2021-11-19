import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

const Background = styled.div`
  width: 400px;
  padding: 40px;
  margin: 10px;
  box-shadow: ${(props) => props.theme.palette.side.contrastText};
  border-radius: 30px;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

export { Background, Table };
