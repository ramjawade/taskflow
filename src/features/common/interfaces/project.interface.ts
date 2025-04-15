export interface IProject {
    id?: string | number;
    title: string;
    description: string;
    status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
    owner?: string;
    startDate: string;
    endDate?: string;
    priority?: 'HIGH' | 'MEDIUM' | 'LOW';
}