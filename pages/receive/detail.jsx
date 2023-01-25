import { useRouter } from "next/router";
import { MainLayOut, ReceiveDetailTable } from "@/components";

const ReceiveDetailPage = () => {
  const router = useRouter();
  const { rec_id } = router.query;
  return (
    <>
      <MainLayOut
        brand="แสดงรายการรับสินค้า"
        title="แสดงรายการรับสินค้า"
        description="จัดการข้อมูลรายการรับสินค้า"
      >
        <>
        {rec_id}
          <ReceiveDetailTable />
        </>
      </MainLayOut>
    </>
  );
};

export default ReceiveDetailPage;
