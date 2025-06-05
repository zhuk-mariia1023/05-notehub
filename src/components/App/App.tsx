import React from "react";
import css from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* SearchBox, Pagination, Create Note button */}
      </header>
      {/* NoteList */}
    </div>
  );
};

export default App;
