import { Text, Image, Pressable, View } from 'react-native';
import { ListTypes } from '..';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({ restaurant }: { restaurant: ListTypes }) => {
  return (
    <Pressable
      className={`flex flex-row items-center justify-start gap-2 ${restaurant.id.toString().length > 0 ? 'mb-3' : ''}`}
      onPress={() => console.log(`Clicou no ${restaurant.name}`)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className='w-20 h-20 rounded-full'
      />
      <View className='flex gap-2'>
        <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>{restaurant.name}</Text>
        <View className='flex flex-row items-center'>
          <Ionicons name='star' size={14} color='#ca8a04' />
          <Text className='text-sm pl-1'>4.5</Text>
        </View>
      </View>
    </Pressable>
  );
};


export default ListItem;