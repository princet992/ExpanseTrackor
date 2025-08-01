export const expanseReducer = (state, action) => {
  switch (action.type) {
    case "getData": {
      return {
        ...state,
        expanseTx: action.payload,
      };
    }
    case "updateFormData": {
      const { name, value } = action.payload;
      return {
        ...state,
        formData: { ...state.formData, [name]: value },
      };
    }
    case "clear": {
      return {
        ...state,
        formData: { description: "", amount: "", type: "" },
      };
    }
    default: {
      return state;
    }
  }
};
