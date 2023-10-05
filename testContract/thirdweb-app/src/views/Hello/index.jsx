import HomeLayout from 'layouts/Home';
import Inner from './Inner';
import { memo } from 'react';

const Wrapper = memo(() => {
    return (
        <HomeLayout title="Hello">
            <Inner />
        </HomeLayout>
    );
});

Wrapper.displayName = 'Hello';

const Hello = Wrapper;

export default Hello;
