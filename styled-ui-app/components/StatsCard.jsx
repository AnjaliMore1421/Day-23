import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const Title = styled.h4`
  margin-bottom: 10px;
`;

const Value = styled.h2`
  color: ${({ theme }) => theme.primary};
`;

function StatsCard({ title, value }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
}

export default StatsCard;
