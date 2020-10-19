import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen } = createStackNavigator();

import StoreDetails from './pages/StoreDetails';
import StoresMap from './pages/StoreMap';

import SelectMapPosition from './pages/CreateStore/selectMapPosition';
import StoreData from './pages/CreateStore/StoreData';
import Header from './components/Header';

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator  screenOptions={{headerShown:false, cardStyle: {backgroundColor: '#f2f3f5'}}}>
                <Screen name="StoresMap" 
                component={StoresMap} 
                />
                 <Screen name="StoreDetails" 
                component={StoreDetails}
                options={{
                    headerShown:true,
                    header: () => <Header showCancel={false} title="Comércio" />                
                }}
                />
                 <Screen name="SelectMapPosition" 
                component={SelectMapPosition} 
                options={{
                    headerShown:true,
                    header: () => <Header title="Selecione no mapa" />                
                }}
                />
                 <Screen name="StoreData" 
                component={StoreData} 
                options={{
                    headerShown:true,
                    header: () => <Header title="Informe os dados" />                
                }}
                />
            </Navigator>
        </NavigationContainer>
    )
}