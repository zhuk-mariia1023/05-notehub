import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  const [input, setInput] = useState(value);
  const [debouncedValue] = useDebounce(input, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <input
      type="text"
      className={css.input}
      placeholder="Search notes"
      value={input}
      onChange={handleChange}
    />
  );
}
