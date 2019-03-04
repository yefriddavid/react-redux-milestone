import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../router/Home'
import SignIn from '../router/SignIn'


// here are the routes
export default class Routes extends Component {
    render(){
        return (
            <Switch>
                <Redirect exact path='/' to='/app/home'/>
                <Route path='/app/home' component={Home}/>
                <Route path='/app/dashboard' component={Home}/>
                <Route path='/app/masters/users' component={Home}/>
                <Route path='/app/masters/customers' component={Home}/>
                <Route path='/app/masters/operadors' component={Home}/>
                <Route path='/app/masters/vehicles' component={Home}/>
                <Route path='/app/masters/services' component={Home}/>
                <Route path='/app/masters/rates' component={Home}/>
            </Switch>
        );
    }
}