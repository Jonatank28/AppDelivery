import { ScrollView, View } from 'react-native';
import Header from '../components/header';
import Constants from 'expo-constants';
import Baner from '../components/banner';
import Search from '../components/search';

const statusBarHeight = Constants.statusBarHeight;

const Page = () => {
  return (
    <ScrollView className='flex flex-1 bg-slate-200' showsVerticalScrollIndicator={false}>
      <View className='w-full px-4' style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Baner />
        <Search />
      </View>
    </ScrollView>
  );
};


export default Page;