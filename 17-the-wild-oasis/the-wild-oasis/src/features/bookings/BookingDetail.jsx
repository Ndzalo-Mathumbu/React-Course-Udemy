import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { DeleteButton } from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowDownOnSquare, HiTrash } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import useCheckOut from "../check-in-out/useCheck-out";
import useDeleteGuest from "./useDeleteGuest";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export function BookingDetail() {
  const navigate = useNavigate();
  const { checkout, isCheckingout } = useCheckOut();
  const { booking, isLoading, error } = useBooking();
  const { deleteGuest, isDeletingGuest } = useDeleteGuest();
  const moveBack = useMoveBack();

  // IMPORTANT: Never destructure before checking if booking exists
  // Because booking can be undefined while API is loading or failing

  if (isLoading) return <Spinner />;

  // Handling API failure state
  if (error) return <p>Could not find booking</p>;

  // Handling missing data safely
  if (!booking) return <p>Booking not found.</p>;

  // Now safe to destructure
  const { status, id: bookingId } = booking;

  console.log(booking);

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>

          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>

        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "checked-in" && (
          <Button
            onClick={() => {
              console.log(bookingId);
              checkout(bookingId);
            }}
            disabled={isCheckingout}
          >
            Check-Out
          </Button>
        )}

        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check-in
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>

      <Modal>
        {/* 1.OPENS MODAL */}
        {status !== "checked-in" && (
          <Modal.Open opens="delete">
            <DeleteButton disabled={isDeletingGuest}>Delete Guest</DeleteButton>
          </Modal.Open>
        )}

        {/* 2. MODAL CONTENT */}
        <Modal.Window name="delete">
          <ConfirmDelete
            disabled={isDeletingGuest}
            resourceName="booking"
            onConfirm={() =>
              deleteGuest(bookingId, {
                onSettled: () => navigate(-1),
              })
            }
          />
        </Modal.Window>
      </Modal>
    </>
  );
}
/* export default BookingDetail;
 */
