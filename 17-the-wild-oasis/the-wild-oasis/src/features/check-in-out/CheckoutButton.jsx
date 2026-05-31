import Button from "../../ui/Button";
import useCheckOut from "./useCheck-out";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckingout}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
