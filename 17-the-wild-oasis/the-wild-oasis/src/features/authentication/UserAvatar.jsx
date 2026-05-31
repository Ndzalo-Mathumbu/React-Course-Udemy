import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../ui/ButtonIcon";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const navigate = useNavigate();
  const { user } = useUser();
  /*  const { fullName, avatar } = user.user_metadata; */
  const fullName = user?.user_metadata?.fullName;
  const avatar = user?.user_metadata?.avatar;
  console.log(fullName, avatar, user);
  return (
    <StyledUserAvatar>
      <ButtonIcon onClick={() => navigate("/account")}>
        <Avatar
          src={avatar || "default-user.jpg"}
          alt={`avatar of ${fullName}`}
          title={`avatar of ${fullName}`}
        />
      </ButtonIcon>

      <ButtonIcon onClick={() => navigate("/account")}>
        <span>{fullName}</span>
      </ButtonIcon>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
