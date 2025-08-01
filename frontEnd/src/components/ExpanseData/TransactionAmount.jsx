import Chart from "react-apexcharts";
import { useGlobalExpanse } from "../../context/ExpanseContext";

const TransactionAmount = () => {
  const { totalIncome, totalExpanse } = useGlobalExpanse();

  const options = {
    labels: ["income", "expanse"],
    colors: ["#10B981", "#EF4444"],
  };
  return (
    <>
      <section className="py-10 flex justify-evenly items-center gap-20">
        <div className="text-xl font-medium flex flex-col gap-5">
          <span>
            <h2 className="text-[#10B981] my-1">Total Income</h2>
            <p className="text-slate-800"> &#8377; {totalIncome}</p>
          </span>
          <span className="">
            <h2 className="text-[#EF4444] my-1">Total Expanse</h2>
            <p className="text-slate-800">&#8377; {totalExpanse}</p>
          </span>
        </div>
        <div>
          <Chart
            options={options}
            series={[totalIncome || 100, totalExpanse || 100]}
            type="pie"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </section>
    </>
  );
};

export default TransactionAmount;
