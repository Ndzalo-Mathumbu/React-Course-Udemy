import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins({ showForm }) {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
        {/* <img src="https://ywucaamsuyzalyxdhjlv.supabase.co/storage/v1/object/public/cabin-img/cabin-001.jpg" /> */}
      </Row>
      <Row>
        <CabinTable />
      </Row>
      {showForm && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
