import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Container from './components/Container';
import ImageCard from './components/ImageCard';
import images from './images.json';
import './App.css';

class App extends Component {
  
  state = {
    images: images,
    score: 0,
    topScore: 0,
    tempImageArray: [],
    correct: 'Click an image to start'
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[newIndex]] = [array[newIndex], array[i]];
    }
  }

  checkClicked = id => {
    if (this.state.tempImageArray.find(image => image === id)) {
      // image has already been clicked
      this.setState({ score: 0, tempImageArray: [], correct: 'Sorry, you already click that one!' });
    } else {
      // image has not been clicked yet
      this.state.tempImageArray.push(id);
      // console.log(this.state.tempImageArray);
      this.setState({ score: this.state.score + 1, correct: 'Good job!' });
      if (this.state.topScore <= this.state.score) {
        this.setState({ topScore: this.state.topScore +1 });
      }

    }

    this.shuffle(images);
    this.setState({ images });
  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          correct={this.state.correct}
        />
        <Heading />
        <Container>
          {this.state.images.map(image => (
            <ImageCard
              id={image.id}
              key={image.id}
              alt={image.alt}
              image={image.image}
              checkClicked={this.checkClicked}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
