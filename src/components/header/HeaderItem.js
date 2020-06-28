import React from 'react';
// import { Link } from 'react-router-dom';

class HeaderItem extends React.Component {
    render() {
        return (
            <div onClick={() => alert(`הכפתור יעביר לדף ${this.props.data.header}`)} className={'header-item' + (this.props.data.header === 'חבילות נופש' ? ' header-item-selected' : '')}>
                {this.props.data.header}
            </div>
        );
    }
}

export default HeaderItem;