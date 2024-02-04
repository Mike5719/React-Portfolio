import React from 'react';
import projectData from '../components/Project';

export default function ProjectList() {
    return (
        <div className='project-list-container'>
            <h1 className='page-title'>Projects</h1>
            <ul className='project-list'>
                {projectData.map(project => (
                    <li key={project.id} className='project-item'>
                        <h2 className='project-name'>{project.name}</h2>
                        <img src={project.Image} className='project-image' />
                        <p className='project-links'>
                            <a href={project.deployedApp} target='_blank' className='project-link'>View App</a></p>
                        <p><a href={project.Repo} target='_blank' className='project-link'>View Repository</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
