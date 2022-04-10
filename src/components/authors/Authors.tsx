import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";

const Authors: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddAuthor = () => {
    setIsFormVisible(true);
  }

  const handleCloseForm = () => {
    setIsFormVisible(false);
  }

  return (
    <Row className='author-section'>
      <AuthorTitle/>
      <AuthorList/>
      <AddAuthor onAddAuthorClicked={handleAddAuthor}/>

      {isFormVisible && <AuthorForm onCloseClick={handleCloseForm}/>}
    </Row>
  )
};

export default Authors;