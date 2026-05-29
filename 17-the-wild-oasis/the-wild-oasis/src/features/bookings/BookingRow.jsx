import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useCheckOut from "../check-in-out/useCheck-out";
import useDeleteGuest from "./useDeleteGuest";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({ booking }) {
  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName, email },
    Cabins: { name },
  } = booking;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const navigate = useNavigate();
  const { checkout, isCheckingout } = useCheckOut();
  const { deleteGuest, isDeletingGuest } = useDeleteGuest();
  return (
    <Table.Row>
      <Modal>
        <Cabin>{name}</Cabin>

        <Stacked>
          <span>{fullName}</span>
          <span>{email}</span>
        </Stacked>

        <Stacked>
          <span>
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}{" "}
            &rarr; {numNights} night stay
          </span>
          <span>
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </Stacked>

        <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

        <Amount>{formatCurrency(totalPrice)}</Amount>
        <Menus.Menu>
          <Menus.Toggle id={bookingId}></Menus.Toggle>
          <Menus.List id={bookingId}>
            <Menus.Button onClick={() => navigate(`/bookings/${bookingId}`)}>
              <HiEye />
              See Details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button onClick={() => navigate(`/checkin/${bookingId}`)}>
                <HiArrowDownOnSquare />
                Check-In
              </Menus.Button>
            )}
            {status === "checked-in" && (
              <Menus.Button
                onClick={() => {
                  console.log(bookingId);
                  checkout(bookingId);
                }}
                disabled={isCheckingout}
              >
                <HiArrowUpOnSquare />
                Check-Out
              </Menus.Button>
            )}
            {status !== "checked-in" && (
              <Modal.Open opens="delete">
                <Menus.Button disabled={isDeletingGuest}>
                  <HiTrash />
                  Delete Guest
                </Menus.Button>
              </Modal.Open>
            )}
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            onConfirm={() => deleteGuest(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
