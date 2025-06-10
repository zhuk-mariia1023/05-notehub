import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import NoteList from "../NoteList/NoteList";
import NoteModal from "../NoteModal/NoteModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import StatusMessage from "../StatusMessage/StatusMessage";
import { fetchNotes, deleteNote } from "../../services/noteService";
import type { Note } from "../../types/note";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 500);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<{
    notes: Note[];
    totalPages: number;
  }>({
    queryKey: ["notes", page, debouncedQuery],
    queryFn: () => fetchNotes(page, debouncedQuery),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setPage(1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchQuery} onSearch={handleSearch} />
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
      </header>

      {isLoading && <Loader />}
      {isError && <ErrorMessage message={(error as Error).message} />}

      {!isLoading && !isError && (
        <NoteList
          notes={data?.notes ?? []}
          onDelete={(id) => deleteMutation.mutate(id)}
        />
      )}

      {isModalOpen && <NoteModal onClose={closeModal} />}

      {!isLoading && !isError && data?.notes.length === 0 && (
        <StatusMessage message="No notes found." />
      )}
    </div>
  );
}
