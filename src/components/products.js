import { useSelector, useDispatch } from "react-redux";
import DummyProductData from "../dummyData.json";
import { Fragment, useEffect } from "react";
import {
  listProducts,
  updateProductStatus,
} from "../features/products/productSlice";
import OrderMiniDetails from "./orderMiniDetail";
import OrderMainDetails from "./orderMainDetails";
import {
  ButtonContainer,
  MainContainer,
  ProductStatus,
  ProductsMainContainer,
  SaveButton,
  SearchAndButtonContainer,
  SearchInput,
  SearchInputBox,
} from "../styles/orderDetailStyles";

import { Image, Input, Space, Table, Tag } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  PrinterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import UpdateStatusPopup from "./updateStatusPopup";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [product, setProduct] = useState({});

  const columns = [
    {
      dataIndex: "image",
      key: "image",
      render: (image) => <Image src={image} width={48} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <ProductStatus status={status}>{status}</ProductStatus>
      ),
    },

    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <span onClick={() => handleStatus("approved", record)}>
            <CheckOutlined
              style={{
                color: record.status === "approved" ? "#1ef638" : "gray",
                fontSize: "20px",
              }}
            />
          </span>
          <span onClick={() => handleStatus("rejected", record)}>
            <CloseOutlined
              style={{
                color:
                  record.status === "missing"
                    ? "orange"
                    : record.status === "missing-urgent"
                    ? "red"
                    : "gray",
                fontSize: "20px",
              }}
            />
          </span>
          <span>Edit</span>
        </Space>
      ),
    },
  ];

  const handleStatus = (type, selectedProduct) => {
    console.log(type, selectedProduct, "type, product");
    if (type === "rejected") {
      setProduct(selectedProduct);
      showModal();
    } else if (
      type === "approved" ||
      type === "missing" ||
      type === "missing-urgent"
    ) {
      dispatch(updateProductStatus({ id: selectedProduct?.id, type }));
      if (type === "missing" || type === "missing-urgent") {
        showModal();
      }
    }
  };

  useEffect(() => {
    dispatch(listProducts(DummyProductData));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <OrderMiniDetails />
      <OrderMainDetails />
      <MainContainer>
        <ProductsMainContainer>
          <SearchAndButtonContainer>
            <SearchInputBox>
              <SearchInput
                placeholder="Search"
                suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
              />
            </SearchInputBox>
            <ButtonContainer>
              <SaveButton>Add item</SaveButton>
              <span>
                <PrinterOutlined
                  style={{ color: "rgb(4 137 68)", fontSize: "28px" }}
                />
              </span>
            </ButtonContainer>
          </SearchAndButtonContainer>
          <Table columns={columns} dataSource={products} pagination={false} />
        </ProductsMainContainer>
      </MainContainer>
      {isModalOpen && (
        <UpdateStatusPopup
          product={product}
          showModal={showModal}
          isModalOpen={isModalOpen}
          onUpdate={(type, product) => handleStatus(type, product)}
        />
      )}
    </div>
  );
}

export default Products;
