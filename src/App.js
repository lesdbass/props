import './App.css';
import Profile from './Profile/Profile';
function App() {
  const b1="En informatique, un back-end est un terme désignant un étage de sortie d'un logiciel devant produire un résultat. On l'oppose au front-end qui lui est la partie visible de l'iceberg";
  const b2="Le développement web frontal correspond aux productions HTML, CSS et JavaScript d’une page internet ou d’une application qu’un utilisateur peut voir et avec lesquelles il peut interagir directement."
  return (
    

    <div style={{display : "flex"}}>
        <Profile fullName="Bassem Lessoued" bio={b1} profession="Back End Developer" />
        <Profile fullName="Go My Code" bio={b2} profession="Front End Developer" />
    </div>

  );
}

export default App;
