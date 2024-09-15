import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { getIconByFeature } from '~/_utils/getIconByFeature';
import { truncateText } from '~/_utils/truncateText';
import { upperFirst } from 'lodash';

interface CardProps {
  rating: number;
  ratingCount: number;
  category: string;
  city: string;
  desc: string;
  id: string;
  images: string[];
  name: string;
  priceRange: string;
  featured: {
    text: string;
    icon: string;
  };
  isFavorite: boolean;
  onFavoriteClick: (id: string) => void;
}

const PRICE_UNIT = '원의'; // won

export const FoodCard = (props: CardProps) => {
  const {
    images,
    name,
    featured,
    rating,
    ratingCount,
    desc,
    city,
    category,
    priceRange,
    isFavorite,
    onFavoriteClick,
    id,
  } = props;

  return (
    <div className="text-slate-900">
      <div className="relative my-1">
        <img
          src={images[0]}
          alt={name}
          className="rounded-xl w-full object-cover h-48"
        />
        <div
          onClick={() => onFavoriteClick(id)}
          className="absolute top-2 right-2 h-10 w-10 rounded-full backdrop-blur-md flex items-center justify-center"
        >
          {isFavorite ? (
            <FaHeart className="text-white h-5 w-5" />
          ) : (
            <FaRegHeart className="text-white h-5 w-5" />
          )}
        </div>
      </div>
      <div className="flex text-orange-500 mt-2 my-2">
        {getIconByFeature(featured.icon, ' h-5 w-5 mr-1')}
        <p>{featured.text}</p>
      </div>
      <div className="flex justify-between my-1">
        <p className="font-semibold  text-lg">{truncateText(name, 17)}</p>
        <div className="flex items-center">
          <FaStar className="text-orange-300 h-4 w-4 ml-1 mr-1" />
          <p>
            {rating ?? '-'}({ratingCount ?? 0})
          </p>
        </div>
      </div>
      <div className="my-1">
        <p>{truncateText(desc, 25)}</p>
      </div>
      <div className="flex text-lg">
        <p className="mr-1">{upperFirst(city)} ·</p>
        <p className="mr-1">{upperFirst(category.toLowerCase())} ·</p>
        <p>
          {priceRange}
          {PRICE_UNIT}
        </p>
      </div>
    </div>
  );
};
