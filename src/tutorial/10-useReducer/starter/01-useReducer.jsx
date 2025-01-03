import { useReducer } from "react";
import { data } from "../../../data";
import { actions, reducer } from "./actions";

const initialState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resetItem = () => {
    dispatch({ type: actions.RESET });
  };

  const removeItem = (id) => {
    dispatch({
      type: actions.REMOVE_ITEM,
      payload: {
        id,
      },
    });
  };

  const handleClearItems = () => {
    dispatch({ type: actions.CLEAR_ALL });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length == 0 ? (
        <>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={resetItem}
          >
            reset
          </button>
        </>
      ) : (
        <>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={handleClearItems}
          >
            clear items
          </button>
          <br />
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={resetItem}
          >
            reset
          </button>
        </>
      )}
    </div>
  );
};

export default ReducerBasics;
