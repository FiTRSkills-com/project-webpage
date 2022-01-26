import React from 'react';
import './style.css'
import { projectLinks, projectDescription } from '../../content';

export const Home = ({}) => {
    return <div className="home">
        <h1 className="projectNameHeader">
            FITR Skills
        </h1>
        
        <p className="projectDescription">{projectDescription}</p>
        
        <h2 className="projectLinksHeader">
            Links
        </h2>

        {projectLinks.map( (linkObject, index) => (
            <a key={index} className="link" href={linkObject.link} >
                {linkObject.text}
            </a>
        ))}

    </div>
};