import React from "react";
import "./style.css";

export const Metrics = () => {
    return (
        <div className="metrics">
            <p className="bodyText">
                The project metrics we plan to track are:
            </p>
            <ul>
                <li>
                    <p className="bodyText">Effort prediction accuracy</p>
                    <ul>
                        <li>
                            <p className="bodyText">
                                The total difference between the estimated
                                effort of each task and the actual effort per
                                week.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className="bodyText">
                        Effort per week/Tasks per week (Velocity)
                    </p>
                    <ul>
                        <li>
                            <p className="bodyText">
                                The total actual effort of all tasks completed
                                per week.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className="bodyText">Effort by type of activity</p>
                    <ul>
                        <li>
                            <p className="bodyText">
                                The total effort of each category of task
                                completed per week.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className="bodyText">Stability of Business Model</p>
                    <ul>
                        <li>
                            <p className="bodyText">
                                The scale of changes made to the business model
                                per week.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className="bodyText">Sponsor Satisfaction</p>
                    <ul>
                        <li>
                            <p className="bodyText">
                                How satisfied the sponsor is with our
                                understanding and implementation of the business
                                model.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className="bodyText">Defects Found and Defect Source</p>
                    <ul>
                        <li>
                            <p className="bodyText">
                                The number of defects found and the source of
                                the defect (backend, frontend, etc.)
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className="bodyText">LOC per Function</p>
                    <ul>
                        <li>
                            <p className="bodyText">
                                The average number of lines of code per function
                                in each module of the codebase.
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>

            <br />
            <p className="bodyText">
                This section of content will be updated to display our metrics
                throughout the project timeline.
            </p>
        </div>
    );
};
