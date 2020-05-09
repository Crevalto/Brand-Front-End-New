import './greeting.css'

import React from 'react'

export default function greeting () {


   function  element_scroll ()  {
        setTimeout(function(){
            document.getElementById("fullpage").style.marginTop="30px !important";
            console.log("suuu");
            setTimeout(function(){document.getElementById("headers").style.background="#620B80";}, 800);
        }, 100);

      }


     return (<div class="greeting-body  paddertop">
            <div onload={element_scroll()}>
                <div class="row" id="fullpage">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <h1 id="headers">THANK YOU FOR <br/><span>CONTRIBUTING</span></h1>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>
        )
    }
