import { useRouter } from "next/router";
import { MainLayOut, ReceiveDetailTable } from "@/components";

const ReceiveAddPage = () => {
  const router = useRouter();
  return (
    <>
      <MainLayOut
        brand="เพิ่มรายการรับสินค้า"
        title="เพิ่มรายการรับสินค้า"
        description="จัดการข้อมูลรายการรับสินค้า"
      >
        <>
          <div className="grid">
            <div className="grid grid-flow-col grid-rows-2 gap-2">
              <div className="grid grid-flow-col gap-2">
                <div className="form-control">
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="0.01"
                      className="input input-bordered"
                    />
                    <span>BTC</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter amount</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="0.01"
                      className="input input-bordered"
                    />
                    <span>BTC</span>
                  </label>
                </div>
              </div>
              <div>Group 2</div>
            </div>
            <div className="divider" />
            <div>
              <ReceiveDetailTable />
            </div>
          </div>
        </>
      </MainLayOut>
    </>
  );
};

export default ReceiveAddPage;
