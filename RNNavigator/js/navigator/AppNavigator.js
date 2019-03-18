import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";

import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen: WelcomePage,
        navigationOptions:{
            header: null,     //禁用StackNavigator的Navigator
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage,
        navigationOptions:{
            header: null,     //禁用StackNavigator的Navigator
        }
    },
    DetailPage:{
        screen: DetailPage,
        navigationOptions:{
            // header: null,     //禁用StackNavigator的Navigator
        }
    }
});
//导出导航器
export default createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions:{
        header: null,     //禁用StackNavigator的Navigator
    }
})