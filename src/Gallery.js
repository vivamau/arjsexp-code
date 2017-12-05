import React from 'react';
import GalleryItem from './GalleryItem';


const styles = {
    container: {
        position: 'relative',
        height: '100%',
        backgroundColor: '#eef6ff',
        padding: '10px 6px',
    },
    rowBkg: {
        background: '#fff',
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '0.5rem 0.5rem 2.5rem 0.5rem',
        position: 'relative',
        overflowY: 'scroll',
        height: '100%',
    }
}
const defaultImages = [
    require('./assets/drawing1.png'),
    require('./assets/drawing2.png'),
    require('./assets/drawing3.png'),
    require('./assets/drawing4.png'),
    require('./assets/drawing5.png'),
    require('./assets/drawing6.png'),
    require('./assets/drawing7.png'),
    require('./assets/drawing8.png'),
    require('./assets/drawing9.png'),
    require('./assets/drawing10.png'),
    require('./assets/drawing11.png'),
    require('./assets/drawing12.png'),
    require('./assets/drawing13.png'),
    require('./assets/drawing14.png'),
];

const Gallery = ({ images = defaultImages, onClose, onSelected }) => (
    <div style={styles.container}>       
        <div class="row" style={styles.rowBkg}> 
        <div class="col-lg-12">
        <button className="btn btn-primary text-uppercase btn-block" onClick={onClose}>Back</button>
        </div>
        </div>
        <div style={styles.gallery}>        
            {images.map(image => <GalleryItem key={image} image={image} onSelected={onSelected} />)}
        </div>
    </div>
)

export default Gallery;
