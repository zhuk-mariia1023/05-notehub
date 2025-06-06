import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  onPageChange: (selected: number) => void;
}

const Pagination = ({ page, onPageChange }: PaginationProps) => {
  const totalPages = 5;
  if (totalPages <= 1) return null;

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={(e) => onPageChange(e.selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
};

export default Pagination;
