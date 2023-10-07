import { memo } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstants';
import { Header } from 'components';
const Inner = memo(() => {
    const navigate = useNavigate();
    return (
        <>
            <Header></Header>
            <div className='text-6xl text-cyan-600'>LOGIN PAGE</div>
        </>
    );
});

Inner.displayName = 'Login Inner';

export default Inner;
