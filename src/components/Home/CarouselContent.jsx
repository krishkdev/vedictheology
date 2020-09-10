import React from "react";
import { Carousel,Image, Button } from "antd";
import { Link } from "react-router-dom"; 
import Styles from './CarouselContent.module.css';

const CarouselContent = () => {
  const handleClick = () => {
    alert('hi')
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.centered}>
        <h1>Vedictheology</h1>
        <p>Help people affected by COVID-19 by donating to our trust</p>
        <Link to='/donate'><Button className={Styles.btn} onClick={handleClick} >Donate</Button></Link>
      </div>

      <Carousel autoplay dotPosition="top">
        <div>
          <Image className={Styles.image} src={require('../../assets/ganesha.jpg')} />
        </div>
        <div>
        <Image className={Styles.image} src={require('../../assets/land.jpg')} />
        </div>
        <div>
        <Image className={Styles.image} src={require('../../assets/Shiva.jpg')} />
        </div>
        <div>
        <Image className={Styles.image} src={require('../../assets/prambanan-temple-indonesia.jpg')} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselContent;
