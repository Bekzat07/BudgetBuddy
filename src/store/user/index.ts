// hooks

import {useDispatch} from '../../hooks/useDispatch';
import {useSelector} from '../../hooks/useSelector';
import {addProfileImage} from './thunk/addProfileImage';
import {findUser} from './thunk/findUser';
import {getUser} from './thunk/getUser';
import {ImageForm} from './types';

export const useUser = () => {
  const dispatch = useDispatch();

  return {
    getUser: async () => dispatch(getUser()).unwrap(),
    currentUser: useSelector(({user}) => user.currentUser),
    updateProfileImage: async (data: ImageForm) =>
      dispatch(addProfileImage(data)).unwrap(),
    findUser: async (userName: string) => dispatch(findUser(userName)).unwrap(),
  };
};
