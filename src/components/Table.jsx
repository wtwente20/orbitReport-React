import "./styling.css";

// Table component to display satellite data
const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          {/* Table headers defining the data columns */}
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through each satellite data and display in table rows */}
        {sat.map((data, id) => (
          <tr key={id}> {/* Unique key for each row */}
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
