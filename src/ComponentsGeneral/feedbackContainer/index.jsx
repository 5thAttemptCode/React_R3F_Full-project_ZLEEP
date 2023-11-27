import React, { useEffect, useState } from 'react'
import './style.css'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/utils/firebase.config'
import { Rating } from '@mui/material'


export default function FeedbackContainer() {

  const [ feedbackList, setFeedbackList ] = useState([])
  const feedbackCollectionRef = collection(db, "feedback")

  useEffect(() => {
    const getFeedback = async () => {
      const data = await getDocs(feedbackCollectionRef)
      setFeedbackList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    }

    getFeedback()

  }, [])
 
  return (
    <div className='feedback-container'>
      <h2>The word on the street:</h2>
      {feedbackList.map((feedbackPost, index) => (
        <div className='feedback-box' key={index}>
          {feedbackPost.rating && 
            <Rating
              className='stars'
              name={`feedback-rating-${feedbackPost.id}`}
              precision={0.5}
              value={Number(feedbackPost.rating)}
              aria-label={`Rating ${feedbackPost.rating}`}
              readOnly
            />
          }
          <br />
          <h5>{feedbackPost.name}</h5>
          <br />
          <p>{feedbackPost.comment}</p>
        </div>
      ))}
    </div>
  )
}
