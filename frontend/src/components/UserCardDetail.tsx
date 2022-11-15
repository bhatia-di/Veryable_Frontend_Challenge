import React from 'react';

export type UserCardDetailPropsType = {
    title: string,
    subTitle: string

}

export const UserCardDetail = (UserCardDetailProps: UserCardDetailPropsType) => {

    return (
        <React.Fragment>
            <span className='float-left detail-header-font'>{UserCardDetailProps.title}</span>
            <br/>
            <span className='float-left detail-item-font'>{UserCardDetailProps.subTitle}</span>
            <br/>

        </React.Fragment>
    );


};
