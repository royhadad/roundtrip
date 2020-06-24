import React from 'react';
import { IconContext } from "react-icons";
import { FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
import { BsArrowUp } from 'react-icons/bs';
import IconObject from '../../entities/IconObject';
import resources from '../../resources/components/footer.json';
const BsArrowUpType = (<BsArrowUp />).type;

export default () => {
    return (
        <div className='footer-bottom'>
            <div className='copyright-text'>
                {resources.copyright}
            </div>
            <div className='social-media-container'>
                {
                    [
                        new IconObject(FaFacebookF, 'https://www.facebook.com/'),
                        new IconObject(FaInstagram, 'https://www.instagram.com/'),
                        new IconObject(FaTwitter, 'https://twitter.com/'),
                        new IconObject(FaGooglePlusG, 'https://www.roundtrip.co.il/'),
                        { IconComponent: BsArrowUp }
                    ]
                        .map(({ IconComponent, href }, index) => {
                            return (
                                ((<IconComponent />).type === BsArrowUpType) ?
                                    (
                                        <IconContext.Provider
                                            value={{ size: '50px', className: `social-media-link goto-top` }}
                                            key={index}
                                        >
                                            <div onClick={() => (window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }))}>
                                                <IconComponent />
                                            </div>
                                        </IconContext.Provider>
                                    )
                                    :
                                    (
                                        <IconContext.Provider
                                            value={{ size: '50px', className: `social-media-link${((<IconComponent />).type === BsArrowUpType) ? ' goto-top' : ''}` }}
                                            key={index}
                                        >
                                            <a href={href}>
                                                <IconComponent />
                                            </a>
                                        </IconContext.Provider>
                                    )
                            )
                        })
                }
            </div>
        </div>
    )
}