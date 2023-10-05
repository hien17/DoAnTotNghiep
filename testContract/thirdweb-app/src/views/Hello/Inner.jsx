import { memo } from 'react';

const Inner = memo(() => {
    return <div>Hello</div>;
});

Inner.displayName = 'Hello Inner';

export default Inner;
