import './App.css';
import Header from './mycomponents/Header';
import {TodoItem} from "./mycomponents/TodoItem";
import {Todos} from "./mycomponents/Todos";
import {Footer} from "./mycomponents/Footer";
function App() {
  let todos= [
    {
        sno:1,
        title:"go to the market",
        description:"you need to go to market to buy the item"
    },
    {
        sno:2,
        title:"go to the mall",
        description:"you need to go to mall to buy the item"
    },
    {
        sno:3,
        title:"go to the cart",
        description:"you need to go to mall to buy the item"
    }
]
  return (
<>
<Header title="My Todos List" searchbar={false}/>
<Todos Todos={Todos}/>
<Footer/>
</>
  );
}

export default App;
