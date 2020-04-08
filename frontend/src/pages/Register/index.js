import React, {useState} from 'react';
// Icone
import { FiArrowLeft } from 'react-icons/fi';
// Para nào ter que recaregar a pagina quando troca de rota
import { Link } from 'react-router-dom'; 

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png'

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    function handleRegister(e){
        e.preventDefault();

        console.log(
            name,
            email,
            whatsapp,
            city,
            uf
        );
     }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenha cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                    <input 
                        type="email" placeholder="E-mail" 
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={ e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" style={{ width: 80 }} 
                            value={uf}
                            onChange={ e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button">Cadastrar </button>

                </form>
            </div>
        </div>
    );
}