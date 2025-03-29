type userCardProps = {
  user: {
    name: string;
    age: number;
  };
  isOnline?: boolean; // to say its optional
};

const UserCard: React.FC<userCardProps> = ({ user, isOnline }) => {
  return (
    <div>
      <h2>
        {user.name} ({user.age})
      </h2>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default UserCard;
