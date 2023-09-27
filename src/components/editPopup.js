import { Button, Input, Modal } from "antd";
import {
  CancelButton,
  EditInputContainer,
  EditLabel,
  EditPopupContainer,
  EditPopupImage,
  EditPopupImageContainer,
  EditPopupPriceContainer,
  EditPopupPriceInnerContainer,
  IncrementDecrementButton,
  SendButton,
  ReasonMainContainer,
  ReasonHeading,
  ReasonsContainer,
  ReasonLabel,
} from "../styles/orderDetailStyles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductDetails } from "../features/products/productSlice";

function EditPopup({ product, showEditModal, isEditModalOpen }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const reasons = [
    {
      id: 1,
      label: "Missing product",
    },
    {
      id: 2,
      label: "Quantity is not the same",
    },
    {
      id: 3,
      label: "Price is not the same",
    },
    {
      id: 4,
      label: "Other",
    },
  ];
  const editDetails = () => {
    const updatedData = {
      id: product.id,
      price,
      quantity,
      total: price * quantity,
      status: "price and quantity updated",
    };
    console.log("updatedData", updatedData);
    dispatch(updateProductDetails(updatedData));
  };
  return (
    <Modal
      open={isEditModalOpen}
      onCancel={() => showEditModal()}
      centered
      title={product?.name}
      footer={[
        <CancelButton key="cancel" onClick={() => showEditModal()}>
          Cancel
        </CancelButton>,
        <SendButton key="send" onClick={() => editDetails()}>
          Send
        </SendButton>,
      ]}
      width={700}
    >
      <p style={{ margin: 0, padding: 0 }}>{product.brand}</p>
      <EditPopupContainer>
        <EditPopupImageContainer>
          <EditPopupImage src={product.image} />
        </EditPopupImageContainer>
        <EditPopupPriceContainer>
          <EditPopupPriceInnerContainer>
            <EditLabel>Price</EditLabel>
            <EditInputContainer>
              <Input
                min={0}
                type="number"
                style={{ width: "100px" }}
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
              <span> &#8725; 6 &#42; 1LB</span>
            </EditInputContainer>
          </EditPopupPriceInnerContainer>
          <EditPopupPriceInnerContainer>
            <EditLabel>Quantity</EditLabel>
            <EditInputContainer>
              <IncrementDecrementButton
                onClick={() => setQuantity(quantity - 1)}
              >
                &#8722;
              </IncrementDecrementButton>
              <Input
                min={0}
                type="number"
                style={{ width: "100px" }}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <IncrementDecrementButton
                onClick={() => setQuantity(quantity + 1)}
              >
                &#43;
              </IncrementDecrementButton>
              <span>&times; 6 &#42; 1LB</span>
            </EditInputContainer>
          </EditPopupPriceInnerContainer>
          <EditPopupPriceInnerContainer>
            <EditLabel>Total</EditLabel>
            <EditInputContainer>{price * quantity}</EditInputContainer>
          </EditPopupPriceInnerContainer>
        </EditPopupPriceContainer>
      </EditPopupContainer>
      <ReasonMainContainer>
        <ReasonHeading>Choose reason {`(Optional)`}</ReasonHeading>
        <ReasonsContainer>
          {reasons?.map((reason) => {
            return <ReasonLabel key={reason.id}>{reason.label}</ReasonLabel>;
          })}
        </ReasonsContainer>
      </ReasonMainContainer>
    </Modal>
  );
}

export default EditPopup;
