import React from 'react';
import ItemRight from './ItemRight';
import ItemMiddle from './ItemMiddle';
import ItemLeft from './ItemLeft';

class Item extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <div className='item-container'>
                <ItemRight item={item} />
                <ItemMiddle item={item} />
                <ItemLeft item={item} />
            </div>
        );
    }
}

export default Item;