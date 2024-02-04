import React from 'react';


export default function Resume() {

    return (
        <div className='resume-container'>
            <h1>Proficiencies:</h1>
            <ul className='pageText'>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>React.js</li>
            </ul>
            <a href="/path/to/resume.pdf" download className='resume-link'>Download Resume</a>
        </div>
    );
};