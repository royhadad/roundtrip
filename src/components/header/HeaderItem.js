import React from 'react';
// import { Link } from 'react-router-dom';
class HeaderItem extends React.Component {
    render() {
        return (
            <a href={this.props.data.href} className='header-item'>
                {
                    this.props.data.header
                }
            </a>
        );
    }
}

export default HeaderItem;