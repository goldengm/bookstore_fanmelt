import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import {Container, Text} from './Styled'


interface IProps {
  onChange: () => void;
}

const SearchAppBar = ({ onChange }: IProps) => {

  return (
    <Container>
      <div className="icon">
        <SearchIcon />
      </div>
      <Text
        id="standard-name"
        placeholder="Try Abc.... "
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
    </Container>
  );
}

export default SearchAppBar
export { SearchAppBar }