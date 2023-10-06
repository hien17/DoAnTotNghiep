import React, { useState, useEffect } from 'react';

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
  {
    key: '2',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '3',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '4',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '5',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '6',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '7',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '8',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '9',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '10',
    transactionHash: '0x1234567890abcdef',
    name: 'Quang',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
  {
    key: '11',
    transactionHash: '0x1234567890abcdef',
    name: 'Hien',
    sender: '0xabcdef1234567890',
    receiver: '0x7890abcdef123456',
    amount: '5 BNB',
    timestamp: '2023-10-05 12:00:00'
  },
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
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default to 10 rows per page
  const totalDataCount = dataSource.length;
  const totalPages = Math.ceil(totalDataCount / rowsPerPage);

  const handleRowChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page after changing rows
  };

  const gotoPage = (pageNumber) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
  };

  const displayedData = dataSource.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return ( 
    <div className="dark:bg-gray-800 p-4 rounded">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                {column.dataIndex}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {displayedData.map((data) => (
            <tr key={data.key} className="dark:hover:bg-gray-700">
              {columns.map((column) => (
                <td className="px-6 py-4 whitespace-nowrap">
                  {data[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Navigation bar */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <label className="text-gray-500 dark:text-gray-300 mr-2" htmlFor="rows">Show rows:</label>
          <select 
            id="rows"
            value={rowsPerPage}
            onChange={handleRowChange}
            className="bg-gray-800 text-white rounded px-3 py-2 border dark:border-gray-600"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => gotoPage(1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded shadow-md transition duration-200"
          >
            First
          </button>
          <button 
            onClick={() => gotoPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded shadow-md transition duration-200"
          >
            Previous
          </button>
          <span className="text-gray-500 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={() => gotoPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded shadow-md transition duration-200"
          >
            Next
          </button>
          <button 
            onClick={() => gotoPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded shadow-md transition duration-200"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default BNBTransactionTable;
