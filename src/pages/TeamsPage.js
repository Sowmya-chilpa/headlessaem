import "./TeamsPage.css";
import { useEffect, useState } from "react";
import { fetchTeams } from "../services/api";
import TeamCard from "../components/TeamCard";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams().then(setTeams);
  }, []);

  return (
    <div className="teams-page">
      <div className="teams-page-header">
        <h1>
           Teams
        </h1>
      </div>

      <div className="teams-list">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;