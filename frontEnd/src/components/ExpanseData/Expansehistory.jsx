import { useGlobalExpanse } from "../../context/ExpanseContext";

const Expansehistory = () => {
  const { incomeTx, expanseTx } = useGlobalExpanse();
  return (
    <>
      <section className="grid lg:grid-cols-2 lg:justify-between  gap-10 py-10">
        <div className="text-center">
          <h2 className="text-xl font-medium my-2">Income Transactions</h2>
          {incomeTx && incomeTx.length > 0 ? (
            <table className="border border-slate-500 w-full ">
              <thead className="bg-[#10B981] [&>tr>th]:py-2">
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Deposited on</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:py-2 [&>tr>td]:border [&>tr>td]:border-slate-500">
                {incomeTx.map((tx) => (
                  <tr key={tx._id}>
                    <td>{tx.description}</td>
                    <td>{tx.amount}</td>
                    <td>{tx.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-red-800">
              No transactions to display
            </p>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-medium my-2">Expanse Transactions</h2>
          {expanseTx && expanseTx.length > 0 ? (
            <table className="border border-slate-500 w-full ">
              <thead className="bg-[#EF4444] [&>tr>th]:py-2">
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Deposited on</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:py-2 [&>tr>td]:border [&>tr>td]:border-slate-500">
                {expanseTx.map((tx) => (
                  <tr key={tx._id}>
                    <td>{tx.description}</td>
                    <td>{tx.amount}</td>
                    <td>{tx.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-red-800">
              No transactions to display
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Expansehistory;
