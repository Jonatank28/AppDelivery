import { View, Pressable, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const Baner = () => {
  return (
    <View className='w-full h-36 md:60 rounded-2xl mt-5 mb-4'>
      <PagerView className='flex flex-1' initialPage={0} pageMargin={14}>
        <Pressable
          className='w-full h-36 md:60 rounded-2xl' key='1'
          onPress={() => console.log('clicou no banner 1')}
        >
          <Image source={require("../../assets/images/banner1.jpg")} className='w-full h-36 rounded-2xl' />
        </Pressable>
        <Pressable
          className='w-full h-36 md:60 rounded-2xl' key='2'
          onPress={() => console.log('clicou no banner 2')}
        >
          <Image source={require("../../assets/images/banner2.jpg")} className='w-full h-36 rounded-2xl' />
        </Pressable>
        <Pressable
          className='w-full h-36 md:60 rounded-2xl' key='3'
          onPress={() => console.log('clicou no banner 3')}
        >
          <Image source={require("../../assets/images/banner3.jpg")} className='w-full h-36 rounded-2xl' />
        </Pressable>
      </PagerView >
    </View >
  );
};


export default Baner;