'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const authenticateUser = (formData) => {

  const email = formData.get('email'); //dumb dom?
  
  if (email === 'demo@demo.com') {

    // set cookies
    cookies().set('userId', 1);

    // redirect to /albums
    redirect('/albums');
  }

  // redirect to /
  redirect('/');
};