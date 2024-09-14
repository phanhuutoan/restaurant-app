import { CategoryRail } from '~/_components/ui/Category/CategoryRail';
import { SearchBox } from '~/_components/ui/SearchBox.tsx';
import { FoodCard } from '~/_components/ui/FoodCard';
import { restaurantData } from '~/_mocks/clientData';
import BottomBar from '~/_components/ui/BottomBar';

const HomePage = () => {
  return (
    <div className="mt-8 pb-24">
      <section id="search">
        <SearchBox />
      </section>
      <section id="rail" className="my-6">
        <CategoryRail />
      </section>
      <section id="list">
        {restaurantData.map((restaurant) => (
          <div key={restaurant.id} className="mb-7">
            <FoodCard {...restaurant} />
          </div>
        ))}
      </section>
      <BottomBar />
    </div>
  );
};

export default HomePage;
