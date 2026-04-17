import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";

import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import { useRecentStays } from "../features/dashboard/useRecentStays";

function Dashboard() {
  const { isLoading, bookings } = useRecentBookings();
  const {
    isLoading: isloadingStays,
    stays,
    consfirmedStays,
  } = useRecentStays();

  if (isLoading || isloadingStays) return <Spinner />;

  console.log(stays, bookings, consfirmedStays);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
