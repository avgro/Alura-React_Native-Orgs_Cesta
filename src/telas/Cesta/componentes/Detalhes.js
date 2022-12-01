import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Texto from "../../../components/texto";
import Botao from "../../../components/botao";

export default function Detalhes({
  nome,
  logoFazenda,
  farmDescription,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nomeCesta}>{nome}</Texto>

      <View style={estilos.farm}>
        <Image source={logoFazenda} style={estilos.farmLogo} />
        <Texto style={estilos.farmDescription}>{farmDescription}</Texto>
      </View>

      <Texto style={estilos.descricao}>{descricao}</Texto>

      <Texto style={estilos.preco}>{preco}</Texto>

      <Botao texto={botao} style={estilos.botao} onPress={() => {}} />
    </>
  );
}

const estilos = StyleSheet.create({
  nomeCesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  farmLogo: {
    width: 32,
    height: 32,
    borderRadius: 5,
  },
  farmDescription: {
    fontSize: 16,
    lineHeight: 30,
    marginLeft: 10,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    color: "#A3A3A3",
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 10,
  },
});
