import Alunos from "./components/Alunos/Alunos";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {

  return (

    <>
      <Alunos nome={'Ana Lobo'} idade={'17'} ativo={true} />
      <Alunos nome={'Ana'} idade={'18'} />
        <Alunos nome={'Clara'} ativo={true}/>

        <Button texto={'Botao 1'}/>
        <Button texto={'Botao 2'}/>

      <Card imagem ={'https://placehold.co/400'}/>
    </>

  );
};

export default App
