import css from "./StatusMessage.module.css";

interface StatusMessageProps {
  message: string;
}

export default function StatusMessage({ message }: StatusMessageProps) {
  return (
    <div className={css.status} role="status" aria-live="polite">
      {message}
    </div>
  );
}
