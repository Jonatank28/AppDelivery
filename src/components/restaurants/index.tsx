import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Restaurant from './restaurant';

export interface RestaurantTypes {
  id: string;
  image: string;
  name: string;
}

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<RestaurantTypes[]>([]);

  const getFoods = async () => {
    const response = await fetch('http://192.168.68.104:3000/restaurants');
    const data = await response.json();
    setRestaurants(data);
  }

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <FlatList
      data={restaurants}
      renderItem={(row) => <Restaurant restaurant={row.item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};


export default Restaurants;