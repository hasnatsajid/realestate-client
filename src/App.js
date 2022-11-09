import { Route, Switch } from 'react-router-dom';
import LatestProjects from './components/LatestProjects';
import ListingDetail from './components/ListingDetail';
import Layout from './components/UI/Layout';
import Showcase from './components/UI/Showcase';
import AddProperty from './pages/AddProperty';
import Auth from './pages/Auth';
import Buy from './pages/Buy';
import Rent from './pages/Rent';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Layout>
              <Showcase />
              <LatestProjects />
            </Layout>
          )}
        />

        <Route path="/auth" exact component={Auth} />
        <Route path="/buy" exact component={Buy} />
        <Route path="/posts/:id" exact component={ListingDetail} />
        <Route path="/rent" exact component={Rent} />
        <Route path="/add-property" exact component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
