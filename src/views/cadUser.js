import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadUser extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }
    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div classname="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="E-mail: *" htmlFor="inputEmail">
                                <input type="email"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Confirmar Senha: *" htmlFor="inputConfirmarSenha">
                                <input type="password"
                                    id="inputConfirmarSenha"
                                    className="form-control"
                                    name="confirmarSenha"
                                    onChange={e => this.setState({ confirmarSenha: e.target.value })} />
                            </FormGroup>
                            <button onClick={this.cadastrar} type="button" className="btn btn-success" >Salvar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

}



export default CadUser