import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModTableColumns from '../Components/ModTableColumns.js';
import Styles from '../Components/TableStyles.js';
import Table from '../Components/EvidenceTable.js';


// const tableHooks = (hooks) =>{
//     hooks.visibleColumns.push((columns) => [
//         ...columns,
    
//     {
//         id: "Add",
//         Header: "Add",
//         Cell: ({row}) => (
//             <Button type="submit" variant="contained"   onClick={onSubmit} size="small" endIcon={<ThumbUpOffAltIcon />}>Approve </Button>
//             ),
//     },
// ]);
// };


const onSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      published_date: this.state.published_date,
      doi:  this.state.doi,
      claim: this.state.claim,
      evidence: this.state.evidence,
      se_practice: this.state.se_practice
    };
  
  
    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          author:'',
          source:'',
          published_date:'',
          doi:'',
          claim:'',
          evidence: '',
          se_practice:'',
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      });
  };

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
      status:''
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
  

  const handleClick = (event) =>{
    event.preventDefault();
  };

  return (
    <div>
      <div className="content">
        <h1>Moderator View</h1>
        <Styles>
          <Table 
          data={articles}
          columns={ModTableColumns}
          onClick={(handleClick)}
          />
        </Styles>
      </div>
    </div>
  );
};

export default ModView;
