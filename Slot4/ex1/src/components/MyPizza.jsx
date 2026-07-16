// tạo function MyPizza
//hiển thị ID, name, tên loại pizza,descripton, giá cũ,giá, hình ảnh của pizza đó, tag trong 1 Card React-bootstrap, chứa trong container react-bootstrap, có Row, Col
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
function MyPizza({ pizza }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src={pizza.image}
                            />
                            <Card.Body>
                                <Card.Title>
                                    {pizza.name}
                                </Card.Title>
                                <Card.Text>
                                    ID: {pizza.id} <br />
                                    Description: {pizza.description} <br />
                                    Old Price: {pizza.oldPrice} <br />
                                    Price: {pizza.price} <br />
                                    Tag: {pizza.tag}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default MyPizza;