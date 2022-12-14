import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slices/filterSlice';
import { Input, Label } from './Filter.styled';



export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <Label>
      Search
      <Input
        type="text"
        name="filter"
        placeholder="Start typing a name"
        onChange={onFilter}
      ></Input>
    </Label>
  );
};
