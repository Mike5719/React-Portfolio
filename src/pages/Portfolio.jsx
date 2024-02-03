import React from 'react';
import projectData from '../components/Project';

     
export default function ProjectList() {
        return (
            <div>
                <h1>Projects</h1>
                <ul>
                    {projectData.map(project => (
                        <li key={project.id}>
                            <h2>{project.name}</h2>
                            <p><a href={project.deployedApp} target='_blank'>View App</a></p>
                            <p><a href={project.Repo} target='_blank'>View Repository</a></p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
