import React, { Component } from "react";

export class UPI extends Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <span class="anchor" id="formChangePassword"></span>
            <hr class="mb-5"></hr>

            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">UPI Payment</h3>
              </div>
              <div class="card-body">
                <form autocomplete="off" class="form" role="form">
                  <div class="form-group">
                    <label for="inputPasswordOld">Enter UPI ID</label>
                    <input
                      class="form-control"
                      id="inputPasswordOld"
                      required=""
                      type="password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPasswordNew">Enter UPI PIN</label>
                    <input
                      class="form-control"
                      id="inputPasswordNew"
                      required=""
                      type="password"
                    />
                  </div>

                  <div class="form-group">
                    <button
                      class="btn btn-success btn-lg float-right"
                      type="submit"
                    >
                      Proceed
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UPI;
