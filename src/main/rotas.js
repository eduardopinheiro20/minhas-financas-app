import React from 'react'

import Login from '../views/login'
import CadUser from '../views/cadUser'

import { Route, Switch, HashRouter} from 'react-router-dom'


function Rotas(){

    return (

        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadUser} />
            </Switch>
        </HashRouter>
    )

}

export default  Rotas

