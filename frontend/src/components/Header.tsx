import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as UserGroupLogo} from '../resources/icons/group.svg';

export const Header = () => {

    return (
        <div className='card user-header'>

            <span className='font-header'>
                <UserGroupLogo className='fill-blue mr-1' />
                users
            </span>

        </div>
    );

};
