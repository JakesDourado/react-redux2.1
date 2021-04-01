import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';



import api from '../../service/api'

import { IUser } from '../../store/modules/user/types';
import { addNewUser } from '../../store/modules/user/actions';
import './styles.css';


const Home: React.FC = () => {

    const initialState = {
        name: "",
        email: "",
        age: "",
    }
    const [data, setData] = useState(initialState);

    const dispatch = useDispatch()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        api.get('students').then(
            response => {
                setUsers(response.data)
            }
        )
    }, [])

    function handleSubmit() {
       // e.preventDefault();
        try{
            api.post(`students`, data);
            setData(initialState)
        }
        catch{}
    }

    const handleUsers = useCallback((user: IUser) => {
        dispatch((addNewUser(user)))
    }, [dispatch])
    return (
        <>
            <Form onSubmit={handleSubmit} className="CardMargBotton">
                <Card >
                    <Card.Header ><h4>Cadastro de Alunos</h4></Card.Header>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group className="col-md-4" >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                name="name"
                                onChange={(e)=>{setData({...data, name: e.target.value})
                                }}
                                value={data.name}
                                placeholder="Informe o nome" />
                            </Form.Group>

                            <Form.Group className="col-md-4" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                name="email"
                                onChange={(e)=>{setData({...data, email: e.target.value})
                                }}
                                value={data.email}
                                type="email"
                                placeholder="Digite o email" />
                            </Form.Group>

                            <Form.Group className="col-md-4" >
                                <Form.Label>Idade</Form.Label>
                                <Form.Control
                                name="age"
                                onChange={(e)=>{setData({...data, age: e.target.value})
                                }}
                                value={data.age}
                                placeholder="Informe a idade" />
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className="btnCad">Salvar</Button>
                    </Card.Body>




                </Card>
            </Form>
            <Card className="CardMargBotton">

                <Card.Header  >
                    <h4>
                        Alunos Cadastrados
                </h4>
                </Card.Header>
                <div className="cardStyle">
                    {users.map(user => (

                        <article key={user.id}>

                            <p> {user.name} </p>

                            <button onClick={() => handleUsers(user)}> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            </svg> </button>

                        </article>

                    ))}
                </div>
            </Card>
        </>
    );
}

export default Home;