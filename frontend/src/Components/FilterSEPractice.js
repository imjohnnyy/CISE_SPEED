let FilterSEPractice = (props) => {

    const onFilterValueChanged = (event) => {
        props.filterValueSelected(event.target.value);
      };

  return (
    <div>
      <select onChange={onFilterValueChanged}>
        <option value="All">Filter by SE Practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>
    </div>
  );
};

export default FilterSEPractice;