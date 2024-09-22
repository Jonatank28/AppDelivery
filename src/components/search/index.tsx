import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput } from 'react-native';

const Search = () => {
  return (
    <View className='w-full flex-row items-center border border-slate-500 rounded-full h-14 px-4 bg-transparent'>
      <Feather name="search" size={24} color="#64748b" />
      <TextInput
        placeholder='Procure sua comida...'
        className='ml-2 w-full h-full bg-transparent flex-1'
      />
    </View>
  );
};


export default Search;