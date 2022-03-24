import './App.css';
import Cake_container from './Component/Cake_container';
import {Provider} from 'react-redux'
import store from './Redux/Store';
import HooksCakeContainer from './Component/HooksCakeContainer';
import IceCreamNoHook from './Component/IceCreamNoHook';
import ChocolateContainer from './Component/ChocolateContainer';
import NewCakeContainer from './Component/NewCakeContainer';
import ItemContainer from './Component/ItemContainer';
import UserContainer from './Component/UserContainer';
import NewUserData from './Component/NewUserData';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer  cake />
        <ItemContainer/>
        <br></br>
        <HooksCakeContainer />
        <br></br>
        <Cake_container />
        <br>
        </br>
        <hr></hr>
        <IceCreamNoHook />

        <br>
        </br>
        <hr></hr>

        <ChocolateContainer />

        <br>
        </br>
        <hr></hr>

        <NewCakeContainer /> */}

        {/* <UserContainer /> */}

        <NewUserData />

      </div>
    </Provider>
  );
}

export default App;
