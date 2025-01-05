// hooks
import {useDispatch} from '../../hooks/useDispatch';
import {getUser} from './thunk/getUser';

export const useUser = () => {
  const dispatch = useDispatch();

  return {
    getUser: async () => dispatch(getUser()).unwrap(),
  };
};
