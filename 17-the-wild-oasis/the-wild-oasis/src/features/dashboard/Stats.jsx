import { formatCurrency } from "../../utils/helpers";
import Stat from "../dashboard/Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1
  const numBookings = bookings?.length;
  //2
  const sales = bookings.reduce((accum, cur) => accum + cur.totalPrice, 0);
  //3
  const checkins = confirmedStays?.length;
  //4 num checked in nights / by all available nights (num days * num cabins)
  /* const occupation =
    confirmedStays.reduce((accum, cur) => accum + cur.numNights, 0) /
    (numDays * cabinCount); */
  const occupation =
    confirmedStays?.reduce((accum, cur) => accum + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Checkins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupation}
      />
    </>
  );
}

export default Stats;
