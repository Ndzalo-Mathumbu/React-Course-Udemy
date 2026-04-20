import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.UserName);

  return (
    <div className="text-sm font-semibold hidden md:block">{userName}</div>
  );
}

export default UserName;
