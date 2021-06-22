import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom'
import{AuthContextProvider} from './contexts/authContext'


function App() {
  
  return (    
   
    <BrowserRouter>   
      <AuthContextProvider>
        <Route path= "/" exact={true} component={Home}/>
        <Route path= "/rooms/new" component={NewRoom}/> 
      </AuthContextProvider>   
    </BrowserRouter>
   
    
  );
}

export default App;
