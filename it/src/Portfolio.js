import React, { Component } from 'react';
import './Portfolio.css'; // Importation du fichier CSS

class Portfolio extends Component {
    state = {
        dynamicNumber: 0, // Nombre pour l'animation de comptage
        carouselItems: [
          { title: 'Adidas AG', description: " Unser Partnerschaft mit der Firma All-Activity-Group ist zukunftsweisend, da der Service immer professionell und hochwertig erbracht wird. Wir können nur Unternehmen wie dieses unterstützen, die sich der Suche nach Exzellenz verschrieben haben. Was wir bei ihnen tun, ist nicht nur die Bereitstellung von Personal für Bankett-Service und Empfang, sondern wir decken alle Dienstleistungen ab. Diese ganzheitliche Betreuung hebt unser Engagement für Qualität und herausragenden Service hervor.", image: '/adiddas.png' },
          { 
            title: "Bad Wildbad", description: 'Von der sorgfältigen Planung bis zur Ausführung, jedes Element wird sorgsam berücksichtigt. Wir bieten eine vielseitige Auswahl an Speisen und Getränken, die sorgfältig von unseren erfahrenen Köchen zubereitet werden. Unser Ziel ist es, nicht nur Ihren Gaumen zu erfreuen, sondern auch ein sensorisches Gesamterlebnis zu bieten.', image: '/image7.webp' },
          { title: 'Flughafen München', description: 'Unsere stilvollen Veranstaltungsräume bieten die perfekte Kulisse für jegliche Anlässe, sei es eine elegante Hochzeit, ein formelles Geschäftstreffen oder eine gesellige Familienfeier. Mit modernster Ausstattung und einem Ambiente, das Eleganz und Komfort vereint, sorgen wir dafür, dass Ihre Veranstaltung reibungslos und stilvoll abläuft.', image: '/munich.jpg' },
          { title: 'Messe Nürnberg', description: ' All-activity-group UG stehen für außergewöhnliche Events und hervorragenden Service. Für kulinarische Höhepunkte und perfekte Gastlichkeit, unsere Empfehlung.', image: '/nuernbergmesse.webp' },
          { title: 'Bosch Firmen Jubiläum', description:  'als langjähriger Catering-Partner von Bosch empfehlen wir All-activity-group für erstklassige Bankettservices. Ihre Professionalität und Detailtreue bei Events spiegeln Bosch’s Anspruch an Qualität und Innovation wider. All-activity-group steht für exzellente Gastronomie und zuverlässige Eventbetreuung.', image: '/Bosch.png' },
          { title: 'Maritime Hotels', description:  'für unvergessliche Veranstaltungen empfehlen wir die All-activity-group. Mit exquisitem Catering und erstklassigem Service setzen sie Maßstäbe in der Eventgastronomie.', image: '/Maritim.jpg' },
          { title: 'Vineria Restaurant', description:  'Entdecken Sie mit den All-activity-group UG exzellente Banketts und herausragenden Service – unsere Garantie für Ihr Eventerlebnis.', image: '/image17.webp' },
          { title: 'Nürnberg Arena', description:  'Vertrauen Sie auf All-activity-Group für exzellentes Catering und herausragenden Service, der Ihre Veranstaltung zu einem unvergesslichen Ereignis macht.', image: '/Arena.jpg' }
      
      ],
      carouselPosition: 0,

         rectanglesData : [
          {
            id: 1,
            title: " Ihr Partner für maßgeschneiderten Service in Gastronomie und Einzelhandel",
            text: "Wir sind die Firma all activity Group, Ihr kompetenter und flexibler Partner für alle Servicebereiche in der Gastronomie und im Einzelhandel. Wir bieten Ihnen qualifizierte und motivierte Servicekräfte für Ihre Veranstaltungen oder Projekte, die sich an Ihre individuellen Wünsche und Bedürfnisse anpassen. "
          },
          {
            id: 2,
            title: "Teamkompetenz in der Gastronomie",
            text: "Wir verfügen über ein großes Team von Servicekräften, die über langjährige Erfahrung in verschiedenen Bereichen der Gastronomie wie Catering, Bankett und Verkauf verfügen. Wir legen großen Wert auf Hygiene, Sicherheit und Kundenorientierung."
          },
          {
            id: 3,
            title: "Flexibilität und Partnerschaft",
            text: "Wir sind immer bereit, neue Herausforderungen anzunehmen und uns an unterschiedliche Situationen anzupassen. Wir arbeiten gerne mit Ihnen zusammen, um Ihren Servicebereich zu optimieren. "
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
                      <p>Wir können Ihnen professionelle und flexible Servicekräfte für Ihren Bankett-Service zur Verfügung stellen. Sie können die Anzahl und die Qualifikation der Servicekräfte bestimmen, die Sie benötigen. Wir kümmern uns um die Einarbeitung und die Koordination der Servicekräfte. Sie müssen sich nur um den Anbieter des Bankett-Services kümmern.</p>
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