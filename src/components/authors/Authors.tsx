import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../types/libraryTypes";

const Authors: React.FC = () => {

  const [authors, setAuthors] = useState<IAuthor[] | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [authorIndexToUpdate, setAuthorIndexToUpdate] = useState<number | null>(null);
  const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);

  const handleAddAuthor = () => {
    setAuthorToUpdate(null);
    setAuthorIndexToUpdate(null);
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

  const handleOnAuthorUpdated = (updatedAuthor: IAuthor) => {
    if (!authors || authorIndexToUpdate === null) {
      return;
    }

    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(authorIndexToUpdate, 1, updatedAuthor);
    setAuthors(allAuthors);
  }

  const handleAuthorUpdateClick = (index: number) => {
    setAuthorIndexToUpdate(index);
  }

  useEffect(() => {
    if (!authors || authorIndexToUpdate === null) {
      return;
    }

    const authorToEdit: IAuthor = authors[authorIndexToUpdate];
    setAuthorToUpdate(authorToEdit);
    setIsFormVisible(true);
  }, [authorIndexToUpdate]);

  return (
    <Row className='author-section'>
      <AuthorTitle/>
      <AuthorList authors={authors} onDeleteClick={handleOnDeleteAuthorClick} onUpdateClick={handleAuthorUpdateClick}/>
      <AddAuthor onAddAuthorClicked={handleAddAuthor}/>

      {isFormVisible && <AuthorForm onCloseClick={handleCloseForm} onAuthorCreated={handleAuthorCreate}
                                    authorToUpdate={authorToUpdate} onAuthorUpdated={handleOnAuthorUpdated}/>}
    </Row>
  )
};

export default Authors;