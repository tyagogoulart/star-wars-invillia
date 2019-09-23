import React from 'react'

import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardText
} from 'reactstrap'
import { faSpaceShuttle, faVideo } from '@fortawesome/free-solid-svg-icons'

import CountBadge from './CountBadge'
import peopleImages from '../util/peopleImages'

const PeopleCard = ({ people, modal }) => {

    const starshipCountMessage = (
        people.starships.length > 0 
            ? `${people.name} has already flown ${people.starships.length} starships. Click to see them.`
            : `${people.name} didn't fly starships.`
    )

    const filmsCountMessage = (
        people.films.length > 0 
            ? `${people.name} has participated in ${people.films.length} films. Click to see them.`
            : `${people.name} has not participated in films.`
    )

    const aboutText = (
        people.gender !== 'n/a' && people.gender !== 'none'
        ? `${people.name} is a ${people.gender}, ${people.height}cm tall, ${people.mass}kg, ${people.skin_color}-skinned${' '}
        ${people.hair_color} with ${people.eye_color} eyes`
        : `A ${people.skin_color}-skinned robot, ${people.height}cm tall, weighing ${people.mass}kg and ${people.eye_color} eyes`
    )

    function getImage() {
        let image = peopleImages.filter((image) =>
            image.name == people.name 
        )
        if (image.length > 0) {
            return image[0].path
        }
    }   

    return (
        <Card className="border-0">
            {getImage() && 
                <CardImg top src={getImage()} height="150px" alt={`Foto do personagem ${people.name}`} />
            }
            <CardBody>
                <CardTitle className="h5">{people.name}</CardTitle>
                <CardText>
                    {aboutText}
                </CardText>

                <CountBadge 
                    type="starships"
                    people={people}
                    length={people.starships.length}
                    icon={faSpaceShuttle}
                    message={starshipCountMessage}
                    color="secondary"
                    modal={modal}
                />

                <CountBadge 
                    type="films"
                    people={people}
                    length={people.films.length}
                    icon={faVideo}
                    message={filmsCountMessage}
                    color="warning"
                    modal={modal}
                />
                
            </CardBody>
            
        </Card>
    )
}
 
export default PeopleCard