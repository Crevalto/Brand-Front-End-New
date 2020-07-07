import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import { Card } from 'react-bootstrap'
export default function Doughnutchart() {
 
        const datas={
            labels: ['Jan','Feb','Mar','Apr','May'],
            datasets:[
                {
                    label: 'Sales for 2020 (M)',
                    data : [3,2,2,1,5],
                 //   borderColor:['rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)'],
                    backgroundColor:['rgba(98, 11, 128, 1)','rgba(255, 99, 132, 1)','rgba(255, 205, 86, 1)','rgba(54, 162,235, 1)','rgba(153, 102, 255, 1)'],
                   // pointBackgroundColor:['rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)'],
                   // pointBorderColor:['rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)','rgba(98, 11, 128, 0.3)']
                }
            ]
        }
        const option={
            title:{
                display:true,
                text:'Doughnut Chart'
            }
        }

 
        return(
            <div>
               
                <Doughnut data={datas} options={option}/>
               
            </div>
        )
    }
