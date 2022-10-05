import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PublishSharpIcon from '@mui/icons-material/PublishSharp';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isbn:'',
      author:'',
      description:'',
      published_date:'',
      journal:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearForm = (e) => {
    e.preventDefault();
    const input = this.state.input;
    console.log("input", input);
    this.setState({
          title: '',
          isbn:'',
          author:'',
          description:'',
          published_date:'',
          journal:''
    });
    };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      journal: this.state.journal
    };
    
 

    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          isbn:'',
          author:'',
          description:'',
          published_date:'',
          journal:''
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      });
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link> */}
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">
                  Create new article entry
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of Article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}

                    
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Category'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    // style="width: 300px;"
                    
                    min ="1900"
                    max = "2099"
                    step = "1"
                    size="2000"
                    placeholder='Year of Publication'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Academic Journal'
                    name='journal'
                    className='form-control'
                    value={this.state.journal}
                    onChange={this.onChange}
                  />
                </div>
               <br/>
               &nbsp;
               &nbsp;
               <IconButton className="resetbutton" type ="reset" variant="outlined" size="small" onClick={this.clearForm}>  <RestartAltSharpIcon sx={{ color: "white"}}  /></IconButton>
               &nbsp; &nbsp; &nbsp; &nbsp;
              <Button type="submit" variant="contained"  size="small" endIcon={<PublishSharpIcon />}>Submit </Button>  <br/>  <br/>
              
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;