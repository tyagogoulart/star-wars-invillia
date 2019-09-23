import React from 'react'

import { Badge, UncontrolledTooltip } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import StringToSlug from '../util/slug'
import PeopleStarships from '../containers/PeopleStarships'
import PeopleFilms from '../containers/PeopleFilms'

const CountBadge = ({people, type, length, icon, message, color, modal}) => {
    const peopleNameSlug = StringToSlug(people.name)

    function renderComponent() {
        if (type === 'starships') {
            return PeopleStarships
        } else if (type === 'films') {
            return PeopleFilms
        }
    }

    return (
        <span className="h5">
            <Badge 
                className="mr-2 count-badge" 
                color={color} 
                id={`${peopleNameSlug}-${type}`}
                onClick={
                    length > 0
                        ? () => modal(`${people.name} ${type}`, people, renderComponent())
                        : () => ''
                }
            >
                <FontAwesomeIcon 
                    icon={icon} 
                    className="mr-1"
                /> 
                {length}
            </Badge>

            <UncontrolledTooltip 
                placement="top" 
                target={`${peopleNameSlug}-${type}`}
            >
                {message}
            </UncontrolledTooltip>
        </span>
    )
}
 
export default CountBadge