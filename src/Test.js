import React, { Component } from 'react';
import './Test.css';

class Test extends Component {
    state = {
        carouselItems: [
            { title: 'Adidas AG', description:  '0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/se', image: '/image3.webp' },
            { title: 'Hochzeit Wilbad', description:  '0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/se 2', image: '/image7.webp' },
            { title: 'Titre 3', description: '0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/server.js`[1] Compiled successfully![1] webpack compiled successfully[0] Server läuft auf http://localhost:3001 3', image: '/image11.jpp' },
            { title: 'Titre 4', description: ' 0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/se4', image: '/image4.webp' },
            { title: 'Titre 5', description:  '0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/se 5', image: '/image14.webp' },
            { title: 'Titre 6', description:  '0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/se 6', image: '/image16.webp' },
            { title: 'Titre 7', description:  '0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/se 7', image: '/image17.webp' },
            { title: 'Titre 8', description:  '0] Server läuft auf http://localhost:3001[1] Compiling...[0] [nodemon] restarting due to changes... [0] [nodemon] starting `node ./backend/se 8', image: '/image19.webp' }
        
        ],
        carouselPosition: 0,
    };

    navigateCarousel = (direction) => {
        const { carouselItems, carouselPosition } = this.state;
        const itemWidth = 100; // largeur de l'élément + margin
        const maxScrollPosition = (carouselItems.length - 1) * itemWidth;

        let newPosition = carouselPosition + (direction * itemWidth);

        if (newPosition < 0) {
            // Si on va vers la gauche et on dépasse le premier élément,
            // on se positionne sur le dernier élément
            newPosition = maxScrollPosition;
        } else if (newPosition > maxScrollPosition) {
            // Si on va vers la droite et on dépasse le dernier élément,
            // on revient au premier élément
            newPosition = 0;
        }

        this.setState({ carouselPosition: newPosition });
    };

    render() {
        const { carouselItems, carouselPosition } = this.state;

        return (
            <div className="Test-page">
                <div className="section005">
                    <div className="carousel-container1" style={{ transform: `translateX(-${carouselPosition}px)` }}>
                        {carouselItems.map((item, index) => (
                            <div key={index} className="carousel-item1">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-arrow left1" onClick={() => this.navigateCarousel(-1)}>&lt;</button>
                    <button className="carousel-arrow right1" onClick={() => this.navigateCarousel(1)}>&gt;</button>
                </div>
            </div>
        );
    }
}

export default Test;


