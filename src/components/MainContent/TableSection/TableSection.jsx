import CSSModules from 'react-css-modules';
import styles from './TableSection.module.css';
import sharedStyles from '../main.module.css';
import {Table} from "antd";

const columns = [
  {
    title: 'X',
    dataIndex: 'x',
    key: 'x',
  },
  {
    title: 'Y',
    dataIndex: 'y',
    key: 'y',
  },
  {
    title: 'R',
    dataIndex: 'r',
    key: 'r',
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result',
    render: (value, row, index) => {
      return value ? 'Yes' : 'No';
    },
  }
];

const TableSection = (props) => {
  return (
    <section styleName="main-container__item main-container__item_table section" className="content-section">
      <h2 className="theme section-header">
        <span className="section-header__text">
          Last Results:
        </span>
      </h2>
      <Table dataSource={props.entries} columns={columns} />
    </section>
  );
}

export default CSSModules(TableSection, { ...styles, ...sharedStyles }, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
