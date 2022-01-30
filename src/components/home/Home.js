import React from 'react';
import './style.css'
import { projectLinks, projectDescription } from '../../content';

export const Home = ({}) => {
    return <div className="home">
        <h1 className="headerText">
            FITR Skills
        </h1>
        
        {
            projectDescription.map( (paragraph) => (
                <p className='bodyText'>{paragraph}</p>
            ))
        }
        <h2 className="headerText">
            Links
        </h2>

        {projectLinks.map( (linkObject, index) => (
            <a key={index} className="linkButton" href={linkObject.link} >
                {linkObject.text}
            </a>
        ))}

    </div>
};