import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";

import { useRecentBookings } from "../features/dashboard/useRecentBookings";

function Dashboard() {
  const { isLoading, bookings } = useRecentBookings();

  if (isLoading) return <Spinner />;

  console.log(bookings);

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
