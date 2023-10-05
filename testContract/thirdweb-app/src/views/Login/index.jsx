import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/action';
import userService from 'apis/services/userService';
import Inner from 'views/Login/Inner';

const Wrapper = memo(() => {
    return <Inner />;
});
Wrapper.displayName = 'Login';

const Login = Wrapper;

export default Login;
