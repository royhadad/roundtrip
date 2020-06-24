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
                    linkSections.map((linkSection, index1) => (
                        <div className='footer-link-section' key={index1}>
                            <h3>{linkSection.header}</h3>
                            {
                                linkSection.links.map((linkObject, index2) => (
                                    <a href={linkObject.href} className='footer-link' key={index2}>
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