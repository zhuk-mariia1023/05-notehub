import css from "./ErrorMessage.module.css";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div className={css.error} role="alert" aria-live="assertive">
      {message}
    </div>
  );
}
