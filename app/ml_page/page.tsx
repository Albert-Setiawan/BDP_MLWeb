'use client'
import React, { useState } from 'react'
import axios from 'axios'

export default function ml_page() {

    const SentimentAnalysisPage = () => {
        const [text, setText] = useState('')
        const [prediction, setPrediction] = useState('')
       
        const predictSentiment = async () => {
          const response = await axios({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/predict-attrition',
            data: {
              "Age": 31,
              "BusinessTravel": 1.0,
              "Department": 2.0,
              "EducationField": 1.0,
              "EnvironmentSatisfaction": 2,
              "JobInvolvement": 1,
              "JobLevel": 1,
              "JobRole": 8.0,
              "JobSatisfaction": 3,
              "MonthlyIncome": 1359,
              "NumCompaniesWorked": 1,
              "OverTime": 0.0,
              "StockOptionLevel": 0,
              "TotalWorkingYears": 1,
              "WorkLifeBalance": 3,
              "YearsAtCompany": 1,
              "YearsInCurrentRole": 0,
              "YearsSinceLastPromotion": 0,
              "YearsWithCurrManager": 0
            }
          })
          setPrediction(response.data.prediction_results)
        }
    }

    return (
        <>
            <h1 className="header-ml">Input Passenger Data</h1>
            <div className="bg-ml">
            <form action="" className="form-ml">
                
                <div>
                    <label>Passenger Class</label>
                    <input type="number" id="exampleFormControlInput1" placeholder="" name="pasClass"/>
                </div>

                <div>
                    <label>Name</label>
                    <input type="text" id="exampleFormControlInput1" placeholder="" name="pasName"/>
                </div>

                <div>
                    <label>Sex</label>
                    <select name="pasSex" id="">
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>

                <div>
                    <label>Number of Sibling(s) and Spouse(s)</label>
                    <input type="number" name="pasSibp"/>
                </div>

                <div>
                    <label>Number of Parent and Children</label>
                    <input type="number" name="pasParch"/>
                </div>

                <div>
                    <label>Fare</label>
                    <input type="text" name="pasFare"/>
                </div>

                <div>
                    <label>Cabin</label>
                    <input type="text" name="pasCab"/>
                </div>

                <div>
                    <label>Embarked</label>
                    <select name="pasEmb" id="">
                        <option value='S'>S</option>
                        <option value='Q'>Q</option>
                        <option value='C'>C</option>
                        <option value='?'>None</option>
                    </select>
                </div>

                <div>
                    <label>Boat</label>
                    <input type="text" name="pasBoat"/>
                </div>
                <div>
                    <label>Body</label>
                    <input type="number" name="pasBod"/>
                </div>

                <div>
                    <label>Destination</label>
                    <input type="text" name="pasDes"/>
                </div>
                <button type="submit" className="sbmtBtnMl">Submit</button>
                
            </form>

            <div className="pred-res">
                <h2>Prediction Result</h2>
                <div className="ml-res">
                    <h5 className="ml-res-txt">Hidup</h5>
                </div>
            </div>

            </div>


        </>
    )
}