import { useSelector } from 'react-redux';
import CreateUser from '../Features/User/CreateUser';
import Button from './Button';
import { Link } from 'react-router-dom';

function Home() {
  const username = useSelector((state) => state.user.UserName);

  return (
    <>
      <div className="my-10 px-4 sm:my-16 text-center ">
        <h1 className="font-sans text-xl font-medium mb-8 md:text-3xl">
          The best pizza.
          <br />
          <span className="text-orange-400">
            {' '}
            Straight out of the oven, straight to you
          </span>
        </h1>
        {username ? (
          <Button type="primary">
            <Link to="/menu">
              Continue ordering, {username.toUpperCase()}😀
            </Link>
          </Button>
        ) : (
          <CreateUser />
        )}
      </div>
    </>
  );
}

export default Home;
