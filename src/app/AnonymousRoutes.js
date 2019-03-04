import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from '../router/SignIn'
import SignUp from '../router/SignIn'


// here are the routes
export default class Routes extends Component {
    render(){
        return (
            <Switch>
                <Redirect exact path='/' to='/oauth/signin'/>
                <Route path='/oauth/signin' component={SignIn}/>
                <Route path='/oauth/signup' component={SignUp}/>
            </Switch>
        );
    }
}

