import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  turnAllLightsOn,
  turnAllLightsOff,
  counterRunningLights,
}) {
  return (
    <StyledQuickActions>
      <p>{counterRunningLights} light(s) are on.</p>{" "}
      <Button type="button" onClick={turnAllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={turnAllLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
