import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchNotes, deleteNote } from "../../services/noteService";
import type { Note } from "../../types/note";
import css from "./NoteList.module.css";

interface NoteListProps {
  page: number;
  search: string;
}

const NoteList = ({ page, search }: NoteListProps) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<{
    notes: Note[];
  }>({
    queryKey: ["notes", page, search],
    queryFn: () => fetchNotes(page, search),
  });

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    queryClient.invalidateQueries({ queryKey: ["notes"] });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data?.notes.length) return <p>No notes found.</p>;

  return (
    <ul className={css.list}>
      {data.notes.map((note) => (
        <li key={note._id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button
              className={css.button}
              onClick={() => handleDelete(note._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
