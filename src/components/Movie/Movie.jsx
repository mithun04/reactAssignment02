import React from 'react';
import StarRatings from 'react-star-ratings';

class Movie extends React.Component {
    state = {
        rating: this.props.rating
    }

    ratingHandler = (rating) => {
          this.setState({rating: rating});
    }

render() {
    const imgStyle = {
      width: '100%'
    }
    
    const cardStyle = {
      width: '30%',
      display: 'inline-block',
      margin: '1%'
    }

    const subtitleStyle = {
        color: 'gray'
      }

      const starStyle = {
          display: 'inline-block',
          width: '70%'
      }

      const paragraphStyle = {
        display: 'inline-block',
        borderRadius: '40%',
        backgroundColor: 'blue',
        color: 'white',
        width: '50px',
        textAlign: 'center'
      }

    return (
        <div style={cardStyle} className="card">
          <img style={imgStyle} src={this.props.imageUrl} className="card-img-top" alt={this.props.title} />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <h5 style={subtitleStyle} className="card-title">{this.props.subtitle}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
          <div className="card-footer">
              <div style={starStyle}>
                <StarRatings
                    starRatedColor="orange"
                    numberOfStars={5}
                    name='rating'
                    starDimension="30px"
                    changeRating={this.ratingHandler}
                    rating={this.state.rating}
                />
              </div>
              <div style={paragraphStyle}>{this.state.rating}</div>
         </div>
        </div>
    );
  }
}

export default Movie;