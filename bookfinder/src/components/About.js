import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import "./About.css";

function AboutUs() {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  }

  return (
    <div className='abt'>
      <h1 className='head1'>About Us</h1>
      <p className='para'>We are a team of book lovers who are passionate about helping others find the books they need. Our library book finder app is designed to make it easy for you to search for and locate books in your local library.</p>
      <p className='para'>With our app, you can get the details of our books by title, author. You can also see the availability of each book in your library, so you can plan your visit accordingly.</p>
      <p className='para'>If you have any questions or feedback about our app, please don't hesitate to contact us. We'd love to hear from you!</p>
      <h2 className='head2'>Meet the Team</h2>
      <ul className='ull'>
        <li className='lists'><strong>Sarath Sai</strong> </li>
      </ul>
      <div className='feedback'>
        <p className='feedback-text'>How would you rate our app?</p>
        <div className='rating'>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type='radio'
                  name='rating'
                  value={ratingValue}
                  onClick={() => handleRatingClick(ratingValue)}
                />
                <FontAwesomeIcon
                  icon={ratingValue <= rating ? faStar : faStarHalfAlt}
                  className='star'
                />
              </label>
            )
          })}
        </div>
        <p className='feedback-thanks'>{rating > 0 ? 'Thank you for your feedback!' : null}</p>
      </div>
      <footer className='footer'>
        <p className='copy'>&copy; 2023 Library Book Finder App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
