import React, { useState, useEffect } from 'react';
import tablecolumns from '../Components/TableColumns.js';
import Styles from '../Components/TableStyles.js';
import Table from '../Components/EvidenceTable.js';
import FilterSEPractice from '../Components/FilterSEPractice.js';

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

  const [filterSEValue, setFilterSEValue] = useState('All');

  const filterArticlesList = articles.filter((article) => {
    if (filterSEValue === 'TDD') {
      return article.se_practice === 'TDD';
    } else if (filterSEValue === 'Mob Programming') {
      return article.se_practice === 'Mob Programming';
    } else {
      return article;
    }
  });

  const fetchArticles = () => {
    fetch('http://localhost:8082/api/books/')
      .then((res) => res.json())
      .then((jsonRes) => setArticles(jsonRes))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const onFilterValueSelected = (filterValue) => {
    setFilterSEValue(filterValue);
  };

  return (
    <div>
      <div className="content">
        <Styles>
          <FilterSEPractice filterValueSelected={onFilterValueSelected} />

          <Table data={filterArticlesList} columns={tablecolumns} />
        </Styles>
      </div>
    </div>
  );
};

export default ViewArticles;
