import { useState } from "react";
import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import Pagination from "../Pagination/Pagination";
import NoteList from "../NoteList/NoteList";
import NoteModal from "../NoteModal/NoteModal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={search} onChange={setSearch} />
        <Pagination page={page} onPageChange={setPage} />
        <button className={css.button} onClick={() => setModalOpen(true)}>
          Create note +
        </button>
      </header>

      <NoteList page={page} search={search} />
      {isModalOpen && <NoteModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default App;
