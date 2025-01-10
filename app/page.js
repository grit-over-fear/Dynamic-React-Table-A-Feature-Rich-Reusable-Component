import ReusableTable from "./components/ReusableTable";

export default function Home() {
  const data = {
    data: Array.from({ length: 32 }, (_, i) => ({
      id: i,
      firstName: `First ${i + 1}`,
      lastName: `Last ${i + 1}`,
      phone: `12345678${(90 + i).toString().padStart(2, "0")}`,
      email: `test${i + 1}@test.com`,
      age: 25 + (i % 10),
      address: `Test Address ${i + 1}`,
    })),
    total: 32,
  };
  return (
    <div className="py-16 flex flex-col gap-6 justify-center items-center cursor-default">
      <h1 className="text-center text-4xl font-serif text-color">
        Dynamic React Table: A Feature-Rich Reusable Component
      </h1>
      <ReusableTable data={data} />
    </div>
  );
}
