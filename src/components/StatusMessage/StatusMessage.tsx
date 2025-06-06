import React from "react";
import css from "./StatusMessage.module.css";

interface StatusMessageProps {
  message: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
  return (
    <div className={css.status} role="status" aria-live="polite">
      {message}
    </div>
  );
};

export default StatusMessage;
