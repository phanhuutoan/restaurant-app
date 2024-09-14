import { BsStars } from 'react-icons/bs';

const ICONS = (className: string) => ({
  ['stars-02']: <BsStars className={className} />,
});

export const getIconByFeature = (icon: string, className: string) => {
  return ICONS(className)[icon as keyof typeof ICONS] || null;
};
