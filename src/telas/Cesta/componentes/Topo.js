import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import topo from "../../../../assets/Images/Icons/topo.png";

import Texto from "../../../components/texto";

const width = Dimensions.get("screen").width; // Serve para capturar as dimensões da tela do dispositivo
export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width, //fómula para dimensionar qualquer imagem a qualquer tela de aparelho altura/largura * width
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 30,
    padding: 50,
    color: "white",
    fontWeight: "bold",
  },
});
