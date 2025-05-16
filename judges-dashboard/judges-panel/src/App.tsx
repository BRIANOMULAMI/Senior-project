import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import ViewCompetitions from "./Components/ViewCompetitions/ViewCompetitions";
import Statistics from "./Components/Statistics/Statistics";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const App = () => {
  const [activeTab, setActiveTab] = useState<"view" | "stats">("view");

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar setActiveTab={setActiveTab} />
        <main className="content">
          {activeTab === "view" && <ViewCompetitions />}
          {activeTab === "stats" && <Statistics />}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
