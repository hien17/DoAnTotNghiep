import { memo } from 'react';
import "dist/output.css";

const Inner = memo(() => {
  return (
  <div className="text-10xl font-extrabold text-sky-800 ">
  Contract Address
  </div>
  );
});

Inner.displayName = 'Hello Inner';

export default Inner;
