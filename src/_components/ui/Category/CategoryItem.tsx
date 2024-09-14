import classNames from 'classnames';

interface CategoryItemProps {
  name: string;
  id?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { name, onClick, isActive } = props;
  const itemClassNames = classNames(
    ['px-3', 'py-2', 'font-semibold', 'text-slate-500', 'rounded-md'],
    {
      'bg-slate-100': isActive,
      'text-slate-900': isActive,
    },
  );

  return (
    <button onClick={onClick} className={itemClassNames}>
      {name}
    </button>
  );
};
