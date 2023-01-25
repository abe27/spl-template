import { MainLayOut, ReceiveTable } from "@/components";

const ReceiveDetailPage = () => {
  return (
    <>
      <MainLayOut
        brand="แสดงรายการรับสินค้า"
        title="แสดงรายการรับสินค้า"
        description="จัดการข้อมูลรายการรับสินค้า"
      >
        <>
          <ReceiveTable />
        </>
      </MainLayOut>
    </>
  );
};

export default ReceiveDetailPage;
