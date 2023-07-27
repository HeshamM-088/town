import React from 'react';
import './Contact.css';



function Contact() {
  return(

    <footer className='footer-section'>
        <div className='container'>
            <div className='contact-top'>
                <h1>Contact Us</h1>
                <span></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi facere, doloribus fugit inventore error quo doloremque cum esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi facere, doloribus fugit inventore error quo doloremque cum esse?</p>
            </div>
            <div className='contact-middle row'>
                <div className='location'>
                    <p>Phone: +201 119 554 463</p>
                    <p>Location: Location On Map</p>
                </div>
                <div className='mail'>
                    <p>Email: heshamkhalil1988@gmail.com</p>
                    <div className='mail-subscribe'>
                        <input type='text' placeHolder='Subscribe Your Mail' />
                        <button className='btn btn-light'>Submit</button>
                    </div>
                </div>
            </div>
            <div className='contact-bottom'>
                <p>Copyright &copy; 2019 Company Name - Design: <span>HishamKhalil</span> Mo</p>
            </div>

        </div>
    </footer>


  )
}

export default Contact;
