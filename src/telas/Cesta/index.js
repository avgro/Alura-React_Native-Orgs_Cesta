import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";

import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import Itens from "./componentes/Itens";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <SafeAreaView style={estilos.viewCesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </SafeAreaView>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  viewCesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
});
