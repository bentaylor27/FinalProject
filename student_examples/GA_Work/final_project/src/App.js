import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Concert from './components/Concert'
import seed from './seed'
import './App.css'
import { Router } from 'react-router-dom'


//// express router breaks code and seeded data....working on fix
// const express = require('express')
// const router = express.Router()
// const Concert = require('./components/Concert')


function App() {
  // constructor(props)
  // super(props)
  // this.state = {

  // }

  const [initialData, setInitialData] = useState([{}])

  // Seeded data
  // app.get('/seed', (req, res) => {
  //   Concert.create(seed, (error, createdSeed) => {
  //     if (error) {
  //       res.status(400).json({error: error.message})
  //     }
  //     res.status(200).json(createdSeed)
  //   })
  // })

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  }, []);

    return (
      <div className='app'>
        <Header />
        <main className='body'>
          <SearchForm />
          <Concert />
          <a href='https://archive.org/details/gd73-03-24.sbd.bertha-ashley.25508.sbeok.shnf' target='_blank'>{initialData.date}</a> 
            <p>{initialData.venue}</p>
            <p>{initialData.location}</p>
        </main>
      </div>
    )
}

export default App;

