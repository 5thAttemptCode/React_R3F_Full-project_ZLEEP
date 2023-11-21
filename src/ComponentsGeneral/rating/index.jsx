import React, { useState } from 'react'
import './style.css'

import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { auth, db } from '../../utils/firebase.config'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'


const RatingSize = () => {

  const [ comment, setComment ] = useState("")
  const [ rating, setRating ] = useState(0)
  const [ name, setName] = useState("")

  const ratingsCollectionsRef = collection(db, "feedback")
  let navigate = useNavigate()

  const createRating = async (e) => {
    e.preventDefault();
    await addDoc(ratingsCollectionsRef, {
      comment,
      rating,
      name,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });
    navigate('/');
  }

  return (
    <Stack className='rating content-box' spacing={1}>
      <h2>Give us feedback</h2>
      <br />
      <Rating
        required
        className='stars'
        defaultValue={0}
        precision={0.5}
        size="large"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />

      <br />

      <form onSubmit={createRating}>
        <label>Enter your name</label>
        <input 
          required 
          type="text" 
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }} 
        />

        <br />

        <label htmlFor="textarea">Leave a comment</label>
        <textarea
          required
          name="textarea"
          cols="30"
          rows="10"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        ></textarea>

        <br />

        <button type="button" onClick={createRating}>Submit</button>
      </form>
    </Stack>
  )
}

export default RatingSize;