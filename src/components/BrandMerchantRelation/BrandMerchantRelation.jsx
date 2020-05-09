import React, { Component } from 'react'
import './BrandMerchantRelation.css'
import image from '../images/item.png'
import image1 from '../images/thumbnail.png'
export class BrandMerchantRelation extends Component {
    render() {
        return (
            <div>
	<div id="vdiv">
		<div class="form-group">
			<div class="form-row">
				<div class="form-group col-md-4">
					<h1>Merchant Name</h1>
					<video width="600" height="300" src="#" poster={image1} controls>
						Your browser does not support the video tag.
					</video>
				</div>
				<div class="form-group col-md-2">
	
				</div>
				<div class="form-group col-md-6">
					<h3>PURCHASE SUMMARY</h3>
					<div class="hscroll" style={{backgroundColor:"white"}}>
						<div style={{display:"inline-block"}}>
							<div>
								<label>Item Name</label>
							</div>
							<div>
								<img src={image} alt="..." class="thumbnail"/>
							</div>
							<div>
								<br/>
                                <br/>
								<label class="textBold">310</label>
								<label> items purchased</label><br/>
								<label class="textBold">564</label>
								<label> families directly impacted</label><br/>
								<label class="textBold">₹ 5000.00/-</label>
							</div>
						</div>
                        <div style={{width:"1PX"}}>
                        </div>
						<div style={{display:"inline-block"}}>
							<div>
								<label>Item Name</label>
							</div>
							<div>
								<img src={image} alt="..." class="thumbnail"/>
							</div>
							<div>
								<br/>
                                <br/>
								<label class="textBold">310</label>
								<label> items purchased</label><br/>
								<label class="textBold">564</label>
								<label> families directly impacted</label><br/>
								<label class="textBold">₹ 5000.00/-</label>
							</div>
						</div>
                        <div style={{width:"1PX"}}>
                        </div>
						<div style={{display:"inline-block"}}>
							<div>
								<label>Item Name</label>
							</div>
							<div>
								<img src={image} alt="..." class="thumbnail"/>
							</div>
							<div>
								<br/>
                                <br/>
								<label class="textBold">310</label>
								<label> items purchased</label><br/>
								<label class="textBold">564</label>
								<label> families directly impacted</label><br/>
								<label class="textBold">₹ 5000.00/-</label>
							</div>
						</div>
                        <div style={{width:"1PX"}}>
                        </div>
						<div style={{display:"inline-block"}}>
							<div>
								<label>Item Name</label>
							</div>
							<div>
								<img src={image} alt="..." class="thumbnail"/>
							</div>
							<div>
								<br/>
                                <br/>
								<label class="textBold">310</label>
								<label> items purchased</label><br/>
								<label class="textBold">564</label>
								<label> families directly impacted</label><br/>
								<label class="textBold">₹ 5000.00/-</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div class="form-row">
				<div class="form-group col-md-5">
					<div class="hscroll">
						<div>
							<video width="250" height="150" src="#" poster={image1}>
								video tag
							</video>
						</div>
						<div>
							<video width="250" height="150" src="#" poster={image1}>
								video tag
							</video>
						</div>
						<div>
							<video width="250" height="150" src="#" poster={image1}>
								video tag
							</video>
						</div>
						<div>
							<video width="250" height="150" src="#" poster={image1}>
								video tag
							</video>
						</div>
					</div>
                    <button class="btn btn-success btn-block" style={{backgroundColor:"#610B80"}}>DOWNLOAD ALL</button>
				</div>
				<div class="form-group col-md-1">
					
				</div>
				<div class="form-group col-md-6">
					<div style={{backgroundColor:"#f1f9ff",width:"100%",height:"150%",marginTop:"-10%"}}>
						chat box
					</div>
				</div>
			</div>
			</div>
		</div>
</div>
        )
    }
}

export default BrandMerchantRelation

