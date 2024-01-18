import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {
  const [detail, setDeatil] = useState()
  const { id } = useParams()
  const fetchdetails = async () => {
    const res = await axios(`http://localhost:5000/dinners/${id}`)

    setDeatil(res.data)
  }
  useEffect(() => {
    fetchdetails()
  }, [])
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="DetailArea">
        <h1>Detail</h1>
        {
          detail ? <>
            <ul>
              <li>{detail.name}</li>
              <li>{detail.info}</li>
              <li>{detail.price}</li>
            </ul>
          </> : ''
        }
      </div>
    </div>
  )
}

export default Detail
