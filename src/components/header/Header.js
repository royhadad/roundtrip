import React from 'react';
import HeaderItem from './HeaderItem';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
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
                    {
                        this.props.isMobile ? (
                            <div className='mobile-menu-button' onClick={this.toggleMobileNavBar}>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </div>
                        ) : (
                                <div className='header-right-side'>
                                    {
                                        resources.headerItems.map((headerItem, index) => (<HeaderItem key={index} data={headerItem} />))
                                    }
                                </div>
                            )
                    }
                    <div className='header-left-side'>
                        <a href='/'>Alray</a>
                        <span>USD $</span>
                    </div>
                </div>
                {
                    this.props.isMobile && (
                        <Collapse isOpened={this.state.isNavBarOpen}>
                            <div className={'header-mobile-dropdown'}>
                                {resources.headerItems.map((headerItem, index) => (<HeaderItem key={index} data={headerItem} />))}
                            </div>
                        </Collapse>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isMobile: state.general.isMobile
})
export default connect(mapStateToProps)(Header);