import React, { Component } from 'react';
import getImageDataFromDataUrl from './utils/getImageDataFromDataUrl';
//import hiro from './assets/hiro.png';
//import rose from './assets/rose.jpg';
import Gallery from './Gallery';
import RaisedButton from 'material-ui/RaisedButton';
/*
const styles = {
    container: {
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        //backgroundImage: `url(${rose})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionX: '50%',
        paddingTop: 100,
        paddingLeft: 10,
        paddingRight: 10,
    },

    list: {
        paddingRight: 40,
    },

    listItem: {
        paddingBottom: 15,
    },

    title: {
        fontSize: '1.2rem',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    a: {
        textDecoration: 'underline',
    },

    hiroMarker: {
        textAlign: 'center',
    },

    btnFileInput: {
        marginTop: 15,
        marginBottom: 15,
    },

    hiroMarkerImg: {
        marginTop: '1rem',
        height: '5rem',
        width: '5rem',
        border: '5px solid white',
    },

    fileInput: {
        display: 'none',
    },

    hr: {
        border: 0,
        marginBottom: '1rem',
        marginTop: '1rem',
    },

    h1: {
        fontWeight: 'bold',
        fontSize: '2.5 em'
    }
};
*/
class FileSelection extends Component {
    state = {
        showGallery: false,
    };

    handleChange = (event) => {
        var reader = new FileReader();
        reader.addEventListener('load', () => {
            getImageDataFromDataUrl(reader.result)
                .then(this.props.onFileSelected);
        }, false);

        reader.readAsDataURL(event.target.files[0]);
    }

    handleFileInputClick = () => {
        this.fileInput.click();
    }

    handleOpenGalleryClick = () => {
        setTimeout(() => {
            this.setState({ showGallery: true });
        }, 500);
    }

    handleCloseGalleryClick = () => {
        setTimeout(() => {
            this.setState({ showGallery: false });
        }, 500);
    }

    handleGalleryImageSelected = (image) => {
        getImageDataFromDataUrl(image).then(this.props.onFileSelected);
    }

    storeFileInputRef = node => {
        this.fileInput = node;
    }

    render() {
        const { showGallery } = this.state;

        if (showGallery) {
            return <Gallery onClose={this.handleCloseGalleryClick} onSelected={this.handleGalleryImageSelected} />;
        }

        return (
            <div className="container">
            <div className="header clearfix">

              <h3 className="text-muted">Project name</h3>
            </div>
           
            <div className="jumbotron">
              <h1>Jumbotron heading</h1>
              <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p>
              <div className="col-md-12">
                    <RaisedButton primary onTouchTap={this.handleOpenGalleryClick} label="Select One Of Our Project" />
                </div>
              </p>
            </div>
            
            <div className="row marketing">
              <div className="col-lg-6">
                  
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
      
                <h4>Subheading</h4>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
      
                <h4>Subheading</h4>
                <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              </div>
      
              <div className="col-lg-6">
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
      
                <h4>Subheading</h4>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
      
                <h4>Subheading</h4>
                <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              </div>
            </div>
      
            <footer className="footer">
              <p>&copy; 2016 Company, Inc.</p>
            </footer>
      
          </div>
               

        );
    }
}

export default FileSelection;
