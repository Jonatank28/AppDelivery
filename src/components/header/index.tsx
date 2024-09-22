import { Feather, Ionicons } from '@expo/vector-icons';
import { View, Pressable, Text } from 'react-native';

const Header = () => {
  return (
    <View className='w-full flex flex-row items-center justify-between'>
      <Pressable className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
        <Ionicons name="menu-outline" size={24} color="#121212" />
      </Pressable>

      <View className='flex flex-col items-center'>
        <Text className='text-center text-sm text-slate-700'>Localização</Text>
        <View className='flex flex-row items-center gap-1'>
          <Feather name="map-pin" size={14} color="#ff0000" />
          <Text className='text-lg font-bold'>Chapecó</Text>
        </View>
      </View>

      <Pressable className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
        <Feather name="bell" size={24} color="#121212" />
      </Pressable>
    </View>
  );
};


export default Header;