import React from "react";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { news } from "../seed";



class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topNews: []
    }
  }
  componentDidMount() {
    this.fetchTopNews();
  }

  fetchTopNews = () => {
    this.setState({ topNews: news["top-news"] });
    console.log(news["top-news"]);
  };


render() {
  const recipeContainer = this.state.topNews.map(news => 
    <div className='recipe-container'> 
  <img className='meal-img' key="key" src={news.urlToImage} href="http://www.google.com/"/>
  <button className='recipe-button'>
    <a className='recipe-link' href= {news.url} target='blank'>{news.title}</a>
    </button>
</div>)


return (
  <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  {recipeContainer}
  </Carousel>
)}};

export default Gallery