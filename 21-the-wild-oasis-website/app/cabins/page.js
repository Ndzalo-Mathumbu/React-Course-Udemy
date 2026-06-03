import Counter from "../Components/counter";

const Page = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>this is cabin page</h1>
      <ul>
        {data.map((a) => (
          <>
            <li key={a.id}>{a.name}</li>
            ffff
            <Counter userNames={data} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Page;
