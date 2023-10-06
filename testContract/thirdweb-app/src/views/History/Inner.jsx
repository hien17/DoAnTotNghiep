import React, { memo } from 'react';
import BNBTransactionTable from './components/table.jsx';
import './components/table.css';

const Inner = memo(() => {
    return (
      <>
        <div className="my-6 text-2xl font-semibold text-center dark:text-gray-300">
          Transaction History
        </div>
        <div className="mx-auto max-w-7xl dark:bg-gray-800 p-6 rounded-xl space-y-10 shadow-lg">
          <BNBTransactionTable />
        </div>
      </>
    );
});

Inner.displayName = 'History Inner';

export default Inner;
