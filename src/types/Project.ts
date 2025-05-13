export type ProjectStatus = 'Planned' | 'In Progress' | 'Completed'

export interface Project {
    id: string
    name: string
    description: string
    status: ProjectStatus
}