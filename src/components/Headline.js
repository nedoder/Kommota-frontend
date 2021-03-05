import React from "react";
import './Headline.css';

function Headline({headlineTitle, headlineLink}) {
return (
        <div className={`
            headline
            ${headlineLink ? 'headline-with-link' : ''}
        `}>
            <h2 className="headline-title">
                {
                    headlineLink ?
                        <a href={headlineLink.href}>
                            {headlineTitle}
                        </a> :
                        headlineTitle
                }
            </h2>
            {
                headlineLink ?
                    <a href={headlineLink.href} className="headline-link">
                        {headlineLink.title}
                    </a> : ''
            }
        </div>
    );
}

export default Headline;
