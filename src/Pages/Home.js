import React, { useState } from 'react'
import './home.css'

export default function Home({ updateCorp, searchResult, setSearchResult, setCorps, corps, filteredCorps, search, handleSearch }) {
    const [cds, setCds] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        // Set Corps
        const filtered = corps.filter((corp) =>
            corp.stateCode.toLowerCase().includes(search.toLowerCase())

        )
        // put the search result in SetSearchResult
        setSearchResult(filtered)

        // console.log(filtered);
    }
    console.log(searchResult);

    const handleCDS = (e)=>{
        e.preventDefault()

    }
    return (
        <div className='home'>
            <form onSubmit={handleSubmit}>
                <input
                    className='input-field'
                    type ='text'
                    required
                    placeholder='Enter Your State Code'
                    value={search}
                    onChange={handleSearch}
                    minLength={11}
                />
                <button>Submit</button>
            </form>
            <div className='form-output'>
                { 
                searchResult.map((corp) => (
                        <div key={corp.id}>
                            <p>Name: {corp.name}</p>
                            <p>PPA: {corp.ppa}</p>
                            {
                                !corp.cds == '' ? <p>CDS: {corp.cds}</p>
                                : <div>
                                <label>CDS: </label>
                                <input
                                    type='text'
                                    value={cds}
                                    onChange={(e)=> setCds(e.target.value)}
                                />
                                <button onClick={e => {
                                        updateCorp(cds, corp.id)}}>
                                    enter
                                </button>
                                {/* <input          
                                    value={corp.cds}
                                    onChange={e => {
                                        updateCorp(e.target.value, corp.id)
                                    }}
                                /> */}
                                
                            </div>
                            }
                            {/* <p>CDS: {corp.cds}</p> */}
                            {/* <div>
                                <label>CDS: </label>
                                <input               
                                    value={corp.cds}
                                    onChange={e => {
                                        updateCorp(e.target.value, corp.id)
                                    }}
                                />
                                
                            </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
