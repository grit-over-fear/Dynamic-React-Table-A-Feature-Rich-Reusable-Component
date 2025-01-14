import {
  productsData,
  productsDataHeader,
  userData,
  userDataHeader,
} from "@/public/utils/JSON/TableData";
import ReusableTable from "./components/ReusableTable";

export default function Home() {
  return (
    <div className="py-16 flex flex-col gap-6 justify-center items-center cursor-default">
      <h1 className="text-center text-4xl text-color">
        Dynamic React Table: A Feature-Rich Reusable Component
      </h1>
      <ReusableTable
        data={userData}
        columns={userDataHeader}
        heading={"User Data"}
      />
      <ReusableTable
        data={productsData}
        columns={productsDataHeader}
        heading={"Products Data"}
      />
    </div>
  );
}
