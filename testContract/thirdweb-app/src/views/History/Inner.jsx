import {React, memo, useCallback, useEffect, useState } from 'react';
import BNBTransactionTable from './components/data.jsx';
import './components/table.css';

const Inner = memo(() => {
    return (
        <div className="App">
          <BNBTransactionTable />
        </div>
      );
});

Inner.displayName = 'History Inner';

export default Inner;
