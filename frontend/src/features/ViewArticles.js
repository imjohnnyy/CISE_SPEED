import React, { useState, useEffect } from 'react';
import tablecolumns from '../Components/TableColumns.js';
import Styles from '../Components/TableStyles.js';
import Table from '../Components/EvidenceTable.js';

const ViewArticles = () => {
  const [articles, setArticles] = useState([
    {
      title: '',
      isbn: '',
      author: '',
      description: '',
      published_date: '',
      journal: '',
      updated_date: '',
    },
  ]);

  const fetchArticles = () => {
    fetch('http://localhost:8082/api/books/')
      .then((res) => res.json())
      .then((jsonRes) => setArticles(jsonRes))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <div className="content">
        <Styles>
          <Table data={articles} columns={tablecolumns} />
        </Styles>
      </div>
    </div>
  );
};

export default ViewArticles;
