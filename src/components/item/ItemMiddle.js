import React from 'react';

export default (props) => {
    return (
        <div className='item-middle'>
            im an item! {JSON.stringify(props.item)}
        </div>
    );
}