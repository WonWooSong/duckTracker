import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,

    },
    {
      title: 'Time',
      dataIndex: 'time',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.time - b.time,
    },
    {
        title: 'Food',
        dataIndex: 'food',
        defaultSortOrder: 'descend',
        onFilter: (value, record) => record.food.indexOf(value) === 0,
        sorter: (a, b) => a.food.length - b.food.length,
  
    },
    {
        title: 'Where',
        dataIndex: 'where',
        defaultSortOrder: 'descend',
        onFilter: (value, record) => record.where.indexOf(value) === 0,
        sorter: (a, b) => a.where.length - b.where.length,
  
    },
    {
        title: 'How Many',
        dataIndex: 'howMany',
        defaultSortOrder: 'descend',
        onFilter: (value, record) => record.howMany.indexOf(value) === 0,
        sorter: (a, b) => a.howMany.length - b.howMany.length,
  
    },
    {
        title: 'How Much Food',
        dataIndex: 'howMuch',
        defaultSortOrder: 'descend',
        onFilter: (value, record) => record.howMuch.indexOf(value) === 0,
        sorter: (a, b) => a.howMuch.length - b.howMuch.length,
  
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

class Report extends React.Component {
    state = {
        ducks: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    ducks: res.data
                });
            })
    }

    render() {

        return (
            <Table columns={columns} dataSource={this.state.ducks} onChange={onChange} />
        )
    }

}

export default Report;