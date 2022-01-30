import React from 'react';
import './style.css'
import { projectPlan } from '../../content';

export const Plan = ({}) => {
    return <div className="plan">
        {
            projectPlan.map( (paragraph) => (
                <p className='bodyText'>{paragraph}</p>
            ))
        }
        
    </div>

}