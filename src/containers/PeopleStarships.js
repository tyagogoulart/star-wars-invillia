import React from 'react'
import StarshipCard from '../components/StarshipCard';
import { Row, Col } from 'reactstrap';

const PeopleStarships = ({people}) => {
    return (
        <Row>
            {people.starships.map(starship => (
                <Col key={starship} sm="6">
                    <StarshipCard starshipUrl={starship} />
                </Col>
            )
            )}
        </Row>
    )
}
 
export default PeopleStarships