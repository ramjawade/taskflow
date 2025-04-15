export interface ITask {
    id: number;
    projectId: number;
    title: string;
    status: TaskStatus;
    assignee: string;
    size: 'XS' | 'S' | 'M' | 'L' | 'XL';
    startDate: string;
    endDate: string;
  }

  export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED';
