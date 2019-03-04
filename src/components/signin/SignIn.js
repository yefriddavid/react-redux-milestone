import React from 'react'

import logo  from '../../assets/images/logo-big.png'

const signin = (props) => {
    return (

<div className="row">
    <div className="main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5">
        <div className="logo text-center">
            <img src={logo} alt="parqueo" className="img-responsive" />
        </div>
        <p className="text-center text-dark text-bold text-extra-large margin-top-15">
            Bienvenido a parqueo
        </p>
        <p className="text-center">
            Administracion y gestionn de vehiculos y servicios (Lavado de vehiculos, brillada). 
        </p>
        <p className="text-center">
            Ingrese el usuario y contraseña.
        </p>
        <div className="box-login">
            <form className="form-login" action="index.html">
                <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="Username" />
                </div>
                <div className="form-group form-actions">

                    <input type="password" className="form-control password" name="password" placeholder="Password" />

                </div>
                <div className="text-center">
                    <a ui-sref="login.forgot"> Olvide mi contraseña </a>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-red btn-block">
                        Login
                    </button>
                    <div className="checkbox clip-check check-primary">
                        <input type="checkbox" id="remember" value="1" />
                        <label htmlFor="remember"> Recordar mi usuario </label>
                    </div>
                </div>
            </form>
            <div className="copyright">
                2019 &copy; Parqueo by Yefrid Rios @yefriddavid Software.
            </div>
        </div>
    </div>
</div>

        
        )
}


export default signin







