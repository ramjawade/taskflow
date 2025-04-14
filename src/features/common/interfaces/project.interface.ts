export interface IProject {
    id?: string | number;
    title: string;
    description: string;
    status?: string;
    owner?: string;
    startDate: string;
    endDate?: string;
    priority?: string;
}