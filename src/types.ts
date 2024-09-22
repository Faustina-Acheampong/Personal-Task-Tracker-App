export interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
    isEditing: boolean; // added property to show editing status
  }
  