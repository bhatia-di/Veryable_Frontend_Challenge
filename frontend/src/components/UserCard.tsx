import React from 'react';
import IUser from '../types/IUser';

export type UserCardPropsType = {
    userInfo: IUser
}

export const UserCard = (UserCardProps: UserCardPropsType) => {

    return (
        <div className='card p-3 user-card'>
            <div className='row'>
                <div className='col-2'>

                </div>
                <div className='col-9'>
                    <span className='font-username float-left'>{UserCardProps.userInfo.firstName + ' ' + UserCardProps.userInfo.lastName}</span>
                    <br />
                    <span className='user-role-font float-left'>{UserCardProps.userInfo.role}</span>
                    <br />
                    <span className='font-email float-left'>{UserCardProps.userInfo.email}</span>

                </div>

                <div className='col-1'>

                </div>

            </div>

        </div>
        
    );
};
