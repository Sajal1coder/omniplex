// src/app/api/linkedin/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json(); // Parse the JSON body

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  const url = 'https://linkedin-data-scraper.p.rapidapi.com/email_to_linkedin_profile';
  
  const rapidApiKey = process.env.RAPIDAPI_KEY;
  if (!rapidApiKey) {
    return NextResponse.json({ message: 'RapidAPI key is not defined' }, { status: 500 });
  }

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': rapidApiKey,
      'x-rapidapi-host': 'linkedin-data-scraper.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
        console.error('Error response from LinkedIn API:', data);
      return NextResponse.json(data, { status: response.status }); // Forward the error response
    }

    return NextResponse.json(data); // Send the successful response
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}