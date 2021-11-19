import styled from 'styled-components';

const Tbody = styled.tbody`
  background-color: ${(props) => props.theme.palette.secondary.main};

  & tr {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.palette.side.main};
    margin-bottom: 5px;
    padding-bottom: 3px;
    background-color: ${(props) => props.theme.palette.secondary.main};
  }

  & td {
    color: $GRAY;
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export default Tbody;
