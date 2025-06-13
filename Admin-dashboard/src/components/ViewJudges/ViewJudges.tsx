import "./ViewJudges.css";

interface Judge {
  firstName: string;
  lastName: string;
  email: string;
  idNumber: string;
}

interface Props {
  judges: Judge[];
}

const ViewJudges: React.FC<Props> = ({ judges }) => {
  return (
    <div className="view-judges">
      <h2>Judges</h2>
      {judges.length === 0 ? (
        <p>No judges have been added yet.</p>
      ) : (
        <ul>
          {judges.map((judge, index) => (
            <li key={index}>
              {judge.firstName} {judge.lastName}
              <br />
              Email: {judge.email}
              <br />
              ID: {judge.idNumber}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewJudges;
