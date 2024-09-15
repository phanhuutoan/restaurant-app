import { CategoryRail } from '~/_components/ui/Category/CategoryRail';
import { SearchBox } from '~/_components/ui/SearchBox.tsx';
import { FoodCard } from '~/_components/ui/FoodCard';
import BottomBar from '~/_components/ui/BottomBar';
import { trpc } from '~/utils/trpc';
import { useMemo, useState } from 'react';
import { STORE_CATEGORY } from '~/constants/category';

const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState<STORE_CATEGORY>(
    STORE_CATEGORY.SUSHI,
  );

  const restaurantsRes = trpc.restaurant.getRestaurants.useQuery({
    category: currentCategory,
  });

  const onFavoriteClick = trpc.restaurant.addFavorite.useMutation();

  const restaurantListRenderer = useMemo(() => {
    if (restaurantsRes.isLoading) {
      return <div className="text-lg text-slate-800">Loading...</div>;
    } else {
      if (restaurantsRes.data && restaurantsRes.data.length > 0) {
        return restaurantsRes.data.map((restaurant) => (
          <div key={restaurant.id} className="mb-7">
            <FoodCard
              onFavoriteClick={async (id) => {
                await onFavoriteClick.mutateAsync({ id });
                restaurantsRes.refetch();
              }}
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
          <div className="text-xl text-slate-800 font-semibold">No data</div>
        );
      }
    }
  }, [onFavoriteClick, restaurantsRes]);

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
      <BottomBar />
    </div>
  );
};

export default HomePage;
