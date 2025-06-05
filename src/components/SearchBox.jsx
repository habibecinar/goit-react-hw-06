//arama filtresi (addContact dispatch eder)
function SearchBox({ value, onChange }) {
  return (<div>
    <label htmlFor="search">Find contacts by name</label>
    <input
      id="search"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    placeholder="Search contacts"/>
  </div>
);
}

export default SearchBox;
