import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CompetitionForm from "./components/CompetitionForm/CompetitionForm";
import CreateJudgeForm from "./components/CreateJudgeForm/CreateJudgeForm";
import ViewCompetitions from "./components/ViewCompetitions/ViewCompetitions";
import ViewJudges from "./components/ViewJudges/ViewJudges";
import Footer from "./components/Footer/Footer";
import "./index.css";

interface Competition {
  name: string;
  venue: string;
  date: string;
  maxSchools: number;
}

interface Judge {
  firstName: string;
  lastName: string;
  email: string;
  idNumber: string;
}

const App = () => {
  const [selected, setSelected] = useState("");
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [judges, setJudges] = useState<Judge[]>([]);

  const handleAddCompetition = (comp: Competition) => {
    setCompetitions([...competitions, comp]);
  };

  const handleAddJudge = (judge: Judge) => {
    setJudges([...judges, judge]);
  };

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Sidebar onSelect={setSelected} />
        <div className="content-area">
          {!selected && <p>Select an option from the sidebar.</p>}
          {selected === "add" && (
            <CompetitionForm onSubmitCompetition={handleAddCompetition} />
          )}
          {selected === "create" && (
            <CreateJudgeForm onSubmitJudge={handleAddJudge} />
          )}
          {selected === "view" && (
            <ViewCompetitions competitions={competitions} />
          )}
          {selected === "viewJudges" && <ViewJudges judges={judges} />}
          {selected === "stats" && <p>Statistics coming soon...</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
