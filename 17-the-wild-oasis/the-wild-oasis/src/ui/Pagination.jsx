import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  /* const [searchParams, setSearchParams] = useSearchParams();
  const currentPge = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const handleNextPage = function () {
    const next = currentPge === pageCount ? currentPge : currentPge + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  };
  const handlePreviousPage = function () {
    const prevPage = currentPge === 1 ? currentPge : currentPge - 1;
    searchParams.set("page", prevPage);
    setSearchParams(searchParams); */

  const [searchParams, setSearchParams] = useSearchParams();

  // Get current page from URL (?page=2)
  // Default to page 1 if nothing is set
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // Total number of pages based on total items
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Go to next page (but don't exceed last page)
  const handleNextPage = function () {
    const next =
      currentPage === pageCount
        ? currentPage // stay on last page if already there
        : currentPage + 1; // otherwise move forward

    // Create a copy of current URL params (important: don't mutate original)
    const newParams = new URLSearchParams(searchParams);

    // Update page in URL
    newParams.set("page", next);

    // Push updated params to URL (triggers re-render)
    setSearchParams(newParams);
  };

  // Go to previous page (but don't go below page 1)
  const handlePreviousPage = function () {
    const prevPage =
      currentPage === 1
        ? currentPage // stay on page 1 if already there
        : currentPage - 1; // otherwise move back

    // Clone current URL params to avoid mutation bugs
    const newParams = new URLSearchParams(searchParams);

    // Update page in URL
    newParams.set("page", prevPage);

    // Apply updated URL params
    setSearchParams(newParams);
  };

  return (
    <StyledPagination>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span>-
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <Buttons>
        <PaginationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
      </Buttons>
      <Buttons>
        <PaginationButton
          onClick={handleNextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
