import React, {createContext, type ReactNode, useContext, useEffect, useState,} from 'react'
import type {Project} from '../types/Project'

interface ProjectsContextType {
    projects: Project[]
    addProject: (project: Omit<Project, 'id'>) => void
    updateProject: (project: Project) => void
    deleteProject: (id: string) => void
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined)

export const useProjects = (): ProjectsContextType => {
    const ctx = useContext(ProjectsContext)
    if (!ctx) throw new Error('useProjects must be used within ProjectsProvider')
    return ctx
}

export const ProjectsProvider: React.FC<{ children: ReactNode }> = ({
                                                                        children,
                                                                    }) => {
    const [projects, setProjects] = useState<Project[]>(() => {
        const stored = localStorage.getItem('projects')
        return stored ? JSON.parse(stored) : []
    })

    // I wanted to persist the projects in local storage so it doesn't reset on refresh
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects))
    }, [projects])

    const addProject = (p: Omit<Project, 'id'>) => {
        const newProj: Project = {id: Date.now().toString(), ...p}
        setProjects((prev) => [...prev, newProj])
    }

    const updateProject = (updated: Project) => {
        setProjects((prev) =>
            prev.map((p) => (p.id === updated.id ? updated : p))
        )
    }

    const deleteProject = (id: string) => {
        setProjects((prev) => prev.filter((p) => p.id !== id))
    }

    return (
        <ProjectsContext.Provider
            value={{projects, addProject, updateProject, deleteProject}}
        >
            {children}
        </ProjectsContext.Provider>
    )
}
