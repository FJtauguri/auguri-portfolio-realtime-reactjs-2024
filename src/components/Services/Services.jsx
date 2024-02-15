import React from 'react'
import "./services.css"
import img1 from '../../collateral/services/programming.jpg'
import img2 from '../../collateral/services/TS.jpg'
import img3 from '../../collateral/services/uiux.jpg'
import img4 from '../../collateral/services/graphicdesign.jpg'

const servicesLists = [
    {
        id: 1,
        image: img1,
        title: "Programming",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        image: img2,
        title: "Technical Support",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        image: img3,
        title: "UI/UX Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        image: img4,
        title: "Graphic Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const Services = () => {
  return (
    <section className="services section">
        <h2 className="services-section-title">Service <span className="services-section-title-line"></span></h2>
        <div className="services-container">
            {servicesLists.map(({id, image, title, desc}) => {
                return (
                    <div className="services-card-id" key={id}>
                        <img className="services-image" src={image} alt=''/>
                        <h3 className="services-title">{title}</h3>
                        <p className="services-description">{desc}</p>
                    </div>
                );
            }

            )}
        </div>
    </section>
  )
}

export default Services