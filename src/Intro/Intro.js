/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Intro.css';

function Intro() {
  return(

    <section className='container intro-section'>
      <div className='image-intro'> 
            <img src= {require ("../Images/the-town-01.jpg")} alt='here' />
        </div>
        <div className='text-intro'>
            <h1>Introduction</h1>
            <p>The Town is <b>simple CSS template</b> built on HTML CSS and this is a little parallax layout that you can use for your website</p>
            <p>please tell your friends about our site <a href='#'>YourSite.</a> Thank you. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, nisi tenetur.</p>
            <button className='btn btn btn-primary'>Read More</button>
        </div>


    </section>


  )
}

export default Intro;
