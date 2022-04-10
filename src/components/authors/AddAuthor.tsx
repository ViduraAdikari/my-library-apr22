import React from 'react';
import {Col} from "react-bootstrap";

type AddAuthorProps = {
  onAddAuthorClicked: () => void
}

const AddAuthor: React.FC<AddAuthorProps> = (props) => {
  return (
    <Col xs={12} className='add-author d-flex align-items-center mt-1 mb-2' onClick={props.onAddAuthorClicked}>
      <i className='feather-plus me-1'/>
      <label>Add Author</label>
    </Col>
  )
};

export default AddAuthor;