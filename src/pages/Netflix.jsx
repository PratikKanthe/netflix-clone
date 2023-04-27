import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.webp'
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from 'styled-components';

function Netflix() {

  const [isScrolled, setIsScrolled] = useState(false);


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }


  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
      <img src={backgroundImage} alt='bg' className='background-image' />
      <div className="container">
        <div className="logo">
          <img src={MovieLogo} alt="movie logo" />
        </div>
        <div className="buttons flex">
          <button className='flex j-center a-center'>
            <FaPlay /> play  
          </button>
          <button className='flex j-center a-center'>
            <AiOutlineInfoCircle /> More Info  
          </button>
        </div>
      </div>
      </div>

    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%)
    }
    img {
      height: 100vh;
      width: 100vw;
    }
  }
`;

export default Netflix;