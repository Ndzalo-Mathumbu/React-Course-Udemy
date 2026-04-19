import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Wrong things happened 🔴</h1>
      <p>
        {error.status} | {error.statusText} | {error.data} | {error.message}
      </p>
      <LinkButton onClick={() => navigate(-1)}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
