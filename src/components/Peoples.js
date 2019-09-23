import React from 'react'

import { Col } from 'reactstrap'

import PeopleCard from './PeopleCard'

const Peoples = ({ peoples, modal }) => {
    return (
        peoples.map(
            (people) => (
                <Col key={people.name} sm="3" className="mb-4">
                    <PeopleCard
                        people={people}
                        modal={modal}
                    />
                </Col>
            )
        )
    )
}
 
export default Peoples