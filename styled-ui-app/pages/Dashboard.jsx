import styled from "styled-components";
import StatsCard from "../components/StatsCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
`;

function Dashboard() {
  return (
    <Grid>
      <StatsCard title="Total Patients" value="1,250" />
      <StatsCard title="Appointments" value="320" />
      <StatsCard title="Doctors" value="45" />
      <StatsCard title="Revenue" value="₹2.5L" />
    </Grid>
  );
}

export default Dashboard;
