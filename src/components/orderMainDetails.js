import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  OrderItem,
  OrderItemName,
  OrderItemValue,
  MainContainer,
  OrderMainSecondaryContainer,
} from "../styles/orderDetailStyles";

function OrderMainDetails() {
  const categoryIcons = Array(8).fill(<ShoppingCartOutlined />);
  return (
    <MainContainer>
      <OrderMainSecondaryContainer>
        <OrderItem>
          <OrderItemName>Supplier</OrderItemName>
          <OrderItemValue>East coast fruits and vegetables</OrderItemValue>
        </OrderItem>
        <OrderItem>
          <OrderItemName>Shipping date</OrderItemName>
          <OrderItemValue>Thu, Feb 10</OrderItemValue>
        </OrderItem>
        <OrderItem>
          <OrderItemName>Total</OrderItemName>
          <OrderItemValue>$15,028.3</OrderItemValue>
        </OrderItem>
        <OrderItem>
          <OrderItemName>Category</OrderItemName>
          <OrderItemValue
            style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
          >
            {categoryIcons}
          </OrderItemValue>
        </OrderItem>
        <OrderItem>
          <OrderItemName>Department</OrderItemName>
          <OrderItemValue>300-444-678</OrderItemValue>
        </OrderItem>
        <OrderItem>
          <OrderItemName>Status</OrderItemName>
          <OrderItemValue>Awaiting your approval</OrderItemValue>
        </OrderItem>
      </OrderMainSecondaryContainer>
    </MainContainer>
  );
}

export default OrderMainDetails;
