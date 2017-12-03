import React, { Component } from 'react';
import getImageDataFromDataUrl from './utils/getImageDataFromDataUrl';
import hiro from './assets/hiro.png';
import Gallery from './Gallery';
//import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    textPadding: {
        paddingLeft: '5px',
    },
    jumboBkg: {
        backgroundColor: '#eef6ff',
    },
    raisedButtonBkg: {
        backgroundColor: '#000',
    },
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
        float: 'left',
        width: '90px',
        height: '90px',
        marginRight: '5px',
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

              <h3 className="text-muted">Sharefair, 6th December 2017</h3>
            </div>
           
            <div className="jumbotron" style={styles.jumboBkg}>
              <h1><b>AR</b>MTD</h1>
              <p className="lead">
              <b>[A]R</b>MTD, is an experiment aim to present RMTD units, using Augmented Reality (AR).</p>

            </div>
            <div className="row">
                <div className="col-xs-12">
                <img alt="Hiro marker example" src={hiro} style={styles.hiroMarkerImg}/>
                
                    <p className={styles.textPadding}>
                        <b><a onTouchTap={this.handleOpenGalleryClick}>Select one, of the unit's fact-sheet</a></b> and then search for a Marker around you or <b><a>download it!</a></b>
                        <br/>Point it with your camera and enjoy!
                    </p>
                </div>
                <div className="col-xs-12 text-center">
                <hr/>
                <button className="btn btn-primary text-uppercase" onTouchTap={this.handleOpenGalleryClick} label="Select One Of Our Units Factsheet">Select One Of Our Units Factsheet</button>
                </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
              <hr/>
                <i className="text-right">Based on an <a>experiment</a> with <a>ARJS</a>.</i>
      
              </div>
            </div>
      
          </div>
               

        );
    }
}

export default FileSelection;
