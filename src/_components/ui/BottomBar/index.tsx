import classNames from 'classnames';
import { FaHome } from 'react-icons/fa';
import { Item } from './Item';

const BottomBar = () => {
  const itemClassName = classNames('h-6', 'w-6', 'text-inherit');

  const listItems = [
    {
      icon: <FaHome className={itemClassName} />,
      title: 'Home',
    },
    {
      icon: <FaHome className={itemClassName} />,
      title: 'Should',
      isActive: true,
    },
    {
      icon: <FaHome className={itemClassName} />,
      title: 'Home',
    },
    {
      icon: <FaHome className={itemClassName} />,
      title: 'Home',
    },
    {
      icon: <FaHome className={itemClassName} />,
      title: 'Home',
    },
  ];

  return (
    <div className="bg-white flex fixed bottom-0 left-0 justify-between w-full py-3 border-t-2 border-slate-200 px-5">
      {listItems.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};

export default BottomBar;
