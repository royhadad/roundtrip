import React from 'react';
import resources from '../../resources/components/footer.json';
const linkSections = resources.footerLinks;


export default () => {
    return (
        <div className='footer-top'>
            <h1>
                Alray
            </h1>
            <div className='footer-link-sections'>
                {
                    linkSections.map((linkSection) => (
                        <div className='footer-link-section'>
                            <h3>{linkSection.header}</h3>
                            {
                                linkSection.links.map((linkObject) => (
                                    <a href={linkObject.href} className='footer-link'>
                                        {linkObject.text}
                                    </a>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}