import { STORE_CATEGORY, textByStoreCategory } from '~/constants/category';
import { CategoryItem } from './CategoryItem';

interface CategoryRailProps {
  currentCategory: STORE_CATEGORY;
  onChangeCategory: (categoryId: string) => void;
}

export const CategoryRail = ({
  currentCategory,
  onChangeCategory,
}: CategoryRailProps) => {
  const listCategory = Object.entries(textByStoreCategory).map(
    ([key, value]) => {
      return (
        <div key={key} className="mr-1 shrink-0">
          <CategoryItem
            name={value}
            id={key}
            isActive={key === currentCategory.toString()}
            onClick={onChangeCategory}
          />
        </div>
      );
    },
  );

  return (
    <div className="flex flex-row w-full overflow-auto py-1">
      {listCategory}
    </div>
  );
};
