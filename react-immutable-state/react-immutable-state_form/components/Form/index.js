import { useImmer } from "use-immer";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(e) {
    e.preventDefault();
    updateMountain((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleAltitudeChange(e) {
    e.preventDefault();
    updateMountain((draft) => {
      draft.values.altitude = e.target.value;
    });
  }

  function handleMountainRangeChange(e) {
    e.preventDefault();
    updateMountain((draft) => {
      draft.values.mountainRange = e.target.value;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
