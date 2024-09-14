import { textByStoreCategory } from '~/constants/category';
import { CategoryItem } from './CategoryItem';

export const CategoryRail = () => {
  const listCategory = Object.entries(textByStoreCategory).map(
    ([key, value], index) => {
      return (
        <div key={key} className="mr-1 shrink-0">
          <CategoryItem name={value} isActive={index === 1} />
        </div>
      );
    },
  );

  return (
    <div className="flex flex-row w-full overflow-auto">{listCategory}</div>
  );
};
