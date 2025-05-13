import React from 'react'
import {useProjects} from '../context/ProjectsContext'
import ProjectItem from './ProjectItem'

const ProjectList: React.FC = () => {
    const {projects} = useProjects()

    if (projects.length === 0)
        return (
            <p className="text-center text-gray-400">
                No projects yet. Use the form to add one.
            </p>
        )

    return (
        <div>
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project}/>
            ))}
        </div>
    )
}

export default ProjectList
