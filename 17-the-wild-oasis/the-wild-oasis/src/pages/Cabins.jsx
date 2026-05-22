import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

function Cabins({ showForm: IsShowModal, onShowForm: onHideModal }) {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
      {/* {IsShowModal && (
        <Modal onClose={() => onHideModal((a) => !a)}>
          <CreateCabinForm onCloseModal={() => onHideModal((a) => !a)} />
        </Modal>
      )} */}

      {/* Create a compound component for the Modal */}

      <div>
        <Modal>
          <Modal.Open opens="cabin-form">
            <Button>Add New Cabin</Button>
          </Modal.Open>
          <Modal.Window name="cabin-form">
            <CreateCabinForm onCloseModal={() => onHideModal((a) => !a)} />
          </Modal.Window>

          {/* <Modal.Open opens="table">
            <Button>Show Table</Button>
          </Modal.Open>
          <Modal.Window name="table">
            <CabinTable />
          </Modal.Window> */}
        </Modal>
      </div>
    </>
  );
}

export default Cabins;
