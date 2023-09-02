import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

function App() {

    const personName ={
      first:"Sai",
      last:"Shruthi"
    }

    const personNameList = [
      {
        first:"rohit",
        last:"k",
        age:11
      },
      {
        first:"gokul",
        last:"k",
        age:16
      },
      {
        first:"roopa",
        last:"k",
        age:15
      },
      {
        first:"krupa",
        last:"k",
        age:14
      },
    ]

  return (
    <div className="App"> 
        <Greet name="Sethu" isLoggedin={true} />
        <Person name={personName} />
        <PersonList names={personNameList} />
        <Status status = 'success' />
        <Heading>Placeholder Text</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo Di Caprico..</Heading>
        </Oscar>
     </div>
  );
}

export default App;
