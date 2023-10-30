import React, { Component } from 'react';
import './Portfolio.css'; // Importation du fichier CSS

class Portfolio extends Component {
    state = {
        dynamicNumber: 0, // Nombre pour l'animation de comptage
        carouselItems: [
          { title: 'Adidas AG', description: 'Description 1', image: '/image3.web' },
          { title: 'Hochzeit Wilbad', description: 'Description 2', image: '/image7.web' },
          { title: 'Titre 3', description: 'Description 3', image: '/image11.jp' },
          { title: 'Titre 4', description: 'Description 4', image: '/image4.web' },
          { title: 'Titre 5', description: 'Description 5', image: '/image14.web' },
          { title: 'Titre 6', description: 'Description 6', image: '/image16.web' },
          { title: 'Titre 7', description: 'Description 7', image: '/image17.web' },
          { title: 'Titre 8', description: 'Description 8', image: '/image19.web' }
      ],
        carouselPosition: 0,
         rectanglesData : [
          {
            id: 1,
            title: "Titre 1",
            text: "Wir sind die Firma all activity Group, Ihr kompetenter und flexibler Partner für alle Servicebereiche in der Gastronomie und im Einzelhandel. Wir bieten Ihnen qualifizierte und motivierte Servicekräfte für Ihre Veranstaltungen oder Projekte, die sich an Ihre individuellen Wünsche und Bedürfnisse anpassen. "
          },
          {
            id: 2,
            title: "Titre 2",
            text: "Wir verfügen über ein großes Team von Servicekräften, die über langjährige Erfahrung in verschiedenen Bereichen der Gastronomie wie Catering, Bankett und Verkauf verfügen. Wir legen großen Wert auf Hygiene, Sicherheit und Kundenorientierung."
          },
          {
            id: 3,
            title: "Titre 3",
            text: "Wir sind immer bereit, neue Herausforderungen anzunehmen und uns an unterschiedliche Situationen anzupassen. Wir arbeiten gerne mit Ihnen zusammen, um Ihren Servicebereich zu optimieren. "
          }
          // ... Vous pouvez ajouter plus d'objets ici
        ]
        
    };

    componentDidMount() {
        this.repeatCountEffect();
    }

    // Comptage dynamique pour la section 4
    repeatCountEffect() {
        this.countEffect();
        setInterval(this.countEffect, 15000);
    }

    countEffect = () => {
        this.setState({ dynamicNumber: 0 });
        const countUp = () => {
            if (this.state.dynamicNumber < 300) {
                this.setState(prevState => ({ dynamicNumber: prevState.dynamicNumber + 1 }));
                setTimeout(countUp, 10);
            }
        };
        countUp();
    };

    // Navigation du carrousel pour la section 5
   // Navigation du carrousel pour la section 5
navigateCarousel = (direction) => {
  // Obtient la largeur dynamique du premier élément du carrousel
  const carouselElement = document.querySelector('.carousel-container .carousel-item');
  const itemWidth = carouselElement ? carouselElement.offsetWidth : 0;

  const totalItems = this.state.carouselItems.length;
  let newPosition = this.state.carouselPosition + (direction * itemWidth);

  // Gestion du défilement en boucle
  if (newPosition < 0) {
    newPosition = (totalItems - 1) * itemWidth; // Aller au dernier élément
  } else if (newPosition >= totalItems * itemWidth) {
    newPosition = 0; // Revenir au premier élément
  }

  this.setState({ carouselPosition: newPosition });
};

    
   
    

    render() {
        const { dynamicNumber, carouselItems, carouselPosition,rectanglesData } = this.state;

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
                      <p>Wir können Ihnen professionelle und flexible Servicekräfte für Ihren Bankett-Service zur Verfügung stellen. Sie können die Anzahl und die Qualifikation der Servicekräfte bestimmen, die Sie benötigen. Wir kümmern uns um die Einarbeitung und die Koordination der Servicekräfte. Sie müssen sich nur um den Anbieter des Bankett-Services kümmern.</p>
                    </div>
                    <img src="image22.webp" alt="Description" className="image-area" />
                  </div>

                  {/* Section 3: Texte à gauche, image à droite */}
                <div className="section003">
                
                    <img src="image15.webp" alt="Description" className="image-area" />
                  
                    <div className="text-area003">
                      <h3> Engagement für Qualität und Kundenzufriedenheit</h3>
                      <p1>Unser Fokus liegt auf der Einhaltung hoher Qualitätsstandards und der Sicherstellung der Kundenzufriedenheit in allen unseren Servicebereichen..</p1>
                      </div>
                      </div>


                {/* Section 4: Compteur dynamique */}
                <div className="section04">
                    <div className="image-container">
                      <img src="image14.webp" alt="Description" />
                    </div>
                    <div className="dynamic-number-container">
                      <h2>Titre du Nombre Dynamique</h2>
                      <div className="dynamic-number">{dynamicNumber}</div>
                    </div>
                  </div>
                  </div>

                
              
            
        );
     }
  }
    

export default Portfolio;