import classNames from 'classnames';

interface CategoryItemProps {
  name: string;
  onClick: (categoryId: string) => void;
  id: string;
  isActive?: boolean;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { name, onClick, isActive, id } = props;
  const itemClassNames = classNames(
    ['px-3', 'py-2', 'font-semibold', 'text-slate-500', 'rounded-md'],
    {
      'bg-slate-100': isActive,
      'text-slate-900': isActive,
    },
  );

  return (
    <button
      onClick={() => {
        onClick(id);
      }}
      className={itemClassNames}
    >
      {name}
    </button>
  );
};
