import React, { useEffect, useState } from 'react'

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import HeaderTop from '../components/HeaderTop'
import { getPeople } from '../api/swapi'
import Peoples from '../components/Peoples'
import DetailModal from '../components/DetailModal'

const Home = () => {
    const [peoples, setPeoples] = useState([])
    const [peoplesCount, setPeoplesCount] = useState(0)
    const [nextPage, setNextPage] = useState('')
    const [previousPage, setPreviousPage] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState({})

    useEffect(() => {
        getPeoples()
    }, [])

    function getPeoples(paginate) {
        return getPeople(paginate)
            .then(res => {
                setPeoples(res.data.results)
                setPeoplesCount(res.data.count)
                setNextPage(res.data.next)
                setPreviousPage(res.data.previous)
            })
    }

    function openModal(title, people, Component) {
        setModalInfo({title, people, Component})
        setIsModalOpen(true)
    }

    return ( 
        <Container fluid className="mb-4">
            <DetailModal 
                    isModalOpen={isModalOpen} 
                    setIsModalOpen={setIsModalOpen}
                    title={modalInfo.title}
                    people={modalInfo.people}
                    Component={modalInfo.Component}
                />
            <Row>
                <Col className="px-0">
                    <HeaderTop />
                </Col>
            </Row>
            {peoples.length === 0 && (
                <Row>
                    <Col className="text-center">
                        <h4 className="text-white">Loading peoples...</h4>
                    </Col>
                </Row>
            )}
            {peoples.length > 0 && (
                <React.Fragment>
                    <Container>
                        <Row>
                            <Col className="mb-4">
                                <h3 className="text-white peoples">
                                    Peoples
                                    <small className="float-right mt-2">
                                        {peoplesCount} peoples found
                                    </small>
                                </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Peoples peoples={peoples} modal={openModal} />
                        </Row>
                        <Row>
                            <Col>
                                {nextPage && 
                                    <Button 
                                        
                                        color="warning"
                                        className="float-right"
                                        onClick={() => getPeoples(nextPage)}
                                    >
                                        Next Page
                                    </Button>
                                }
                                {previousPage && 
                                    <Button 
                                        outline 
                                        color="warning"
                                        className="float-right mr-2"
                                        onClick={() => getPeoples(previousPage)}
                                    >
                                        Previous Page
                                    </Button>
                                }
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            )}
        </Container>
    )
}
 
export default Home