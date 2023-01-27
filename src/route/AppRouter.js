import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../Page/HomePage";
import ContactPage from "../Page/ContacPage";
import Event from "../Page/Event";
import Ingresar from "../Page/Ingresar";

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/contacto" component={ContactPage}/>
                <Route exact path="/event" component={Event}/>
                <Route exact path="/ingresar" component={Ingresar}/>
            </Switch>
        </Router>

   );
};

export default AppRouter;