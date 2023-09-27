import { Button, Modal } from "antd";

function UpdateStatusPopup({ product, showModal, isModalOpen, onUpdate }) {
  console.log("product", product);
  return (
    <Modal
      open={isModalOpen}
      onCancel={() => showModal()}
      centered
      title="Missing Product"
      footer={[
        <Button key="no" onClick={() => onUpdate("missing", product)}>
          No
        </Button>,
        <Button key="yes" onClick={() => onUpdate("missing-urgent", product)}>
          Yes
        </Button>,
      ]}
    >
      <p>{`is '${product?.name}' urgent?`}</p>
    </Modal>
  );
}

export default UpdateStatusPopup;
