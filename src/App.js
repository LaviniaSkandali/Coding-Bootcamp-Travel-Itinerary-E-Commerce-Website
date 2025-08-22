import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfilePage from "./ProfilePage";


function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route path="/profile" component={ProfilePage} exact={true} />
            
          </Switch>
      </BrowserRouter>
  );
}

export default App;