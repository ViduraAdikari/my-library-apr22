import React, {FormEvent, useState} from 'react';
import {Col, Row, Form, Button} from "react-bootstrap";
import {IAuthor} from "../../types/libraryTypes";

type AuthorFormProps = {
  onCloseClick: () => void
  onAuthorCreated: (newAuthor: IAuthor) => void
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

  const [authorName, setAuthorName] = useState<string | null>(null);

  const handleAuthorNameChange = (name: string) => {
    setAuthorName(name);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!authorName) {
      return;
    }

    const author: IAuthor = {name: authorName};
    props.onAuthorCreated(author);

    setAuthorName(null);
  }

  return (
    <Col xs={9} className='author-form mt-5'>
      <Row>
        <Col xs={10}>
          <h3>Create Author</h3>
        </Col>
        <Col xs={2} className='d-flex align-items-center justify-content-end'>
          <i className="feather-x-circle" onClick={props.onCloseClick}/>
        </Col>

        <Form onSubmit={handleSubmit}>
          <Col xs={{span: 11, offset: 1}}>
            <Form.Group className="mt-3 mb-4" controlId="formBasicAuthorName">
              <Form.Label>Name of Author</Form.Label>
              <Form.Control type="text"
                            value={authorName ? authorName : ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              handleAuthorNameChange(e.target.value)}/>
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