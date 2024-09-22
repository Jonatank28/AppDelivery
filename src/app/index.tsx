import { ScrollView, View } from 'react-native';
import Header from '../components/header';
import Baner from '../components/banner';
import Search from '../components/search';
import Section from '../components/section';
import Trending from '../components/trending';
import Restaurants from '../components/restaurants';
import List from '../components/list';
import { StatusBar } from 'expo-status-bar';


const Page = () => {
  return (
    <ScrollView className='flex flex-1 bg-slate-200' showsVerticalScrollIndicator={false}>
      <StatusBar style="auto" backgroundColor='#fff' />
      <View className='w-full px-4 mt-6'>
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