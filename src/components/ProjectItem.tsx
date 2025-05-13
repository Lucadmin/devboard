import React, {useState} from 'react'
import type {Project} from '../types/Project'
import {useProjects} from '../context/ProjectsContext'
import EditProjectForm from './EditProjectForm'

const statusStyles: Record<Project['status'], string> = {
    'Planned': 'bg-yellow-500',
    'In Progress': 'bg-blue-500',
    'Completed': 'bg-green-500',
}

const ProjectItem: React.FC<{ project: Project }> = ({project}) => {
    const {updateProject, deleteProject} = useProjects()
    const [isEditing, setIsEditing] = useState(false)

    const handleSave = (updated: Project) => {
        updateProject(updated)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <EditProjectForm
                project={project}
                onSave={handleSave}
                onCancel={handleCancel}
            />
        )
    }

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 flex flex-col md:flex-row justify-between">
            <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-gray-300">{project.description}</p>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-2">
        <span
            className={`px-2 py-1 rounded text-white text-sm ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-sm text-blue-400 hover:underline"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => deleteProject(project.id)}
                        className="text-sm text-red-500 hover:underline"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
