import React from "react";

class Carousel extends React.Component {
  state = {
    imgIndex: 1
  };

  goLeft = () => {
    if (this.state.imgIndex > 0) {
      return this.setState({
        imgIndex: this.state.imgIndex - 1
      });
    } else {
      return this.setState({
        imgIndex: 3
      });
    }
  };

  goRight = () => {
    if (this.state.imgIndex < 3) {
      return this.setState({
        imgIndex: this.state.imgIndex + 1
      });
    } else {
      return this.setState({
        imgIndex: 0
      });
    }
  };

  render() {
    const images = this.props.imgs;

    return (
      <div>
        <button onClick={this.goLeft}>Left</button>
        <img src={images[this.state.imgIndex]} alt="img" />
        <button onClick={this.goRight}>Right</button>
      </div>
    );
  }
}

export default Carousel;
