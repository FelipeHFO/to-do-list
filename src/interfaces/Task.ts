export interface Task {
  id: number;
  name: string;
  status: boolean;
  editable: boolean;
  createdAt?: Date;
}
