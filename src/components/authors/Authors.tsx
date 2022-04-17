import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../types/libraryTypes";

const Authors: React.FC = () => {

  const [authors, setAuthors] = useState<IAuthor[] | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddAuthor = () => {
    setIsFormVisible(true);
  }

  const handleCloseForm = () => {
    setIsFormVisible(false);
  }

  const handleAuthorCreate = (newAuthor: IAuthor) => {
    const allAuthors: IAuthor[] = authors ? authors.slice() : [];
    allAuthors.push(newAuthor);
    setAuthors(allAuthors);
  }

  const handleOnDeleteAuthorClick = (index: number) => {
    if (!authors) {
      return;
    }

    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(index, 1);
    setAuthors(allAuthors);
  };


  return (
    <Row className='author-section'>
      <AuthorTitle/>
      <AuthorList authors={authors} onDeleteClick={handleOnDeleteAuthorClick}/>
      <AddAuthor onAddAuthorClicked={handleAddAuthor}/>

      {isFormVisible && <AuthorForm onCloseClick={handleCloseForm} onAuthorCreated={handleAuthorCreate}/>}
    </Row>
  )
};

export default Authors;