import React from 'react';
import { List, Space } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Ducks = (props) => {
    return (
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={props.data}

        renderItem={item => (
          <div>
            <List.Item
              key={item.id}
              actions={[
                <IconText icon={CalendarOutlined} text={item.time} key="time" />, ]}
            >

                <br/>
            <List.Item.Meta title={<a href={`/info/${item.id}`}> Name:{item.name} </a>} />
            
            </List.Item>
            
            <hr />
          </div>
        )}
      />
    );
};

export default Ducks;