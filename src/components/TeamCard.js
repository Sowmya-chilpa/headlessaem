import "./TeamCard.css";
import MemberCard from "./MemberCard";

const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <div className="team-header">
        <h2>{team.title}</h2>
        <span className="team-code">{team.code}</span>
      </div>

      <p className="team-description">
        {team.descriptiom?.plaintext}
      </p>

      <h3 className="members-title">&#9632; Team Members</h3>

      <div className="members-container">
        {team.members?.map((m, i) => (
          <MemberCard key={i} member={m} />
        ))}
      </div>
    </div>
  );
};

export default TeamCard;