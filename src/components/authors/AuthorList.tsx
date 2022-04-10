import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../types/libraryTypes";

const AuthorList: React.FC = () => {
  const initAuthors: IAuthor[] = [
    {name: 'Bob'},
    {name: 'Cruse'},
    {name: 'Tom'}
  ];

  const [authors] = useState(initAuthors);

  const renderAuthors = () => {
    return authors.map((author: IAuthor, index: number) =>
      <li className='author py-2' key={index}><Author num={index + 1} authorName={author.name}/></li>);
  }

  return (
    <Col xs={12} className='mt-3'>
      {authors.length === 0 && <label className="empty-label">No authors listed here.</label>}

      <ul className='list-unstyled'>
        {renderAuthors()}
      </ul>
    </Col>
  )
};

export default AuthorList;