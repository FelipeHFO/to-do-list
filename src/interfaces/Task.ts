export interface Task {
  id: string;
  name: string;
  status: boolean;
  editable: boolean;
  createdAt?: Date;
}
