import { ScrollView, View } from 'react-native';
import Header from '../components/header';
import Constants from 'expo-constants';
import Baner from '../components/banner';
import Search from '../components/search';
import Section from '../components/section';
import Trending from '../components/trending';
import Restaurants from '../components/restaurants';
import List from '../components/list';

const statusBarHeight = Constants.statusBarHeight;

const Page = () => {
  return (
    <ScrollView className='flex flex-1 bg-slate-200' showsVerticalScrollIndicator={false}>
      <View className='w-full px-4' style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Baner />
        <Search />
      </View>
      <Section
        name='Comidas em alta'
        label='Veja mais'
        action={() => console.log('cicou no comidas em alta')}
        size='text-2xl'
      />
      <Trending />
      <Section
        name='Famosos no DevFoods'
        label='Veja todos'
        action={() => console.log('cicou no famosos no DevFoods')}
        size='text-xl'
      />
      <Restaurants />
      <Section
        name='Restaurantes'
        label='Veja todos'
        action={() => console.log('cicou no restaurantes')}
        size='text-xl'
      />
      <List />

    </ScrollView>
  );
};


export default Page;