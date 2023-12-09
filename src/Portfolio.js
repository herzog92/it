import React, { Component } from 'react';
import './Portfolio.css'; // Importation du fichier CSS

class Portfolio extends Component {
    state = {
        dynamicNumber: 0, // Nombre pour l'animation de comptage
        carouselItems: [
          { title: 'Adidas AG', description: 'Vertrauen Sie auf ATS UG für exzellentes Catering und herausragenden Service, der Ihre Veranstaltung zu einem unvergesslichen Ereignis macht.', image: '/image7.webp' },
     
          { title: 'Title 1', description: ' Vertrauen Sie auf ATS UG für exzellentes Catering und herausragenden Service, der Ihre Veranstaltung zu einem unvergesslichen Ereignis macht.', image: '/nuernbergmesse.webp' },
          { title: 'Title 1', description:  'Vertrauen Sie auf ATS UG für exzellentes Catering und herausragenden Service, der Ihre Veranstaltung zu einem unvergesslichen Ereignis macht.', image: '/Bosch.png' },
          { title: 'Title 1', description:  'Vertrauen Sie auf ATS UG für exzellentes Catering und herausragenden Service, der Ihre Veranstaltung zu einem unvergesslichen Ereignis macht.', image: '/Maritim.jpg' },
          { title: 'Title 1', description:  'Vertrauen Sie auf ATS UG für exzellentes Catering und herausragenden Service, der Ihre Veranstaltung zu einem unvergesslichen Ereignis macht.', image: '/image17.webp' },
          { title: 'Title 1', description:  'Vertrauen Sie auf ATS UG für exzellentes Catering und herausragenden Service, der Ihre Veranstaltung zu einem unvergesslichen Ereignis macht.', image: '/Arena.jpg' }
      
      ],
      carouselPosition: 0,

         rectanglesData : [
          {
            id: 1,
            title: "     und heraus",
            text: "Wkräfte dürfnisse anpassen. "
          },
          {
            id: 2,
            title: "Teamkompetenz e",
            text: "Wir gen großen Werttierung."
          },
          {
            id: 3,
            title: "Flexibilität und Partnerschaft",
            text: "Wir stuationen animieren. "
          }
          // ... Vous pouvez ajouter plus d'objets ici
        ]
        
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
      }
    

    render() {
        const { carouselItems, carouselPosition,rectanglesData } = this.state;

        return (
            <div className="portfolio-page">
                {/* Section 1: Identique à la précédente implémentation */}
                <div className="section01">
                    <span className="dynamic-text">Ein kleiner Einblick in unsere Erfahrung</span>
                </div>

                {/* Section 2: Trois rectangles avec du texte */}
                              <div className="section02">
                <div className="rectangle-container">
                  {rectanglesData.map(rectangle => (
                    <div key={rectangle.id} className="rectangle">
                      <h2>{rectangle.title}</h2>
                      <p>{rectangle.text}</p>
                    </div>
                  ))}
                </div>
              </div>


                {/* Section 3: Texte à gauche, image à droite */}
                <div className="section03">
                    <div className="text-area">
                      <h2>Was können wir für sie tun ?</h2>
                      <p>Wir können.  ern.</p>
                    </div>
                    <img src="image22.webp" alt="Description" className="image-area" />
                  </div>

                  {/* Section 3: Texte à gauche, image à droite */}
                <div className="section003">
                
                    <img src="image19.webp" alt="Description" className="image-area" />
                  
                    <div className="text-area003">
                      <h3> Engagement für Qualität und Kundenzufriedenheit</h3>
                      <p1>Unser Fokus liegt auf der Einhaltung hoher Qualitätsstandards und der Sicherstellung der Kundenzufriedenheit in allen unseren Servicebereichen..</p1>
                      </div>
                      </div>


                      <div className="Test-page">
                      <div className="text-caroussel">
                      <h2>Partnerschaften</h2>
                      </div>
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
                      </div>       
            
        );
     }
  }
    

export default Portfolio;