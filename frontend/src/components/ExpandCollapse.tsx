import React from 'react';
import {ReactComponent as ExpandArrow} from '../resources/icons/expand_more.svg';
import {ReactComponent as CollapseArrow} from '../resources/icons/expand_less.svg';

export type ExpandCollapsePropsType = {
    expand: boolean,
    cardIndex: number,
    changeExpand: () => void
}

export const ExpandCollapse = (ExpandCollapseProps: ExpandCollapsePropsType) => {

    const keyBoardEvent = (event: KeyboardEvent) => {
        console.log(event);
        if (event.key === 'Enter') {
            ExpandCollapseProps.changeExpand();
        }


    } 

    if (ExpandCollapseProps.expand) {

        return (
            
            <CollapseArrow tabIndex={ExpandCollapseProps.cardIndex * 2 + 1} className='fill-grey m-2 cursor-pointer expandible' 
            // @ts-ignore
                    onClick={() => ExpandCollapseProps.changeExpand()} onKeyDown={(event) => keyBoardEvent(event)} />
        );

    } else {

        return (
            <ExpandArrow tabIndex={ExpandCollapseProps.cardIndex * 2 + 0} className='fill-grey m-2 cursor-pointer expandible'
            // @ts-ignore

                    onClick={() => ExpandCollapseProps.changeExpand()} onKeyDown={(event) => keyBoardEvent(event)} />
        );


    }


};
