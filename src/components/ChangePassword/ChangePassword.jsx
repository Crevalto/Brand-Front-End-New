import React, { Component } from "react";
import "./ChangePassword.css";
export class ChangePassword extends Component {
  render() {
    return (
      <div paddertop>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <span class="anchor" id="formChangePassword"></span>
            <hr class="mb-5"></hr>

            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Change Password</h3>
              </div>
              <div class="card-body">
                <form autocomplete="off" class="form" role="form">
                  <div class="form-group">
                    <label for="inputPasswordOld">Current Password</label>
                    <input
                      class="form-control"
                      id="inputPasswordOld"
                      required=""
                      type="password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPasswordNew">New Password</label>
                    <input
                      class="form-control"
                      id="inputPasswordNew"
                      required=""
                      type="password"
                    />
                    <small class="form-text text-muted" id="passwordHelpBlock">
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="inputPasswordNewVerify">Verify</label>
                    <input
                      class="form-control"
                      id="inputPasswordNewVerify"
                      required=""
                      type="password"
                    />
                    <span class="form-text small text-muted">
                      To confirm, type the new password again.
                    </span>
                  </div>
                  <div class="form-group">
                    <button
                      class="btn btn-success btn-lg float-right"
                      type="submit"
                    >
                      Save
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

export default ChangePassword;
