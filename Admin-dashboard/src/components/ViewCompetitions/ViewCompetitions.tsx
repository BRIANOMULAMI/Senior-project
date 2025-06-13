import "./ViewCompetitions.css";

interface Competition {
  name: string;
  venue: string;
  date: string;
  maxSchools: number;
}

interface Props {
  competitions: Competition[];
}

const ViewCompetitions = ({ competitions }: Props) => {
  return (
    <div className="view-competitions">
      <h2>List of Competitions</h2>
      {competitions.length === 0 ? (
        <p>No competitions added yet.</p>
      ) : (
        <ul>
          {competitions.map((comp, index) => (
            <li key={index}>
              <strong>{comp.name}</strong>
              <br />
              Venue: {comp.venue}
              <br />
              Date: {comp.date}
              <br />
              Max Schools: {comp.maxSchools}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewCompetitions;
