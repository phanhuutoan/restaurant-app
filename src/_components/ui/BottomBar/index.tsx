import classNames from 'classnames';
import { Item } from './Item';
import { RiHome6Line, RiSearchLine } from 'react-icons/ri';
import { PiChatText } from 'react-icons/pi';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';

const BottomBar = () => {
  const itemClassName = classNames('h-6', 'w-6', 'text-inherit');

  const listItems = [
    {
      icon: <RiHome6Line className={itemClassName} />,
      title: '홈',
    },
    {
      icon: <RiSearchLine className={itemClassName} />,
      title: '검색',
      isActive: true,
    },
    {
      icon: <PiChatText className={itemClassName} />,
      title: '피드',
    },
    {
      icon: <IoCalendarClearOutline className={itemClassName} />,
      title: '내 예약',
    },
    {
      icon: <IoMdMenu className={itemClassName} />,
      title: '메뉴',
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
