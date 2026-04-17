import CreateUser from '../Features/User/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 sm:my-16 text-center ">
      <h1 className="font-sans text-xl font-medium mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-orange-400">
          {' '}
          Straight out of the oven, straight to you
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
