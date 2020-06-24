import React from 'react';
import HeaderItem from './HeaderItem';
import resources from '../../resources/components/header.json';

class Header extends React.Component {
    state = {
        isNavBarOpen: false
    }
    toggleMobileNavBar = (e) => {
        e.stopPropagation();
        this.setState((prevState) => ({ isNavBarOpen: !prevState.isNavBarOpen }));
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header-inner-container'>
                    <div className='mobile-menu-button' onClick={this.toggleMobileNavBar}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div className='header-right-side'>
                        {
                            resources.headerItems.map((headerItem, index) => (<HeaderItem key={index} data={headerItem} />))
                        }
                    </div>
                    <div className='header-left-side'>
                        <a href='/'>Alray</a>
                        <span>USD $</span>
                    </div>
                </div>
                <div className={'header-mobile-dropdown' + (this.state.isNavBarOpen ? ' header-mobile-dropdown-open' : '')}>
                    {
                        resources.headerItems.map((headerItem, index) => (<HeaderItem key={index} data={headerItem} />))
                    }
                </div>
            </div>
        );
    }
}

export default Header;