import React from 'react';
import { FiLogIn } from 'react-icons/fi';
// Para nào ter que recaregar a pagina quando troca de rota
import { Link } from 'react-router-dom'; 

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.png'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenha cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}