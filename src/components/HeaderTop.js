import React from 'react'

import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

const HeaderTop = () => {
    return ( 
        <Navbar color="dark" dark expand="md" className="mb-4">
            <Container>
                <NavbarBrand href="/">
                    <FontAwesomeIcon icon={faJedi} className="mr-2" /> 
                    Star Wars
                </NavbarBrand>
            </Container>
        </Navbar>
     )
}
 
export default HeaderTop