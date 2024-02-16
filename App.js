import { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App(){
    return (
    <>
    <StatusBar style='light' />
    <CategoriesScreen />
    </>
    );
}

const styles = StyleSheet.create({
    container: {},
});