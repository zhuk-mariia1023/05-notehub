import axios from "axios";
import type { Note, NewNote } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";
const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchNotes = async (
  page: number,
  search: string = "",
  perPage: number = 12
): Promise<{ notes: Note[]; totalPages: number }> => {
  const params: Record<string, string | number> = {
    page,
    perPage,
  };

  if (search.trim() !== "") {
    params.search = search.trim();
  }

  const response = await instance.get("/notes", { params });
  return response.data;
};

export const createNote = async (data: NewNote): Promise<Note> => {
  const response = await instance.post("/notes", data);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await instance.delete(`/notes/${id}`);
  return response.data;
};
