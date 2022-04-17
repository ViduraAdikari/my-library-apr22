import React from 'react';
import {Col} from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../types/libraryTypes";

type AuthorListProps = {
  authors: IAuthor[] | null
  onDeleteClick: (index: number) => void
}

const AuthorList: React.FC<AuthorListProps> = (props) => {

  const {authors} = props;

  const renderAuthors = () => {
    if (!authors) {
      return;
    }

    return authors.map((author: IAuthor, index: number) =>
      <li className='author py-2' key={index}>
        <Author num={index + 1} authorName={author.name} onDeleteClick={props.onDeleteClick}/>
      </li>);
  }

  return (
    <Col xs={12} className='mt-3'>
      {(!authors || authors.length === 0) && <label className="empty-label">No authors listed here.</label>}

      <ul className='list-unstyled'>
        {renderAuthors()}
      </ul>
    </Col>
  )
};

export default AuthorList;