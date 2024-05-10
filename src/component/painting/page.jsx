import React from 'react'
import Deatilform from '../detailform'
import Formpain from '../formPainting/page';
import Galleryslider from '../galleryslider/Galleryslider';

const Painting = () => {
    const images = [
        'https://www.easihome.in/assets/img/paintingideas/4.jpg',
        'https://www.easihome.in/assets/img/paintingideas/5.jpg20ideas/2.jpg',
        'https://www.easihome.in/assets/img/paintingideas/6.jpg',
    ];

    return (
        <div>
            <div className="hero hero-img4">
                <div className='hero-content exception'>
                    <div className="banner-quote" >
                        <h1 style={{ color: 'yellow' }}>UPTO 12% OFF</h1>
                        <h1 style={{ color: '#003f8e' }}>Paint Your Home <br />Professionally with</h1>
                        <span style={{ color: 'yellow', fontSize: 30 }}>Innovative</span>
                        <h1 style={{ color: '#003f8e' }}>Painting Service <br />100% Hassle Free</h1>

                    </div>
                    <Deatilform />
                </div>

            </div>

            <div className="why">
                <h2 style={{ fontSize: 23, fontWeight: 500 }}>Why Choose EasiHome?</h2>
            </div>

            <div className="badge-container">
                <div className="badge">
                    <div className="badge1"></div>
                    <p>Premium Quality Paints</p>
                </div>
                <div className="badge">
                    <div className="badge2"></div>
                    <p>Budget friendly prices</p>
                </div>
                <div className="badge">
                    <div className="badge3"></div>
                    <p>Re-work Gaurantee</p>
                </div>
                <div className="badge">
                    <div className="badge4"></div>
                    <p>Free Inspection & Instant Quotation</p>
                </div>
            </div>

            <div className='abt-head'> <h1>Painting Ideas</h1>
                <div className="sym-home icon-size"></div>
            </div>
            <div className="Construct-gallery">
                <div className=" pic pic10"></div>
                <div className="pic pic11"></div>
                <div className=" pic pic12"></div>
            </div>
            <div className="gallery-container">
                <Galleryslider images={images} />
            </div>

            <div className="painting-bottom" style={{ marginTop: 10 }}>

                <Formpain />
            </div>

            <div className="lg-buttons">
                <div ><button>Basic</button> </div>
                <div><button>Premium</button></div>
                <div ><button>Luxury</button></div>
            </div>

            <div className="card-pro">

                <div><h2 >Process</h2></div>
                <div className='process-pro'>
                    <div className="pro">
                        <div className="pro1 prom"></div>
                        <div className="border"></div>
                        <p>Inspection and consultation with a detailed scope of work and charges after that selection of colour shed happens.</p>
                    </div>
                    <div className="pro">
                        <div className="pro2 prom"></div>
                        <div className="border"></div>
                        <p>Inspection and consultation with a detailed scope of work and charges after that selection of colour shed happens.</p>
                    </div>
                    <div className="pro">
                        <div className="pro3 prom"></div>
                        <div className="border"></div>
                        <p>Inspection and consultation with a detailed scope of work and charges after that selection of colour shed happens.</p>
                    </div>
                    <div className="pro">
                        <div className="pro4 prom"></div>
                        <div className="border"></div>
                        <p>Inspection and consultation with a detailed scope of work and charges after that selection of colour shed happens.</p>
                    </div>
                </div>
            </div>

            <div className='abt-head'> <h1>Custom Package</h1>

                <div className="gift-wrap"></div>
                <div className='mx'>Our step by step process are easy to use.</div>
            </div>
            <div className="banner-bottom">
                <div className="banner-image"></div>
            </div>

        </div>
    )
}

export default Painting;