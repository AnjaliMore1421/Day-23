import styled from "styled-components";
import { FaUserInjured, FaCalendarCheck, FaChartBar } from "react-icons/fa";

const Side = styled.div`
  width: 220px;
  background: ${({ theme }) => theme.sidebar};
  color: white;
  height: 100vh;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
  cursor: pointer;

  &:hover {
    color: #60a5fa;
  }
`;

function Sidebar() {
  return (
    <Side>
      <Title>🏥 Dashboard</Title>

      <Item><FaChartBar /> Overview</Item>
      <Item><FaUserInjured /> Patients</Item>
      <Item><FaCalendarCheck /> Appointments</Item>
    </Side>
  );
}

export default Sidebar;
