import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles/Gallery.css";
import { meals } from "../seed";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInSlide: 1,
      currentIndex: 0,
      meals: meals.hits,
      recipe: meals.hits[0],
      galleryItems: this.galleryItems(),
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1440: { items: 3 }
      }
    };
  }

  

  //TO DO: VIEW BUTTON, MOBILE INFINITE GLITCH,

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  galleryItems() {
    return meals.hits.map(recipe => (
      <div className="slide">
        <img className="meal-img" src={recipe.recipe.image} alt="gavno" />
        <div className="text-container">
          <p className="meal-title">{recipe.recipe.label}</p>
          <p className="health-diet-label">
            {recipe.recipe.healthLabels.join(', ')}</p>
            <p className="health-diet-label">{recipe.recipe.dietLabels}</p>
          
        </div>
        <a className="view-link" target="blank" href={recipe.recipe.url}>
          <button className="view-button">View</button>
        </a>
      </div>
    ));
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div className="main-container">
        <button className="prev-button" onClick={() => this.slidePrev()} label="prev"/>
        <AliceCarousel
          slideToIndex={currentIndex}
          buttonsDisabled={true}
          responsive={this.responsive}
          items={galleryItems}
          dotsDisabled={true}
          infinite={false}
          // fadeOutAnimation={true}
          onSlideChanged={this.onSlideChanged}
          responsive={responsive}
        />
        <button className="next-button" onClick={() => this.slideNext()} label="next"
          />
      </div>
    );
  }
}

export default Gallery;
