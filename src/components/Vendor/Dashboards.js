import React,{Fragment} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import{Row,Col,Card}from 'react-bootstrap'
import BarExample from './horizontalBar'
import Doughnutchart from './Pie'
import Pie from './Pies'
import MixExample from './mix'
import './dash.css'

export default class ChartJsCircular extends React.Component {
        render() {
            return (<div className="backgrnd" style={{paddingBottom:'2rem',paddingTop:'7rem'}}>
                <Fragment>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="TabsAnimation"
                        transitionAppear={true}
                        transitionAppearTimeout={0}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <Row className="pad" >
                            <Col lg="6"  style={{paddingBottom:'2rem'}}>
                                <Card className="main-card mb-3"className="designs">
                                <Card.Body>
                                    <Card.Title className="designss">Barchart</Card.Title>
                                        <BarExample/>
                                </Card.Body>   
                                </Card>
                            </Col>
                            <Col lg="6" style={{paddingBottom:'2rem'}}>
                                <Card className="main-card mb-3"className="designs">
                                    <Card.Body>
                                    <Card.Title className="designss">Line Chart</Card.Title>
                                        <MixExample/> 
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card className="main-card mb-3"className="designs">
                                    <Card.Body>
                                        <Card.Title className="designss">Doughnutchart</Card.Title>
                                        <Doughnutchart/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card className="main-card mb-3"className="designs">
                                <Card.Body>
                                        <Card.Title className="designss">Doughnut</Card.Title>
                                        <Pie/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </ReactCSSTransitionGroup>
                </Fragment>
    
                </div>        );
        }
    }
    