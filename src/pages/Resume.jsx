import React from 'react';
import { FaLinkedin } from 'react-icons/fa';


export default function Resume() {

return (
    <div>
        <h1>Resume</h1>
        <p className='pageText'>Please feel free to view my resume by clicking on this link.</p>
        <p>
        <a href="https://linkedin.com" target='_blank' className="icon"> <FaLinkedin /> </a>  
        </p>
    </div>
);
};