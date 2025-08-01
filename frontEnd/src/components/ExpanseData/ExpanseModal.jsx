import { useGlobalExpanse } from "../../context/ExpanseContext";

const ExpanseModal = ({ onClose }) => {
  const { formData, updateFormData, setExpanseData, clearFormData } =
    useGlobalExpanse();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, amount, types } = formData;
    if (!description.trim() || !amount || !types) {
      alert("Please enter all inputs");
      return;
    }
    setExpanseData(formData);
    onClose();
    clearFormData();
  };

  return (
    <div className=" flex justify-center items-center fixed inset-0 z-50">
      <div className="absolute inset-0 backdrop-blur-md bg-black/30" />
      <form
        className="sm:w-[550px] w-[80vw] shadow bg-white p-3 rounded-lg z-10"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="float-end h-6 w-6 rounded-full bg-[#cad0d6]"
          onClick={onClose}
        >
          x
        </button>
        <div className="grid gap-3 my-3">
          <label className="text-lg font-medium text-slate-800">
            Description
          </label>
          <input
            type="text"
            className="px-3 py-2 rounded bg-green-100 w-full"
            name="description"
            value={formData.description}
            onChange={updateFormData}
          />
        </div>
        <div className="grid gap-3">
          <label className="text-lg font-medium text-slate-800">Amount</label>
          <input
            type="number"
            className="px-3 py-2 rounded bg-green-100 w-full"
            name="amount"
            value={formData.amount}
            onChange={updateFormData}
          />
        </div>
        <div className="my-3">
          <label className="text-lg font-medium text-slate-800">Type:</label>
          <label>
            <input
              type="radio"
              name="types"
              value="income"
              className="px-3 py-2 rounded bg-green-100 mx-2"
              checked={formData.types === "income"}
              onChange={updateFormData}
            />
            Income
          </label>
          <label>
            <input
              type="radio"
              name="types"
              value="expanse"
              className="px-3 py-2 rounded bg-green-100 mx-2"
              checked={formData.types === "expanse"}
              onChange={updateFormData}
            />
            Expanse
          </label>
        </div>
        <div className="text-end">
          <button
            type="button"
            className="px-3 py-2 rounded bg-slate-300 mx-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-3 py-2 rounded bg-slate-300">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpanseModal;
