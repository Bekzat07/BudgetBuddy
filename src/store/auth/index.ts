// hooks
import {useDispatch} from '../../hooks/useDispatch';
import {useSelector} from '../../hooks/useSelector';

// redux
import baseService from '../../init/axios/baseService';
import {authActions} from './slice';
import {login} from './thunk/login';

// utils
import {remove} from '../../utils/storage';
import {register} from './thunk/register';
import {LoginForm, RegisterForm} from './types';

export const useAuth = () => {
  const dispatch = useDispatch();
  const authAccessTokenHeaderName = 'Authorization';

  const logout = () => {
    dispatch(authActions.initialState());
    remove('accessToken');
    dispatch(authActions.changeIsAuthenticatedStatus());
    delete baseService.defaults.headers.common[authAccessTokenHeaderName];
  };

  return {
    register: async (authDetails: RegisterForm) =>
      dispatch(register(authDetails)).unwrap(),
    login: async (authDetails: LoginForm) =>
      dispatch(login(authDetails)).unwrap(),
    logout,
    isLoading: useSelector(({auth}) => auth.isLoading),
    isAuthenticated: useSelector(({auth}) => auth.isAuthenticated),
    changeIsAuthenticatedStatus: () =>
      dispatch(authActions.changeIsAuthenticatedStatus()),
  };
};
