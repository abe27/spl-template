import { MainLayOut, ReceiveTable } from "@/components";

const ReceivePage = () => {
  return (
    <>
      <MainLayOut
        brand="รายการรับสินค้า"
        title="รายการรับสินค้า"
        description="จัดการข้อมูลรายการรับสินค้า"
      >
        <>
          <ReceiveTable />
        </>
      </MainLayOut>
    </>
  );
};

export default ReceivePage;
