import { data } from "../../../data";

export const actions = {
  CLEAR_ALL: "CLEAR_ALL",
  RESET: "RESET",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export const reducer = (state, action) => {
  if (action.type == "CLEAR_ALL") {
    return { ...state, people: [] };
  } else if (action.type == actions.RESET) {
    return { ...state, people: data };
  } else if (action.type == actions.REMOVE_ITEM) {
    const newData = state.people.filter((item) => {
      return item.id != action?.payload?.id;
    });

    console.log(newData);

    return { ...state, people: newData };
  }

  return state;
  // throw new Error(`Action is suck: ${action.type}`);
};
