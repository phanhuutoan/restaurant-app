import { CategoryRail } from '~/_components/ui/Category/CategoryRail';
import { SearchBox } from '~/_components/ui/SearchBox.tsx';
import { FoodCard } from '~/_components/ui/FoodCard';
import { trpc } from '~/utils/trpc';
import { useCallback, useMemo, useState } from 'react';
import { STORE_CATEGORY } from '~/constants/category';
import { SpinLoading } from '~/_components/ui/SpinLoading';

const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState<STORE_CATEGORY>(
    STORE_CATEGORY.SUSHI,
  );

  const restaurantsRes = trpc.restaurant.getRestaurants.useQuery({
    category: currentCategory,
  });

  const favoriteClick = trpc.restaurant.addFavorite.useMutation();
  const onFavoriteClick = useCallback(
    async (id: string) => {
      await favoriteClick.mutateAsync({ id });
      await restaurantsRes.refetch();
    },
    [favoriteClick, restaurantsRes],
  );

  const restaurantListRenderer = useMemo(() => {
    if (restaurantsRes.isLoading) {
      return (
        <div className="text-lg text-slate-800 flex items-center">
          <SpinLoading classNames="mr-4" />
          <p>로딩 중...</p>
        </div>
      );
    } else {
      if (restaurantsRes.data && restaurantsRes.data.length > 0) {
        return restaurantsRes.data.map((restaurant) => (
          <div key={restaurant.id} className="mb-7">
            <FoodCard
              onFavoriteClick={onFavoriteClick}
              featured={{
                text: restaurant.featuredText,
                icon: restaurant.featuredIcon,
              }}
              {...restaurant}
            />
          </div>
        ));
      } else {
        return (
          <div className="text-xl text-slate-800 font-semibold">
            데이터를 찾을 수 없습니다!
          </div>
        );
      }
    }
  }, [onFavoriteClick, restaurantsRes.data, restaurantsRes.isLoading]);

  return (
    <div className="mt-8 pb-16">
      <section id="search">
        <SearchBox />
      </section>
      <section id="rail" className="my-6">
        <CategoryRail
          onChangeCategory={(category) => {
            setCurrentCategory(category as STORE_CATEGORY);
          }}
          currentCategory={currentCategory}
        />
      </section>
      <section id="list">{restaurantListRenderer}</section>
    </div>
  );
};

export default HomePage;
