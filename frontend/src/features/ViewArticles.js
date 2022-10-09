import React, { useState, useEffect } from 'react';
import tablecolumns from '../Components/TableColumns.js';
import Styles from '../Components/TableStyles.js';
import Table from '../Components/EvidenceTable.js';

const ViewArticles = () => {
  const [articles, setArticles] = useState([
    {
      title: '',
      author: '',
      source: '',
      published_date: '',
      doi: '',
      claim: '',
      evidence: '',
      se_practice: '',
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

  const filterByTDD = articles.filter((article) => {
    return article.se_practice === 'TDD';
  });

  const filterByMP = articles.filter((article) => {
    return article.se_practice === 'Mob Programming';
  });

  const handleFilterByTDD = () => {
    setArticles(filterByTDD);
  };

  const handleFilterByMP = () => {
    setArticles(filterByMP);
  };

  console.log(filterByTDD);

  console.log(filterByMP);

  return (
    <div>
      <div className="content">
        <Styles>
          <select>
            <option value="">Select an SE Practice </option>
            <option value="TDD" onChange={handleFilterByTDD}>
              TDD{' '}
            </option>
            <option value="Mob Programming" onChange={handleFilterByMP}>
              Mob Programming{' '}
            </option>
          </select>
          <Table data={articles} columns={tablecolumns} />
        </Styles>
      </div>
    </div>
  );
};

export default ViewArticles;
