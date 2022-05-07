import { useState } from "react";

function InputFiltering() {
  const [filter, setFilter] = useState("");

  return (
    <div>
       {/* <input
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      /> */}
    </div>
  );
}

export default InputFiltering;
