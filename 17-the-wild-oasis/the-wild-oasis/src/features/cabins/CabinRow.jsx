import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "../cabins/CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateEditCabin from "./useCreate/useCreateEditCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [renderForm, setRenderForm] = useState(false);
  const { isLoading, deleteCabin } = useDeleteCabin();
  const { isAdding, createCabin } = useCreateEditCabin();

  const {
    id: cabins,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  /* const handleDuplicate = function () {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }; */

  return (
    <>
      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Max geusts ({maxCapacity})</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          {" "}
          {/* <button
            onClick={handleDuplicate}
            disabled={isLoading}
            title="Duplicate"
          >
            <HiSquare2Stack />
          </button> */}
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabins} />
              <Menus.List id={cabins}>
                <Modal.Open opens="edit">
                  <button disabled={isLoading} title="Edit">
                    <Menus.Button>
                      <HiPencil /> Edit
                    </Menus.Button>
                  </button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <button disabled={isLoading} title="Remove">
                    <Menus.Button>
                      <HiTrash /> Delete
                    </Menus.Button>
                  </button>
                </Modal.Open>
              </Menus.List>
            </Menus.Menu>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isLoading}
                onConfirm={() => deleteCabin(cabins)}
              />
            </Modal.Window>
          </Modal>
          {/* <Menus.Menu>
            <Menus.Toggle id={cabins} />
            <Menus.List id={cabins}>
              <Menus.Button>
                <HiPencil /> Edit
              </Menus.Button>
              <Menus.Button>
                <HiTrash /> Delete
              </Menus.Button>
            </Menus.List>
          </Menus.Menu> */}
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
