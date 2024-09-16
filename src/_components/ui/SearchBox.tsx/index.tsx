import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface PropsTypes {
  onSearch?: (value: string) => void;
}

export const SearchBox = (props: PropsTypes) => {
  const { onSearch } = props;
  const [search, setSearch] = useState('');

  const searchHandler = (e: any) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search);
    }
  };
  return (
    <div className="flex flex-row px-4 py-2 shadow-md rounded-md text-slate-400 items-center bg-slate-100">
      <div className="mr-2">
        <IoSearchOutline color="inherit" className="h-6 w-6" />
      </div>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="맛집 이름을 검색해보세요"
          className="w-full bg-transparent focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
