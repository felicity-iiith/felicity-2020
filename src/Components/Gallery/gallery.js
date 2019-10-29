import React from 'react';
import Gallery from 'react-photo-gallery';
import {photos} from './photos.js';




class GalleryPage extends React.Component {
  render() {
    return(
      <div>
        <Gallery photos = {photos}/>  
      </div>
      )
  }
}

export default GalleryPage;