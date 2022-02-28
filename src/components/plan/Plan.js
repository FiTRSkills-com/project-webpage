import React from "react";
import "./style.css";
import { projectPlan } from "../../content";

export const Plan = () => {
    return (
        <div className="plan">
            {projectPlan.map((paragraph) => (
                <p className="bodyText">{paragraph}</p>
            ))}

            <a
                href="https://docs.google.com/document/d/19T1A-PuHYI0-KrINrgkNI5S_YcTPfl14nTIOtV8rQsE/edit?usp=sharing"
                className="linkButton"
            >
                Full Project Plan
            </a>
        </div>
    );
};
