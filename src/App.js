import React, { Component } from 'react';
import { getImages } from './api/pexels';
import { Grid, Row, Col, Image, Pager } from 'react-bootstrap';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            paginationNext: '',
            paginationPrevious: ''
        }
        this.getImagesFromApi = this.getImagesFromApi.bind(this);
    }

    componentDidMount(){
        this.getImagesFromApi('https://api.pexels.com/v1/search?query=sunset+query&per_page=15&page=1');
    }

   async getImagesFromApi(url){
        const images = await getImages(url);
        const photos = images.photos;
    
        this.setState({
            images: photos,
            paginationNext: images.next_page,
            paginationPrevious: images.prev_page
        });
    }

  render() {
      const { images, paginationNext, paginationPrevious} = this.state;
    return (
    <div className="App">
        <header className="App-header">
            <Grid>
            <Row>
                {images.length > 0 ? 
                    images.map((image) =>
                <Col xs={6} md={4} key={image.id}>
                    <Image src={image.src.medium} thumbnail />
                        <ul>
                            <li><a href={image.src.original} download>download original</a></li>
                            <li><a href={image.src.small} download>download small</a></li>
                            <li><a href={image.src.tiny} download>download tiny</a></li>
                        </ul>
                </Col>)
                    : null}
            </Row>
            </Grid>
        </header>
        <Pager>
             {paginationPrevious ? <Pager.Item onClick= { () => this.getImagesFromApi(paginationPrevious) }>Previous</Pager.Item> : null}
             {paginationNext ? <Pager.Item onClick={ () => this.getImagesFromApi(paginationNext) }>Next</Pager.Item> : null}
        </Pager>
    </div>
    );
  }
}

export default App;
