import { UserActionTypes} from './user.types';

export const setCUrrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})