import { IProject } from "../../common/interfaces/project.interface";

export class Project {
    title: string;
    description: string;
    status: string;
    owner: string;
    startDate: string;
    endDate?: string;
    priority?: string;
    constructor(project: IProject    ) {
        this.title = project.title;
        this.description = project.description;
        this.status = project.status || 'Not Started';
        this.owner = project.owner || 'Unassigned';
        this.startDate = project.startDate;
        this.endDate = project.endDate;
        this.priority = project.priority;
    }
    
}
