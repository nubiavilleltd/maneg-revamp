import { useState } from "react";
import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  productsPerPage: number;
  totalProducts: number;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}: PaginationProps) {
  const pageNumbers = [];
  const totalPages = totalProducts / productsPerPage;
  //limit page numbers shown
  const [pageNumberLimit] = useState<number>(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState<number>(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState<number>(0);

  //paginate
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scroll(0, 1500);
  };

  //go to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);

    // Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show prev set of pageNumbers
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  //go to next page

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className={styles.pagination}>
      <li
        onClick={paginatePrev}
        className={
          currentPage === pageNumbers[0] ? `${styles.hidden}` : `${styles.list}`
        }
      >
        Prev
      </li>
      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? `${styles.active}` : ""}
            >
              {number}
            </li>
          );
        }
      })}
      <li
        onClick={paginateNext}
        className={
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? `${styles.hidden}`
            : ""
        }
      >
        Next
      </li>
      <p className={styles.p}>
        <b className={styles.page}>{`page ${currentPage}`}</b>
        &nbsp; <span>of</span>
        &nbsp; <b>{`${Math.ceil(totalPages)}`}</b>
      </p>
    </ul>
  );
}
