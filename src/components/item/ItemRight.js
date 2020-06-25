import React from 'react';
import Img from '../generics/Img';

export default ({ item }) => {
    return (
        <div className='item-right'>
            <Img src={item.imgUrl} alt={item.hotel}>
            </Img>
        </div>
    );
}