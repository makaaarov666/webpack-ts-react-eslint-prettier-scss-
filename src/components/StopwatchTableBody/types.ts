import { Row } from 'react-table';

type TProps = {
  rowRole: string;
  rows: Row<{}>[];
  prepareRow: (row: Row<{}>) => void;
};

export default TProps;
