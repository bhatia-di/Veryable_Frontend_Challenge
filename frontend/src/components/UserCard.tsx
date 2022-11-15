import React from 'react';
import IUser from '../types/IUser';
import { ExpandCollapse } from './ExpandCollapse';
import { UserCardDetail } from './UserCardDetail';
import classnames from 'classnames';

export type UserCardPropsType = {
    userInfo: IUser
}

export const UserCard = (UserCardProps: UserCardPropsType) => {

    const [expand, setExpand] = React.useState<boolean>(false);

    return (
        <div className='card p-3 user-card'>
            <div className='row user-card-top'>
                <div className='col-2'>

                </div>
                <div className='col-9'>
                    <span className='font-username float-left cursor-pointer'>{UserCardProps.userInfo.firstName + ' ' + UserCardProps.userInfo.lastName}</span>
                    <br/>
                    <span className='user-role-font float-left'>{UserCardProps.userInfo.role}</span>
                    <br/>
                    <span className='font-email float-left'>{UserCardProps.userInfo.email}</span>

                </div>

                <div className='col-1'>
                    <ExpandCollapse expand={expand} changeExpand={() => setExpand(!expand)}/>
                </div>

            </div>

            <div className={classnames(expand ? 'row user-card-detail' : 'd-none')}>
                <div className='col-2' >
                </div>
                <div className='col-9'>
                    <UserCardDetail title='Address' subTitle={UserCardProps.userInfo.street + ' , ' + UserCardProps.userInfo.city + ' , ' + UserCardProps.userInfo.zip}></UserCardDetail>
                    <UserCardDetail title='Phone' subTitle={UserCardProps.userInfo.phone}></UserCardDetail>
                    <UserCardDetail title='Created At' subTitle={UserCardProps.userInfo.createdAt}></UserCardDetail>
                    <UserCardDetail title='Last Logged In' subTitle={UserCardProps.userInfo.lastLoggedIn}></UserCardDetail>

                </div>
                <div className='col-1' >
                </div>
            </div>

        </div>
        
    );
};
