import classNames from 'classnames';
import React from 'react';

interface ItemProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

export const Item = ({ icon, title, isActive }: ItemProps) => {
  const itemClassName = classNames(['flex', 'flex-col', 'items-center'], {
    'text-orange-600': isActive,
    'text-slate-500': !isActive,
  });
  return (
    <div className={itemClassName}>
      {icon}
      <p>{title}</p>
    </div>
  );
};
