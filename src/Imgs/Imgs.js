/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Imgs.css';


function Imgs() {
  return(

    <section className='imgs-section'>
        <div className='container'>
          <div className='imgs-text'>
              <h1>Our Work</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.</p>
          </div>

          <div className='imgs-img'>
              <img src={require('../Images/gallery-img-01.jpg')} />
              <img src={require('../Images/gallery-img-02.jpg')} />
              <img src={require('../Images/gallery-img-03.jpg')} />
              <img src={require('../Images/gallery-img-04.jpg')} />
              <img src={require('../Images/gallery-img-05.jpg')} />
          </div>
        </div>
    </section>


  )
}

export default Imgs;
