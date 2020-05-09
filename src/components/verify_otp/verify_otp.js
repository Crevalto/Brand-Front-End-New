import React from 'react';
//import ReactPlayer from 'react-player'
import './verify.css'


function Home() {
  return (
    <div className="verify_otp paddertop">
      <div class="row">
          <div class="col-md-3">
          </div>
          <div class="col-md-6">
            <div class="card-mail">
                <h1>* * * *</h1>
                <h2>VERIFY OTP</h2>
                <p>Check your autorized mail for OTP or proceed to verify later</p>
                <div class="row">
                  <form>
                    <input type="number" placeholder="0"/>
                    <input type="number" placeholder="0"/>
                    <input type="number" placeholder="0"/>
                    <input type="number" placeholder="0"/>
                  </form>
                </div>
                <p id="status"></p>
                <div class="row">
                  <div class="col-md-1">

                  </div>
                  <div class="col-md-5">
                    <button class="btn">Resend</button>
                  </div>
                  <div class="col-md-5">
                    <button class="btn">Later</button>
                  </div>
                </div>
            </div>
          </div>
          <div class="col-md-3">

          </div>
      </div>
    </div>
  );
}
export default Home;
