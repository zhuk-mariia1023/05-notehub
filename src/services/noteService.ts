import axios from "axios";
import type { Note } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = ""
): Promise<{ data: Note[]; totalPages: number }> => {
  const res = await api.get("/notes", {
    params: { page, perPage, search },
  });
  return res.data;
};

export const createNote = async (note: Omit<Note, "id">): Promise<Note> => {
  const res = await api.post("/notes", note);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await api.delete(`/notes/${id}`);
  return res.data;
};
