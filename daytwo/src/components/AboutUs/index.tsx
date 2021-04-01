import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Table} from 'react-bootstrap';

import './styles.css';
import { BsListCheck } from "react-icons/bs";

import { IGlobalState } from '../../store/modules/user/types';


const AboutUs: React.FC = () => {

  const state = useSelector((state: IGlobalState) => state.users)




  return (
    <>
   
      <Card >
        <Card.Header className="titles-item" >
          <BsListCheck />
          <h4>Matriculados, Academia Accenture 2.1</h4>
        </Card.Header>

        <Card.Body >
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-Mail</th>
                <th>Idade</th>
              </tr>
            </thead>
            <tbody>
              {state.map((user, i) => (
                <>
                  <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>

                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    </>);
}

export default AboutUs;