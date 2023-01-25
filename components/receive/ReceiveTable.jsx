import { useEffect, useState } from "react";
import {
  PlusCircleIcon,
  PencilSquareIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { InputSearch } from "..";
import faker from "faker";
import Link from "next/link";

const ReceiveTable = () => {
  const [reload, setReload] = useState(false);
  const [data, setData] = useState([]);

  const FetchData = () => {
    setData([]);
    let doc = [];
    const whs = ["COM", "DOM", "NESC", "ICAM", "SUPP.", "WIRE"];
    for (let i = 0; i < 20; i++) {
      let fac = whs[faker.random.number({ min: 0, max: whs.length - 1 })];
      let pref = "TI2";
      let txtClass = "text-blue-600";
      if (fac === "DOM") {
        pref = "TI1";
        txtClass = "text-rose-700";
      } else if (fac === "NESC") {
        pref = "TI3";
        txtClass = "text-green-600";
      } else if (fac === "ICAM") {
        pref = "IV";
        txtClass = "text-violet-600";
      } else if (fac === "SUPP.") {
        pref = "SC";
        txtClass = "text-cyan-600";
      } else if (fac === "WIRE") {
        pref = "TW";
        txtClass = "text-pink-600";
      }

      let d = new Date();
      let recNo = `${pref}${d.getFullYear().toString().slice(2, 4)}${(
        "0" +
        (d.getMonth() + 1)
      ).slice(-2)}${("0" + d.getDate()).slice(-2)}${(
        "0" + faker.random.number({ min: 1, max: 12 })
      ).slice(-2)}`;
      let qty = faker.random.number({ min: 1000, max: 100000 });
      let ctn = faker.random.number({ min: 1, max: 1000 });
      let rec = faker.random.number({ min: 0, max: 1000 });
      let dff = rec - ctn;
      doc.push({
        id: i + 1,
        class: txtClass,
        fac: fac,
        date: new Date().toISOString().slice(0, 10),
        rec_no: recNo,
        qty: qty,
        ctn: ctn,
        rec: rec,
        diff: dff,
        last_updated: new Date().toISOString(),
      });
    }
    setData([...doc]);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          <InputSearch />
          <div className="flex items-center pr-4 space-x-2">
            <div className="relative">
              <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                  </>
                  <div className="hidden sm:block">Filters</div>
                </span>
              </button>
            </div>
            <div className="relative">
              <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1" onClick={FetchData}>
                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </>
                  <div className="hidden sm:block">Reload</div>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Fac.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Receive No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Plan Qty
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Ctn
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Rec.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Diff.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-gray-500 uppercase "
                  >
                    Last Update
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    <button type="button" className="btn btn-ghost">
                      <PlusCircleIcon className="w-5 h-5" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.length > 0 ? (
                  data.map((i, x) => (
                    <tr key={x}>
                      <td className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <span className={i.class}>{i.fac}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <Link href={`/receive/detail?rec_id=${i.id}`}>
                          <span className="hover:text-pink-700">
                            {i.rec_no}
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <span className={`text-orange-700`}>
                          {i.qty.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.ctn.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <span
                          className={
                            i.rec < 0 ? `text-orange-600` : `text-blue-600`
                          }
                        >
                          {i.rec.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <span
                          className={
                            i.diff < 0 ? `text-rose-600` : `text-green-600`
                          }
                        >
                          {i.diff.toLocaleString()}
                        </span>
                      </td>
                      <td className="justify-end px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.last_updated}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <div className="flex justify-center space-x-4">
                          <PencilSquareIcon className="w-4 h-4 text-blue-600 hover:cursor-pointer" />
                          <XCircleIcon className="w-4 h-4 text-red-700 hover:cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveTable;
