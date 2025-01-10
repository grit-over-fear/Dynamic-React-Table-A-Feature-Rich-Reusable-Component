import { Email } from "@/public/utils/icons/EmailIcon";
import { Phone } from "@/public/utils/icons/PhoneIcon";

export default function ReusableTable({ data }) {
  const cleanedData = Array.isArray(data) ? data : data?.data;
  return (
    <div className="relative w-3/4 border border-neutral-400/60 rounded-xl overflow-hidden">
      <table className="flex flex-col w-full text-left ">
        <thead className="text-lg  bg-neutral-200 border-b border-neutral-400/60">
          <tr className="font-semibold text-neutral-800 flex">
            <td className="w-11"></td>
            <th className="px-4  py-3 grow basis-0 w-full">First Name</th>
            <th className="px-4  py-3 grow basis-0 w-full">Last Name</th>
            <th className="px-4  py-3 grow basis-0 w-full">Phone</th>
            <th className="px-4  py-3 grow basis-0 w-full">Email</th>
            <th className="px-4  py-3 grow basis-0 w-full">Age</th>
            <th className="px-4  py-3 grow basis-0 w-full">Address</th>
          </tr>
        </thead>
        <tbody className="max-h-[calc(100vh-250px)] overflow-auto">
          {cleanedData?.map((user, id) => (
            <tr
              key={id}
              className="even:bg-neutral-200/50 border-b border-neutral-400/60 last:border-none flex "
            >
              <td className="w-11"></td>
              <td className="px-4 py-3 text-lg text-neutral-700 font-medium grow basis-0 w-full">
                {user?.firstName}
              </td>
              <td className="px-4 py-3 text-lg text-neutral-700 font-medium grow basis-0 w-full">
                {user?.lastName}
              </td>
              <td className="px-4 py-3 grow basis-0 w-full">
                <p className="px-2 py-0.5 rounded-full w-fit border border-green-600 bg-green-50 text-green-600 flex gap-1 items-center *:size-4">
                  {Phone}

                  {user?.phone}
                </p>
              </td>
              <td className="px-4 py-3 grow basis-0 w-full">
                <p className="px-2 py-0.5 rounded-full w-fit border border-blue-600 bg-blue-50 text-blue-600 flex gap-1 items-center *:size-4">
                  {Email}
                  {user?.email}
                </p>
              </td>
              <td className="px-4 py-3 text-lg text-neutral-700 font-medium grow basis-0 w-full">
                {user?.age}
              </td>
              <td className="px-4 py-3 text-lg text-neutral-700 font-medium grow basis-0 w-full">
                {user?.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
