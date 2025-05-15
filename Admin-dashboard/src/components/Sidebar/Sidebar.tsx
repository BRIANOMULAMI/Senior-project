import "./Sidebar.css";

interface SidebarProps {
  onSelect: (value: string) => void;
}

const Sidebar = ({ onSelect }: SidebarProps) => {
  return (
    <div className="sidebar">
      <button onClick={() => onSelect("add")}>Add Competitions</button>
      <button onClick={() => onSelect("create")}>Create Judges</button>
      <button onClick={() => onSelect("view")}>View Competitions</button>
      <button onClick={() => onSelect("viewJudges")}>View Judges</button>{" "}
      {/* NEW */}
      <button onClick={() => onSelect("stats")}>Statistics</button>
    </div>
  );
};

export default Sidebar;
