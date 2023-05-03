import Card from 'react-bootstrap/Card';
import doggy from '../Assets/doggy 1.svg'
import marketplace from '../Assets/marketplace.svg'
import larecette from '../Assets/LaRecette.svg'
import caritas from '../Assets/caritas.svg'
import Carousel from 'react-bootstrap/Carousel';


function CardsCarousel() {
    return(
        <>
        <Carousel>
            {/* <Container>
                <Row className='justify-content-md-center align-items-center gap-3'> */}
                    <Carousel.Item className='carousel'>
                        {/* <Col md="auto"> */}
                                <Card className='card' style={{ width: '22rem' }}>
                                    <Card.Img src={doggy}/>
                                    <Card.Body>
                                        <Card.Title className='card-title'>Doggy</Card.Title>
                                        <Card.Text className='card-text'>
                                            StartUp Web Page. VSC, HTML, CSS, Responsive Design ,Git + GitHub, Figma, UX Design principles, Trello, Agile Methodologies

                                        </Card.Text>
                                    </Card.Body>                
                                </Card>
                        {/* </Col> */}
                    </Carousel.Item>
            
                    <Carousel.Item className='carousel'>
                        {/* <Col md="auto"> */}
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img src={marketplace}/>
                                        <Card.Body>
                                            <Card.Title>Free Adventures</Card.Title>
                                            <Card.Text>
                                            Marketplace. VSC, HTML, CSS, Responsive Design,Javascript ,Git + GitHub, Figma, Balsamiq, Trello, 
                                            Agile Methodologies 
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                        {/* </Col> */}
                    </Carousel.Item>

                    <Carousel.Item className='carousel'>
                        {/* <Col> */}
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img src={larecette}/>
                                    <Card.Body>
                                        <Card.Title>La Recette</Card.Title>
                                        <Card.Text>
                                            Social Media Web-Application. VSC, HTML, CSS, Figma, React, Typescript, 
                                            Tailwind, MongoDB/MySQL, Git+GitHub, nodeJS - express. Trello, Agile Methodologies
                    
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        {/* </Col> */}
                    </Carousel.Item>

                    <Carousel.Item className='carousel'>    
                        {/* <Col> */}
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img className='caritas' src={caritas}/>
                                    <Card.Body className='card-body'>
                                        <Card.Title>Habit+ Caritas/Bayer</Card.Title>
                                        <Card.Text>
                                            Health Habits Web-Application. VSC, HTML, CSS, Figma, Balsamiq, React, 
                                            Typescript, Tailwind ,MongoDB, Git + GitHub, Back-end: nodeJS, NestJS. 
                                            Trello, Agile Methodologies
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        {/* </Col> */}
                    </Carousel.Item>
                    {/* </Row>
                </Container> */}
        </Carousel>
    </>
    );
}

export default CardsCarousel;