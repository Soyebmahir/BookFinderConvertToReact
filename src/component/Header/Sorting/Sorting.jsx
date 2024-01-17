/* eslint-disable react/prop-types */

import { useState } from "react";

const Sorting = ({ sortingOptions, onSort }) => {
  // const [selectSorting, setSelectSorting] = useState("");
  // console.log({ selectSorting });
  return (
    <select
      className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
      name="sortBy"
      id="sortBy"
      // value={selectSorting}
      onChange={(e) => onSort(e.target.value)}
    >
      <option value="">Sort</option>
      {sortingOptions?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}

      {/* <option value="name_desc">Name (Z-A)</option>
      <option value="year_asc">Publication Year (Oldest)</option>
      <option value="year_desc">Publication Year (Newest)</option> */}
    </select>
  );
};

export default Sorting;
