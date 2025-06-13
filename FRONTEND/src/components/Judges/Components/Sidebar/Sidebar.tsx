import styles from "./Sidebar.module.css";

type SidebarProps = {
  setActiveTab: (tab: "view" | "stats") => void;
};

const Sidebar = ({ setActiveTab }: SidebarProps) => (
  <aside className={styles.sidebar}>
    <button onClick={() => setActiveTab("view")}>View Competitions</button>
    <button onClick={() => setActiveTab("stats")}>Statistics</button>
  </aside>
);

export default Sidebar;
