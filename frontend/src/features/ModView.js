import React, { useState, useEffect } from 'react';
import ModTableColumns from '../Components/ModTableColumns.js';
import Styles from '../Components/TableStyles.js';
import Table from '../Components/EvidenceTable.js';


const ModView = () => {


  const [articles, setArticles] = useState([
    {
      title: '',
      isbn: '',
      author: '',
      description: '',
      published_date: '',
      journal: '',
      updated_date: '',
      status:'',
      rate: ''
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
        <h1>Moderator View</h1>
        <Styles>
          <Table 
          data={articles}
          columns={ModTableColumns}
          />
        </Styles>
      </div>
    </div>
  );
};

export default ModView;