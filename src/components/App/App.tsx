import { useState } from "react";
import { useDebounce } from "use-debounce";
import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import Pagination from "../Pagination/Pagination";
import NoteList from "../NoteList/NoteList";
import NoteModal from "../NoteModal/NoteModal";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 500);

  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const totalPages = 5;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchQuery} onSearch={setSearchQuery} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
      </header>

      <NoteList page={page} search={debouncedQuery} />

      {isModalOpen && <NoteModal onClose={closeModal} />}
    </div>
  );
}
