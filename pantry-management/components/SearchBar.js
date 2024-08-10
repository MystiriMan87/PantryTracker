// components/SearchBar.js
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search items..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
    />
  );
};

export default SearchBar;
