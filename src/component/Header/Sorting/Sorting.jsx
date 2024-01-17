/* eslint-disable react/prop-types */

const Sorting = ({ sortingOptions }) => {
  return (
    <select
      className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
      name="sortBy"
      id="sortBy"
    >
      <option value="">Sort</option>
      {sortingOptions?.map((option) => (
        <option key={option} value="name_asc">
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
