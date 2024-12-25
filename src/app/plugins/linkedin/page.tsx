// app/plugins/linkedin/page.tsx
/*"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLinkedin } from '../../../store/chatSlice'; // Adjust the import path as necessary
import Linkedin from '../../../components/Linkedin/Linkedin';
import { RootState } from '@/store/store';
type Props = {
    id: string;
  };

const LinkedInPage: React.FC<{ threadId: string; chatIndex: number }> = ({ threadId, chatIndex }) => {
    const { id } = props;
  const dispatch = useDispatch();

  // Access the LinkedIn results from the Redux store
  const linkedinResults = useSelector((state: RootState) => state.chat.threads[threadId]?.chats[chatIndex]?.linkedinResults);

  // Example email to fetch LinkedIn data
  const email = 'sajalkumarbaranwal13@gmail.com'; // Replace with the actual email you want to use

  useEffect(() => {
    // Dispatch an action to fetch LinkedIn data and update the state
    const fetchLinkedInData = async () => {
        const response = await fetch('/api/linkedin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }), // Send the email in the request body
          }); // Adjust the API endpoint as necessary
      const data = await response.json();
      dispatch(updateLinkedin({ threadId :id, chatIndex, linkedinResults: data })); // Update the state with the fetched data
    };

    fetchLinkedInData();
  }, [dispatch, email, threadId, chatIndex]);

  return (
    <div>
      <h1>LinkedIn Profile</h1>
      {linkedinResults ? (
        <Linkedin linkedinResults={linkedinResults} />
      ) : (
        <p>Loading LinkedIn profile...</p>
      )}
    </div>
  );
};

export default LinkedInPage;*/

import React from 'react'
import Linkedin from '@/components/Linkedin/Linkedin'
const page = () => {
  return (
    <div>
      <Linkedin/>
    </div>
  )
}

export default page
