import React, {useState} from 'react'
import type {Project, ProjectStatus} from '../types/Project'

interface EditProjectFormProps {
    project: Project
    onSave: (project: Project) => void
    onCancel: () => void
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({
                                                             project,
                                                             onSave,
                                                             onCancel,
                                                         }) => {
    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)
    const [status, setStatus] = useState<ProjectStatus>(project.status)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave({...project, name, description, status})
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-4 rounded-lg shadow-md mb-4"
        >
            <div className="mb-3">
                <label htmlFor="edit-name" className="block text-sm text-gray-300">
                    Name
                </label>
                <input
                    id="edit-name"
                    type="text"
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label
                    htmlFor="edit-description"
                    className="block text-sm text-gray-300"
                >
                    Description
                </label>
                <textarea
                    id="edit-description"
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="edit-status" className="block text-sm text-gray-300">
                    Status
                </label>
                <select
                    id="edit-status"
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as ProjectStatus)}
                >
                    <option>Planned</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
            </div>
            <div className="flex justify-end space-x-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="py-1 px-4 bg-gray-600 hover:bg-gray-500 rounded text-white"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="py-1 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white"
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default EditProjectForm
