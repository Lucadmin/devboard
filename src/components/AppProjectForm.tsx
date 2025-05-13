import React, {useState} from 'react'
import {useProjects} from '../context/ProjectsContext'
import type {ProjectStatus} from '../types/Project'

const AddProjectForm: React.FC = () => {
    const {addProject} = useProjects()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState<ProjectStatus>('Planned')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !description) return
        addProject({name, description, status})
        setName('')
        setDescription('')
        setStatus('Planned')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md"
        >
            <h2 className="text-xl font-semibold mb-4 text-white">Add New Project</h2>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-gray-300">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm text-gray-300">
                    Description
                </label>
                <textarea
                    id="description"
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="status" className="block text-sm text-gray-300">
                    Status
                </label>
                <select
                    id="status"
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as ProjectStatus)}
                >
                    <option>Planned</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold"
            >
                Add Project
            </button>
        </form>
    )
}

export default AddProjectForm
