import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  // ... Add more data as required
];

const columns = [
  {
    title: 'Transaction Hash',
    dataIndex: 'transactionHash',
    key: 'transactionHash'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Sender',
    dataIndex: 'sender',
    key: 'sender'
  },
  {
    title: 'Receiver',
    dataIndex: 'receiver',
    key: 'receiver'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp'
  }
];

const BNBTransactionTable = () => {
  return ( 
    <div className="dark-table-container">
    <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default BNBTransactionTable;
