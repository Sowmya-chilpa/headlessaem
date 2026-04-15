import "./MemberCard.css";

const MemberCard = ({ member }) => {
  const initials = member.name
    ? member.name.charAt(0).toUpperCase()
    : "?";

  return (
    <div className="member-card">
      <div className="member-img-wrapper">
        <div className="avatar-ring">
          <div className="avatar-inner">
            {member.profilePicture?._path ? (
              <img
                src={`http://localhost:4502${member.profilePicture._path}`}
                alt={member.name}
                className="member-img"
              />
            ) : (
              initials
            )}
          </div>
        </div>
      </div>

      <h4>{member.name}</h4>
      <span className="role">{member.role}</span>

      <div className="member-divider" />

      <p className="email">{member.email}</p>
      <p className="bio">{member.biography?.plaintext}</p>
    </div>
  );
};

export default MemberCard;