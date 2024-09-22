import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ListItem from './listItem';

export interface ListTypes {
  id: string;
  image: string;
  name: string;
}

const List = () => {
  const [list, setList] = useState<ListTypes[]>([]);

  const getFoods = async () => {
    const response = await fetch('http://192.168.68.104:3000/restaurants');
    const data = await response.json();
    setList(data);
  }

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <View className='px-4 flex flex-col flex-1 mb-11'>
      {list.map((item) => (
        <ListItem key={item.id} restaurant={item} />
      ))}
    </View>
  );
};


export default List;