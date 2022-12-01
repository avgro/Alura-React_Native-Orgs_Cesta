import farmLogo from "../../assets/Images/Icons/logo.png";
import tomate from "../../assets/Images/frutas/Tomate.png";
import brocolis from "../../assets/Images/frutas/Brócolis.png";
import batata from "../../assets/Images/frutas/Batata.png";
import pepino from "../../assets/Images/frutas/Pepino.png";
import abobora from "../../assets/Images/frutas/Abóbora.png";

const cesta = {
  topo: {
    titulo: "Detalhes da Cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: farmLogo,
    farmDescription: "Jenny Jack Farm",
    descricao:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da Cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
