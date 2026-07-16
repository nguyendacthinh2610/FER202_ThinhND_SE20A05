//Tạo 1 components PizzaList, hiển thị danh sách các loại pizza
//Dữ liệu lấy từ mảng pizzaList, chứa trong file src\data\pizzaData.js

import React from 'react';
import MyPizza from './MyPizza';
import { pizzaList } from '../data/pizzaData';
import { Container, Row, Col } from 'react-bootstrap';
function PizzaList() {
    return (
        <div>
            {/* Hiển thị danh sách các loại pizza trong mảng pizzaList, sử dụng MyPizza component để hiển thị thông tin của từng pizza , chứa trong container react-bootstrap có row có column*/}
           <Container>
                <Row>
                    {pizzaList.map((pizza) => (
                        <Col key={pizza.id} sm={12} md={6} lg={4}>
                            <MyPizza pizza={pizza} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
export default PizzaList;