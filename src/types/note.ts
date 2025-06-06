export interface Note {
  _id: string;
  title: string;
  content: string;
  tag: string;
  createdAt?: string;
  updatedAt?: string;
}

export type NewNote = Pick<Note, "title" | "content" | "tag">;
