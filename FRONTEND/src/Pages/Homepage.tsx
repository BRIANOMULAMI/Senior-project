import { Loader2 } from "lucide-react";
import { UseAuthSignOut } from "../Api/Auth";
import { UseAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import TestFetchJudge from "@/components/test";

const Homepage = () => {
  const navigate = useNavigate();
  const { IsAuthnticated, role } = UseAuthContext();
  const { LogoutUser, isLoading } = UseAuthSignOut();

  return (
    <div>
      {IsAuthnticated ? (
        <>
          <h1>Logged In</h1>
          <button onClick={() => LogoutUser()}>
            {isLoading ? <Loader2 className="loader" /> : "Logout"}
          </button>
          {role === "ADMIN" && <TestFetchJudge />}
        </>
      ) : (
        <>
          <h1>Not logged in</h1>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/Register")}>Register</button>
        </>
      )}
    </div>
  );
};

export default Homepage;
