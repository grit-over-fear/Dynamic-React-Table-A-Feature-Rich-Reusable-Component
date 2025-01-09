export default function ReusableTable({ data }) {
  const cleanedData = Array.isArray(data) ? data : data?.data;
  return (
    <div className="relative w-3/4 max-h-[calc(100vh-200px)] overflow-auto border border-neutral-300">
      <table className=" table-fixed p-8 w-full  ">
        <thead className="text-lg p-8 sticky top-0 bg-neutral-200 border-b border-neutral-300">
          <tr>
            <th className=" py-3">First Name</th>
            <th className=" py-3">Last Name</th>
            <th className=" py-3">Phone</th>
            <th className=" py-3">Email</th>
            <th className=" py-3">Age</th>
            <th className=" py-3">Address</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {cleanedData?.map((user, id) => (
            <tr
              key={id}
              className="odd:bg-neutral-100 border-b border-neutral-300 last:border-none"
            >
              <td className="py-3">{user?.firstName}</td>
              <td className="py-3">{user?.lastName}</td>
              <td className="py-3">{user?.phone}</td>
              <td className="py-3">{user?.email}</td>
              <td className="py-3">{user?.age}</td>
              <td className="py-3">{user?.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
