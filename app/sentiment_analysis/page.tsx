'use client'
import React, { useState } from 'react'
import axios from 'axios'

const SentimentAnalysisPage = () => {
  const [text, setText] = useState('')
  const [prediction, setPrediction] = useState('')
  const [score, setScore] = useState('')

  const predictSentiment = async (e: any) => {
    e.preventDefault()

    if (text && text.length > 0) {
      const response = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        url: 'http://localhost:8080/nlp/sentiment-reviews',
        data: {
          'review': text
        }
      })

      if (response && response.data && response.data.error_message === 'Success') {
        setPrediction(response.data.prediction_results)
        setScore((response.data.score * 100).toString())
      }
    }
  }

  return (
    <>
      <header className='header-ml'>
        <h1>Sentiment Analysis with Bert Model</h1>
      </header>
      <div className='bg-ml'>
        <form action='' className='form-ml'>
          <input
            type='text'
            name='text'
            onChange={(e) => { setText(e.target.value) }}
            className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'
          />
          <button
            type="submit"
            onClick={predictSentiment}
            className="sbmtBtnMl"
          >
            Submit
          </button>
        </form>
      </div>
      {prediction && score ?
        <div className='bg-ml'>
          <div className='form-ml'>
            <h2>Prediction Result:</h2>
            {prediction ? prediction : ''}
            <h2>Prediction Score:</h2>
            {score ? score + '%' : ''}
          </div>
        </div> : <></>
      }
    </>
  )
}

export default SentimentAnalysisPage