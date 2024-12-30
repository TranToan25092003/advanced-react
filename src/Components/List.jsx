import { Info } from "./Info";

import React from "react";
import { people } from "../data";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <>
            <Info key={person.name} person={person} />
          </>
        );
      })}
    </div>
  );
};

export default List;
