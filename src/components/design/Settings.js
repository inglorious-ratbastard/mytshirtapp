import React from 'react';
import './Display.css';
const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';

const Settings = ({ color, upperText, lowerText, uploadImage, textSize, textColor, saveDesign }) => { 
    return (
      <div className="card bg-light container">
          <hr></hr>
          <h6 className="text-center">Customize Your Design</h6>
          <hr></hr>  
          <h6>Change T-shirt Color</h6> 
          <div className="tshirt-color">
              <img onClick={color} src={`${urlImgBase}black.png`} alt="black-tshirt" id="black" />
              <img onClick={color} src={`${urlImgBase}white.png`} alt="white-tshirt" id="white" />
              <img onClick={color} src={`${urlImgBase}grey.png`} alt="grey-tshirt" id="grey" />
              <img onClick={color} src={`${urlImgBase}blue.png`} alt="blue-tshirt" id="blue" />
              <img onClick={color} src={`${urlImgBase}red.png`} alt="red-tshirt" id="red" /> 
          </div> 
          <hr />
          <h6>Change Text</h6>
          <input onChange={upperText} type="text" className="form-control form-control-sm mb-2"  maxLength="23" placeholder="Upper Text" />
          <input onChange={lowerText} type="text" className="form-control form-control-sm"  maxLength="23" placeholder="Lower Text" />
          <hr />
          <h6>Upload Image</h6>
          <div className="form-group">
         <input onChange={uploadImage} type="file" className="form-control-file mb-2" />
         </div>
          <hr />
          <h6>Text Size</h6>
         <input onChange={textSize} type="range" className="form-control mb-2" min="24" max="40" />     
          <hr />
          <h6>Text Color</h6>
          <select onChange={textColor} className="form-control form-control-sm mb-2">
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Orange</option>
              <option>Yellow</option>
              <option>Green</option>
              <option>Blue</option>
              <option>Indigo</option>
              <option>Purple</option>
              <option>Pink</option>
          </select>
          <hr />
          <button onClick={saveDesign} id="saveDesign" className=" btn btn-primary btn-sm mb-2">Save</button>
      </div>
    )
}

export default Settings