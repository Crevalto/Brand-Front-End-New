import React from 'react'
import Pie from 'react-chartjs-2'
import {Card} from 'react-bootstrap' 
import {Row,Col} from "react-bootstrap"
import "./dash.css"
const data = {
	labels: [
        'Shirts',
        'Pants',
        'Shoes'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#8dace7',
		'#71deb9',
		'#ef869e'
		],
		hoverBackgroundColor: [
		'#8dace7',
		'#71deb9',
		'#ef869e'
		]
	}]
};

class Dash extends React.Component {

    render() {
        return (
			<div><Row className="pad" >
                            <Col lg="6"  style={{paddingBottom:'2rem'}}>
                                <Card className="main-card mb-3"className="designs">
                                <Card.Body>
                                    <Card.Title className="designss">Barchart</Card.Title>
                                        <Pie dataKey="value" data={data} />
			                    </Card.Body>   
                                </Card>
                            </Col>
            <Col lg="6"  style={{paddingBottom:'2rem'}}>
                                <Card className="main-card mb-3"className="designs">
                                <Card.Body>
                                    <Card.Title className="designss">Barchart</Card.Title>
                                        <Pie dataKey="value" data={data} />
			                    </Card.Body>   
                                </Card>
                            </Col>
</Row>
            </div>
        )
    }
}
export default Dash;