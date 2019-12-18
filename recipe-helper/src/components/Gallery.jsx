import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// import { Carousel } from 'react-responsive-carousel'
// import './styles/Carousel.css'

// import 'react-multi-carousel/lib/styles.css'
import "./styles/Gallery.css";
import { news } from "../seed";


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNews: []
    };
  }

  componentDidMount() {
    this.fetchTopNews();
  }

  fetchTopNews = () => {
    this.setState({ topNews: news["top-news"] });
    console.log(news["top-news"]);
  };

  render() {
    // const recipeContainer = this.state.topNews.map(news => (
    //   <div className="recipe-container">
    //     <img
    //       className="meal-img"
    //       key="key"
    //       src={news.urlToImage}
    //       href="http://www.google.com/"
    //     />
    //     <button className="recipe-button">
    //       <a className="recipe-link" href={news.url} target="blank">
    //         View
    //       </a>
    //     </button>
    //   </div>
    // ));
    console.log(this.state.topNews)
    return (
      <CarouselProvider
        orientation={"horizontal"}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        step={2}
        visibleSlides={3}
        totalSlides={this.state.topNews.length}
      >
        <ButtonBack>Back</ButtonBack>
        <Slider>
        {this.state.topNews.map(news =>
          <Slide><Image className='meal-img' src={news.urlToImage} alt='rec'/></Slide>
              )}
          
          
        </Slider>

        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default Gallery;


// additionalTransfrom={0}
// arrows
// autoPlaySpeed={3000}
// centerMode={false}
// className=""
// containerClass="container"
// dotListClass=""
// draggable
// focusOnSelect={false}
// infinite
// itemClass=""
// keyBoardControl
// minimumTouchDrag={80}
// partialVisible
// renderButtonGroupOutside={false}
// renderDotsOutside={false}
// responsive={{
//   desktop: {
//     breakpoint: {
//       max: 3000,
//       min: 1024
//     },
//     items: 3,
//     partialVisibilityGutter: 40
//   },
//   mobile: {
//     breakpoint: {
//       max: 464,
//       min: 0
//     },
//     items: 2,
//     partialVisibilityGutter: 30
//   },
//   tablet: {
//     breakpoint: {
//       max: 1024,
//       min: 464
//     },
//     items: 2,
//     partialVisibilityGutter: 30
//   }
// }}
// showDots={false}
// sliderClass=""
// slidesToSlide={1}
// swipeable
