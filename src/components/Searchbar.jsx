import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

export default class Searchbar extends Component {
    constructor(props){
        super(props);

        this.search = this.search.bind(this);
    }

    search(e){
        const url = `https://api.pexels.com/v1/search?query=${e.target.value}+query&per_page=15&page=1`
        this.props.search(url);
    }

  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">Steepr</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Navbar.Form pullLeft>
                <FormGroup>
                <FormControl type="text" placeholder="Search"  onChange={this.search}/>
                </FormGroup>{' '}
            </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

