// hooks

import {useDispatch} from '../../hooks/useDispatch';
import {useSelector} from '../../hooks/useSelector';
import {getUser} from './thunk/getUser';

export const useUser = () => {
  const dispatch = useDispatch();

  return {
    getUser: async () => dispatch(getUser()).unwrap(),
    currentUser: useSelector(({user}) => user.currentUser),
  };
};
