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
      author:'',
      source:'',
      published_date:'',
      doi:'',
      claim:'',
      evidence: '',
      se_practice:'',
      status:''
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
          author:'',
          source:'',
          published_date:'',
          doi:'',
          claim:'',
          evidence: '',
          se_practice:'',
          status:''
    });
    };

  onSubmit = e => {
    e.preventDefault();

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
          se_practice:''
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
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Source'
                    name='source'
                    className='form-control'
                    value={this.state.source}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='number'              
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
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='DOI'
                    name='doi'
                    className='form-control'
                    value={this.state.doi}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Claim'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>
                <br />
              
                <div className='form-group'>
                  <p className="form-field">Evidence:</p>
                  <label> 
                  &nbsp;
                  &nbsp;
                  <input type="radio"
                  name="evidence"
                  value="Strong"
                  checked={this.state.evidence ==="Strong"}
                  onChange={this.onChange}/> Strong </label>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  {/* </div>
                  
                  <div className='form-group'> */}
                  <label> 
                  <input type="radio"
                  name="evidence"
                  value="Weak"
                  checked={this.state.evidence ==="Weak"}
                  onChange={this.onChange}/> Weak
                  </label>
                </div>
                
              
               <br/>

               <div className='form-group'>
               <select 
               placeholder='SE Practice'
               name='se_practice'
               className='form-control'
               value={this.state.se_practice}
               onChange={this.onChange}>
                <option hidden >SE Practice</option>
                <option> TDD</option>
                <option> Mob Programming</option> 
                </select>
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