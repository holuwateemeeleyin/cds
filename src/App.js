import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'


function App() {
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [corps, setCorps] = useState(getInitialCorps())

  useEffect(()=>{
    const temp = JSON.stringify(corps)
    localStorage.setItem('corps', temp)
  },[corps])

  function getInitialCorps () {
    const temp = localStorage.getItem('corps')
    const savedTemp = JSON.parse(temp)
    return savedTemp || [
      {
        id:'1',
        stateCode:'OG/21C/6320',
        name:'Abegunde Samuel',
        ppa:'NLPC Pension',
        cds:'ICT'
      },
      {
        id:'2',
        stateCode:'OG/22C/6325',
        name:'John Doe',
        ppa:'NLPC Pension',
        cds:''
      },
      {
        id:'3',
        stateCode:'OG/22B/6698',
        name:'Oluwatimileyin James',
        ppa:'NLPC Pension',
        cds:''
      },
      {
        id:'4',
        stateCode:'OG/21C/6843',
        name:'Timi Jacobs',
        ppa:'NLPC Pension',
        cds:''
      },
      {
        id:'5',
        stateCode:'OG/21C/6329',
        name:'Victoria Island',
        ppa:'NLPC Pension',
        cds:''
      },
    ]
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 2000)
    return()=> clearTimeout(timer)
  })

  const filteredCorps = corps.filter((corp)=>
    corp.stateCode.toLowerCase().includes(search.toLowerCase())
  )
  const handleSearch =(e)=>{
    setSearch(e.target.value)
  }

  // Update CDS

  const updateCorp = (updateCDS, id)=> {
    setCorps(
      corps.map((corp)=>{
        if(corp.id === id){
          corp.cds = updateCDS
        }
        return corp
      })
    )
  }

  if (loading){
    return <div className='loading'></div>
  }

  return (
    <div className='app'>
      <Routes>
        <Route
          exact path='/' 
          element={<Home 
            corps={corps}
            search={search}
            filteredCorps={filteredCorps}
            handleSearch={handleSearch}
            setCorps={setCorps}
            setSearchResult={setSearchResult}
            searchResult={searchResult}
            updateCorp={updateCorp}
          />}
        />
    </Routes>
    </div>
  );
}

export default App;