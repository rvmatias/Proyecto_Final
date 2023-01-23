import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../Page/HomePage";
import ContactPage from "../Page/ContacPage";

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/contacto" component={ContactPage}/>
            </Switch>
        </Router>

   );
};

export default AppRouter;