import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppBar } from "../../components/appBar";
import { styles } from "./styles";
import userProfile from "../../assets/userProfile.png";
import { FontAwesome } from "@expo/vector-icons";

export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />

      <View style={styles.containerUser}>
        <View style={styles.containerUserTop}>
          <Image source={userProfile} />
          <View style={styles.containerUserData}>
            <Text style={styles.nameUser}>Rian Landim</Text>
            <View style={styles.data}>
              <Text style={styles.dataItem}>Masculino | </Text>
              <Text style={styles.dataItem}> 1,68 | </Text>
              <Text style={styles.dataItem}> 21</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Dados Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Opções de Notificações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Vincular Alexa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.signOutButton}>
        <FontAwesome name="sign-out" size={30} color={"#fff"} />
        <Text style={styles.signOutButtonText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
