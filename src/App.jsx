import Cabecalho from "./components/Cabecaho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg";

export default function App(){

  let viteLogoAlt = "Vite Logo";
  
  return(
    <>
      <h1>APP - Componente principal!</h1>
      <div>

        {/*Iniciando a área do cabeçalho */}
        <Cabecalho/>
        
        
        {/*Iniciando a área do conteudo */}
        <Conteudo viteLogoProps={viteLogo} viteLogoAltProps={viteLogoAlt}/>   

        {/*Iniciando a área do rodapé */}
        <Rodape/>
      </div>
    </>
  )
}