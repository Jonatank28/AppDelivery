import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardHorizontalFood from './food';

export interface FoodTypes {
  id: string
  name: string
  price: number
  time: string
  delivery: number
  rating: number
  image: string
  restaurantId: string
}

const Trending = () => {
  const [foods, setFoods] = useState<FoodTypes[]>([]);

  const getFoods = async () => {
    const response = await fetch('http://192.168.68.104:3000/foods');
    const data = await response.json();
    setFoods(data);
  }

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={(row) => <CardHorizontalFood food={row.item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};


export default Trending;