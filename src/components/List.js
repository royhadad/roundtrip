import React from 'react';
import Item from './item/Item';
import DotLoader from "react-spinners/DotLoader";
import resources from '../resources/components/list.json';

class List extends React.Component {

    render() {
        console.log(this.props.items);

        if (this.props.items === undefined) {
            return (
                <div className='list-spinner-container'>
                    <DotLoader
                        color={'#0091E2'}
                        className='list-spinner'
                        size={'3rem'}
                    />
                </div>
            )
        } else {
            const listLength = this.props.items.length;
            const headerText = (listLength === 1) ?
                (`${resources.listSingleHeaderStart}${listLength}`) :
                (`${resources.listManyHeaderStart}${listLength}${resources.listManyHeaderEnd}`);

            return (
                <div className='list-container'>
                    <p className='list-header'>{headerText}</p>
                    {
                        this.props.items.map((item) => (
                            <Item item={item} key={item.id} />
                        ))
                    }
                </div>
            )
        }
    }
}

export default List;