import { Text, Pressable, Image, View } from 'react-native';
import { FoodTypes } from '..';
import { Ionicons } from '@expo/vector-icons'

const CardHorizontalFood = ({ food }: { food: FoodTypes }) => {
  return (
    <Pressable className='flex flex-col rounded-xl relative'>
      <Image
        source={{ uri: food.image }}
        className='w-44 h-36 rounded-xl'
      />

      <View className='flex flex-row bg-neutral-900/90 rounded-full items-center absolute top-2 right-2 px-2 py-1'>
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className='text-white text-sm ml-1'>{food.rating}</Text>
      </View>

      <Text className='text-green-700 font-medium text-lg'>R$ {food.price.toFixed(2)}</Text>
      <Text className='text-black mt-1'>{food.name}</Text>
      <Text className='text-neutral-600 text-sm'>{food.time} - R${food.delivery}</Text>
    </Pressable>
  );
};


export default CardHorizontalFood;