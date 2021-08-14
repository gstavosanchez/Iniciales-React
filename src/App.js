import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; // Enrutamiento
import 'bootswatch/dist/sandstone/bootstrap.min.css'; // CSS de Bootstrap
import { Navbar } from './componets/nav/Navbar';
// Comenponents
import { Inicio } from './componets/Inicio';
// imd
import { Item } from './componets/list/Item';
import { PesumSelection } from './componets/selection/PesumSelection';

import './app.css';
/* 
    Enrutamiento de las componentes    
*/
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="contenedor">
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/item" exact component={Item} />
                    <Route
                        path="/pesum/:pensumId"
                        exact
                        component={PesumSelection}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
