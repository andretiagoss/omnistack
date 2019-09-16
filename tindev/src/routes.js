import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
    // createDrawerNavigator = navega entre telas com a criação de menu lateral. 
    // createMaterialTopNavigator = navega entre telas com abas no top da tela. 
    // createBottomTabNavigator = navega entre telas com abas no rodapé da tela. 
    // createStackNavigator = navega entre telas com botão Voltar no cabeçalho criado.
    // createSwitchNavigator = navega entre telas sem nenhum tipo de feedback visual.
    createSwitchNavigator({
        Login,
        Main
    })
);