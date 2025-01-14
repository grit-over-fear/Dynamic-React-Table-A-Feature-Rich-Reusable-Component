import { Check } from "@/public/utils/icons/CheckIcon";
import { Cross } from "@/public/utils/icons/CrossIcon";
import { Delete } from "@/public/utils/icons/DeleteIcon";
import { Edit } from "@/public/utils/icons/EditIcon";
import { Email } from "@/public/utils/icons/EmailIcon";
import { Phone } from "@/public/utils/icons/PhoneIcon";

export default function ReusableTable({ data, columns, heading }) {
  const cleanedData = Array.isArray(data) ? data : data?.data;
  return (
    <div className="2xl:w-3/4 w-full p-6 border border-neutral-200 rounded-lg flex flex-col gap-6 bg-white">
      <h1 className="text-3xl text-neutral-700">{heading}</h1>
      <div className="relative w-full border-neutral-100 rounded-xl overflow-hidden shadow-xl">
        <table className="flex flex-col w-full text-left ">
          <thead className="text-lg  bg-neutral-50 border-b border-neutral-100">
            <tr className="text-base text-neutral-600 flex *:px-4  *:py-3 *:grow *:basis-0 *:w-full">
              <th className="max-w-16"></th>
              {columns?.map((item, idx) => (
                <th key={idx} className={` ${item.columnWidth || ""}`}>
                  {item?.label || ""}
                </th>
              ))}
              <th className="max-w-28"></th>
            </tr>
          </thead>
          <tbody className="max-h-[calc(100vh-250px)] overflow-auto h-full">
            {cleanedData?.map((item, id) => {
              const imageUrls = [
                "https://avatar.iran.liara.run/public/40",
                "https://avatar.iran.liara.run/public/18",
                "https://avatar.iran.liara.run/public/17",
                "https://avatar.iran.liara.run/public/20",
                "https://avatar.iran.liara.run/public/46",
                "https://avatar.iran.liara.run/public/15",
              ];
              const randomImageUrl =
                imageUrls[Math.floor(Math.random() * imageUrls.length)];
              return (
                <tr
                  key={id}
                  className=" border-b border-neutral-100 last:border-none flex *:px-4  *:py-4 *:grow *:basis-0 *:w-full *:text-base justify-center items-center *:h-16"
                >
                  <td className="max-w-16 flex justify-center items-center">
                    {heading === "User Data" ? (
                      <img src={randomImageUrl} className="size-8" />
                    ) : (
                      /* From Uiverse.io by Galahhad */
                      <input type="checkbox" className="ui-checkbox" />
                    )}
                  </td>
                  {columns.map((column) =>
                    ["phone", "email"].includes(column.key) ? (
                      <td>
                        <p
                          className={`px-2 py-0.5 rounded-xl w-fit border  text-sm flex gap-1 items-center *:size-3.5 ${
                            column.key === "phone"
                              ? "border-green-400 bg-green-50 text-green-600"
                              : "border-blue-400 bg-blue-50 text-blue-600"
                          }`}
                        >
                          {column.key === "phone" ? Phone : Email}

                          {item[column.key]}
                        </p>
                      </td>
                    ) : ["inStock"].includes(column.key) ? (
                      <td>
                        <div
                          style={{
                            borderRadius: "50%",
                            boxShadow: item[column.key]
                              ? "0 0 10px rgba(85, 255, 76, 0.6)"
                              : "0 0 10px rgba(255, 76, 76, 0.6)",
                          }}
                          className="w-fit h-fit"
                        >
                          {item[column.key] ? Check : Cross}
                        </div>
                      </td>
                    ) : (
                      <td>{item[column.key]}</td>
                    )
                  )}
                  <td className="max-w-28 flex gap-1">
                    <div
                      title="Not Available"
                      className="cursor-not-allowed size-7 rounded-full  border-neutral-200 shadow-md text-neutral-600 flex justify-center items-center"
                    >
                      {Edit}
                    </div>
                    <div
                      title="Not Available"
                      className="cursor-not-allowed size-7 rounded-full  border-neutral-200 shadow-md text-red-500 flex justify-center items-center"
                    >
                      {Delete}
                    </div>
                  </td>
                  {/* <td className="max-w-16 flex justify-center items-center">
                    <label className="container w-fit m-auto">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label>
                    <img src={randomImageUrl} className="size-8" />
                  </td> */}
                  {/* <td className="text-lg text-neutral-700 font-medium">
                    {user?.firstName}
                  </td> */}
                  {/* <td className="text-lg text-neutral-700 font-medium">
                    {user?.lastName}
                  </td> */}
                  {/* <td>
                    <p className="px-2 py-0.5 rounded-xl w-fit border border-green-400 bg-green-50 text-green-600 text-sm flex gap-1 items-center *:size-3.5">
                      {Phone}

                      {user?.phone}
                    </p>
                  </td> */}
                  {/* <td>
                    <p className="px-2 py-0.5 rounded-xl w-fit border border-blue-400 bg-blue-50 text-blue-600 text-sm flex gap-1 items-center *:size-3.5">
                      {Email}
                      {user?.email}
                    </p>
                  </td> */}
                  {/* <td className="text-lg text-neutral-700 font-medium">
                    {user?.age}
                  </td> */}
                  {/* <td className="text-lg text-neutral-700 font-medium">
                    {user?.address}
                  </td> */}
                  {/* <td className="max-w-28 flex gap-1">
                    <div
                      title="Not Available"
                      className="cursor-not-allowed size-7 rounded-full  border-neutral-200 shadow-md text-neutral-600 flex justify-center items-center"
                    >
                      {Edit}
                    </div>
                    <div
                      title="Not Available"
                      className="cursor-not-allowed size-7 rounded-full  border-neutral-200 shadow-md text-red-500 flex justify-center items-center"
                    >
                      {Delete}
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
