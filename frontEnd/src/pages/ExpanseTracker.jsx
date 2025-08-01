import { useState } from "react";
import ExpanseModal from "../components/ExpanseData/ExpanseModal";
import Expansehistory from "../components/ExpanseData/Expansehistory";
import TransactionAmount from "../components/ExpanseData/TransactionAmount";

const ExpanseTracker = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="px-10 py-5 bg-[#E7ECEF] min-h-screen">
        <h2 className="text-center text-2xl font-bold text-slate-800">
          Expanse Tracker
        </h2>
        <button
          className="px-3 py-2 rounded-lg bg-[#10B981] text-white font-medium my-3"
          onClick={() => setisOpen(true)}
        >
          Add Transaction
        </button>
        {isOpen && <ExpanseModal onClose={() => setisOpen(false)} />}
        <div>
          <TransactionAmount />
          <Expansehistory />
        </div>
      </div>
    </>
  );
};

export default ExpanseTracker;
