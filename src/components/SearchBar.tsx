import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './';

export const SearchBar = () => {

  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext)
  
  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
      if(debounceRef.current)
        clearTimeout(debounceRef.current)
      
      debounceRef.current = setTimeout(() => {
        searchPlacesByTerm(event.target.value);
      }, 350)
  }

  return (
    <div className="search-container">
        <input 
            type="text"
            className="form-control input-search"
            placeholder="Buscar lugar..."
            onChange={onQueryChanged}
        />
        <SearchResults />
    </div>
  )
}
