import { useReducer, useContext, createContext } from "react";
import axios from "axios";
import { expanseReducer } from "./expanseReducer";
import { useEffect } from "react";

const ExpanseContext = createContext();

const initialVal = {
  formData: { description: "", amount: "", types: "" },
  expanseTx: [],
};

export const ExpanseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expanseReducer, initialVal);

  const getExpanseData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/expanseData");
      dispatch({
        type: "getData",
        payload: res.data,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const setExpanseData = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/expanseData", data);
      if (res.status === 200) {
        await getExpanseData();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateFormData = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "updateFormData",
      payload: { name, value },
    });
  };

  const clearFormData = () => {
    dispatch({ type: "clear" });
  };

  const totalIncome = state.expanseTx
    .filter((tx) => tx.types === "income")
    .reduce((a, b) => a + b.amount, 0);
  const totalExpanse = state.expanseTx
    .filter((tx) => tx.types === "expanse")
    .reduce((a, b) => a + b.amount, 0);

  const incomeTx = state.expanseTx.filter((tx) => tx.types === "income");
  const expanseTx = state.expanseTx.filter((tx) => tx.types === "expanse");

  useEffect(() => {
    getExpanseData();
  }, []);

  return (
    <ExpanseContext.Provider
      value={{
        ...state,
        totalIncome,
        totalExpanse,
        incomeTx,
        expanseTx,
        updateFormData,
        setExpanseData,
        clearFormData,
      }}
    >
      {children}
    </ExpanseContext.Provider>
  );
};

export const useGlobalExpanse = () => {
  return useContext(ExpanseContext);
};
