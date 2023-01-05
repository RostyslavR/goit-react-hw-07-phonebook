import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { applyFilter } from 'redux/filterSlice';
import { Input, Label } from './FilterStyled.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(applyFilter(e.target.value));

  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        name="filter"
        value={filter}
        autoComplete="off"
        onChange={handleFilter}
        placeholder="Enter something here"
      />
    </Label>
  );
};
