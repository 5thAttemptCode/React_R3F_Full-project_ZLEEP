import * as React from 'react'
import './style.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'


export default function RatingSize() {
  return (
    <Stack className='rating content-box' spacing={1}>
      <h2>Give us feedback</h2>
      <br />
      <Rating className='stars' name="size-large" defaultValue={0} precision={0.5} size="large" />
      <br />
      <form>
        <label>Enter your name</label>
        <input type="text" />
        <br />
        <label htmlFor="textarea">Leave a comment</label>
        <textarea name="textarea" cols="30" rows="10"></textarea>
        <br />
        <button>Submit</button>
      </form>
    </Stack>
  );
}