import { User } from "./User";

export interface Preferences {
    id: number;
    name: string;
    user: User | null;
    timeHistory: number;
    timeChartMonth: number;
    todoMaxDisplay: number;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}