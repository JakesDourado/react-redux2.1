import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Table, Pagination } from 'react-bootstrap';

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
              {state.map((user, index) => (
                <>
                  <tr key={index}>
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
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item disabled>{5}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>);
}

export default AboutUs;