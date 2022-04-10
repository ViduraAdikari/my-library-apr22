import React from 'react';
import {Col, Row, Form, Button} from "react-bootstrap";

type AuthorFormProps = {
  onCloseClick: () => void
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

  return (
    <Col xs={9} className='author-form mt-5'>
      <Row>
        <Col xs={10}>
          <h3>Create Author</h3>
        </Col>
        <Col xs={2} className='d-flex align-items-center justify-content-end'>
          <i className="feather-x-circle" onClick={props.onCloseClick}/>
        </Col>

        <Form>
          <Col xs={{span: 11, offset: 1}}>
            <Form.Group className="mt-3 mb-4" controlId="formBasicAuthorName">
              <Form.Label>Name of Author</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
          </Col>

          <Col xs={12} className='text-end mt-2'>
            <Button type="submit">Create</Button>
          </Col>
        </Form>

      </Row>
    </Col>
  )
};

export default AuthorForm;