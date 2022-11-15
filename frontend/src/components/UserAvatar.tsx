import React from 'react';
import {ReactComponent as UserLogo} from '../resources/icons/user.svg';
import { Role } from '../types/IUser';
import { getStyleBasedOnRole } from '../utils/utils';
import classnames from 'classnames';

export type UserAvatarPropsType = {
    role: Role
}

export const UserAvatar = (UserAvatarProps: UserAvatarPropsType) => {

    const getComputedStyle = getStyleBasedOnRole(UserAvatarProps.role);
    
    return (
        <UserLogo className={classnames(getComputedStyle)} />
    );

    


};
