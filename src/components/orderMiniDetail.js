import {
  ApproveButton,
  BreadCrumbContainer,
  BreadCrumbText,
  ButtonContainer,
  Container,
  InnerContainer,
  OrderDetailSecondaryContainer,
  OrderNumberText,
  SaveButton,
} from "../styles/orderDetailStyles";

function OrderMiniDetails() {
  return (
    <Container>
      <InnerContainer>
        <BreadCrumbContainer>
          <BreadCrumbText>Orders</BreadCrumbText>
          <BreadCrumbText>&gt;</BreadCrumbText>
          <BreadCrumbText>order 32457ABC</BreadCrumbText>
        </BreadCrumbContainer>

        <OrderDetailSecondaryContainer>
          <OrderNumberText>Order 32457ABC</OrderNumberText>
          <ButtonContainer>
            <SaveButton>Back</SaveButton>
            <ApproveButton>Approve order</ApproveButton>
          </ButtonContainer>
        </OrderDetailSecondaryContainer>
      </InnerContainer>
    </Container>
  );
}

export default OrderMiniDetails;
