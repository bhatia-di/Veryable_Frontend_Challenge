import React from 'react';
import {ReactComponent as ExpandArrow} from '../resources/icons/expand_more.svg';
import {ReactComponent as CollapseArrow} from '../resources/icons/expand_less.svg';

export type ExpandCollapsePropsType = {
    expand: boolean
}

export const ExpandCollapse = (ExpandCollapseProps: ExpandCollapsePropsType) => {

    if (ExpandCollapseProps.expand) {

        return (
            <CollapseArrow className='fill-grey m-2 cursor-pointer'/>
        );

    } else {

        return (
            <ExpandArrow className='fill-grey m-2 cursor-pointer'/>
        );


    }


};
