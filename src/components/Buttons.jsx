import satData from "./satData";
import './styling.css';

// Buttons component to display buttons for filtering satellites
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container"> {/* Flex container for styling buttons */}
      {/* Mapping through satellite types to create a button for each */}
      {displaySats.map((sat, id) => (
        <button key={id} onClick={() => filterByType(sat)}>
          {sat} Orbit {/* Button text showing satellite orbit type */}
        </button>
      ))}
      {/* Button to display all satellites */}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
