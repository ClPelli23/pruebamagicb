// import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../../assets/galeria_header/img-1.jpg';
// import img2 from '../../assets/galeria_header/img-2.jpg';
// import img3 from '../../assets/galeria_header/img-3.jpg';
// import img4 from '../../assets/galeria_header/img-4.jpg';
// import img5 from '../../assets/galeria_header/img-5.jpg';
// import img6 from '../../assets/galeria_header/img-6.jpg';
// import img7 from '../../assets/galeria_header/img-7.jpg';
// import img8 from '../../assets/galeria_header/img-8.jpg';
// import img9 from '../../assets/galeria_header/img-9.jpg';
// import img10 from '../../assets/galeria_header/img-10.jpg';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';


const ImageCarousel = () => {
    const numberOfImages = 64; // Puedes ajustar la cantidad de imágenes aquí
    const imageWidth = 200; // Tamaño deseado de las imágenes
    const images = Array.from({ length: numberOfImages }, (_, index) => ({
    id: index + 1,
    imgURL: `../src/assets/galeria_header/img-${index + 1}.jpg`,
    }));


    return (
        <div className='carousel-container'>
        <Carousel 
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        centerMode={true}  // Centra las imágenes
        showIndicators={false} // Oculta los puntos indicadores
        infiniteLoop={true} // Hace que el carrusel sea infinito
        autoPlay={true}     // Activa la reproducción automática
        interval={7000}     // Intervalo de tiempo entre cada diapositiva (en milisegundos)
        stopOnHover={false} // No detener la reproducción automática al pasar el mouse
        style={{ width: `${imageWidth}px`, height: '100' }} // Establece el ancho y alto del carrusel
        >
            {images.map(({ id, imgURL }) => (
            <div key={id}>
                <img src={imgURL} alt={`Imagen ${id}`} style={{width:'100%', height: '650px', objectFit: 'cover', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
            </div>
            ))}
        </Carousel>
        </div>
    );
    };

export default ImageCarousel;
