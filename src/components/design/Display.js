import React from 'react';
import './Display.css';

const Display = ({ display, textFormat }) => {
    return (
      <div className="card card-content">
          <div className="imgTshirt text-center">
              <img className="img-responsive" src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`} alt="img-tshirt" />
          </div>
          <div className="memeText text-center">
              <div className="upperText">
              <p style={{fontSize: textFormat, color: display.textColor}}>{`${display.upperText}` || 'Customize Your Text'}</p> 
              </div>
              <img src={`${display.url}` || "https://via.placeholder.com/400x300" } 
              alt="meme-text" />
              <div className="lowerText">
              <p style={{fontSize: textFormat, color: display.textColor}}>{`${display.lowerText}` || 'Create Your Design'}</p> 
              </div>
          </div>
      </div>
    )
}
export default Display 