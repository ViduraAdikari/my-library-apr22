import React from 'react';
import {Col, Row} from "react-bootstrap";

type AuthorProps = {
  num: number
  authorName: string
  onDeleteClick: (indexToDelete: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {

  const {num, authorName} = props;

  return (
    <Row>
      <Col xs={9}>
        <label>{num}. {authorName}</label>
      </Col>
      <Col xs={3} className='d-flex justify-content-end align-items-center'>
        <i className='feather-edit text-warning me-3'/>
        <i className='feather-trash-2 text-danger me-3' onClick={() => props.onDeleteClick(num - 1)}/>
      </Col>
    </Row>
  )
};

export default Author;