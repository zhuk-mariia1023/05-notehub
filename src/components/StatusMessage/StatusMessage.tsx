import css from "./StatusMessage.module.css";

interface Props {
  message: string;
}

export default function StatusMessage({ message }: Props) {
  return (
    <div className={css.status} role="status" aria-live="polite">
      {message}
    </div>
  );
}
