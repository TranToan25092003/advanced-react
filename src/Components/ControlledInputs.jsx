import React, { useState } from "react";
import { data } from "../data";
import { v4 as uuidv4 } from "uuid";
export function ControlledInputs({}) {
  const frameworks = ["react", "angular", "vue", "svelte"];

  const [shipping, setShipping] = useState(false);

  const [framework, setFramework] = useState("react");

  const handleSubmit = () => {};

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        {/* shipping */}
        <div className="form-row">
          <label htmlFor="shipping">Free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>

        {/* frameworks */}

        <div className="form-row">
          <label htmlFor="framework" className="form-label">
            Frameworks
          </label>
          <select name="framework" id="framework" onChange={handleFramework}>
            {frameworks.map((frame) => {
              return (
                <>
                  <option key={uuidv4()} value={frame}>
                    {frame}
                  </option>
                </>
              );
            })}
          </select>
        </div>
      </form>
    </>
  );
}
