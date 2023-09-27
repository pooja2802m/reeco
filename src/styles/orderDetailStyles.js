import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InnerContainer = styled.div`
  background-color: #ffffff;
  padding: 20px 10%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
`;

export const BreadCrumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const BreadCrumbText = styled.span`
  font-size: 14px;
  color: #708090;
`;

export const OrderDetailSecondaryContainer = styled(BreadCrumbContainer)`
  justify-content: space-between;
  margin: 0;
`;

export const OrderNumberText = styled.div`
  font-size: 20px;
  font-family: Arial;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: 600;
`;
export const SaveButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #004d25;
  color: #004d25;
`;

export const ApproveButton = styled(Button)`
  background-color: #004d25;
  border: none;
  color: white;
`;

// main order details

export const MainContainer = styled(Container)`
  padding: 20px 10%;
`;

export const OrderMainSecondaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 20px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  width: 100%;
`;

export const OrderItem = styled.div`
  width: calc(33.33% - 2px);
  padding: 10px;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
  }
`;

export const OrderItemName = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #939393;
`;

export const OrderItemValue = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

// products

export const ProductsMainContainer = styled.div`
  padding: 10px 20px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  width: 100%;
`;

export const SearchAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

export const SearchInputBox = styled.div`
  width: 400px;
`;

export const SearchInput = styled(Input)`
  border-radius: 20px;
`;

export const ProductStatus = styled.span`
  background: ${(props) =>
    props.status === "approved" || props.status === "price and quantity updated"
      ? "green"
      : props.status === "missing"
      ? "orange"
      : props.status === "missing-urgent"
      ? "red"
      : "none"};
  color: ${(props) => (props.status ? "white" : "gray")};
  padding: 10px;
  border: none;
  border-radius: 20px;
  text-transform: capitalize;
`;

//edit popup
export const EditPopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const EditPopupImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditPopupImage = styled.img`
  width: 100px;
`;
export const EditPopupPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const EditPopupPriceInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
`;

export const EditLabel = styled.div`
  width: 30%;
  font-size: 18px;
  color: gray;
`;

export const EditInputContainer = styled.div`
  /* width: 70%; */
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const IncrementDecrementButton = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: #26b716;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const EditPopUpFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CancelButton = styled.button`
  padding: 10px;
  border-radius: 50%;

  background-color: #fff;
  color: #004d25;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;

  background-color: #004d25;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ReasonMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReasonHeading = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-family: Arial;
`;

export const ReasonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ReasonLabel = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  border: 1px solid gray;
  background: transparent;
  color: gray;
  border-radius: 20px;
`;
