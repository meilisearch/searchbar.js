import toFactory from 'to-factory';
import SearchBar from './SearchBar';
import version from './version';

const searchBar = toFactory(SearchBar);
searchBar.version = version;

export default searchBar;
