'use server';

import { redirect } from 'next/dist/server/api-utils';
import client from './db';
const { cookies } = require('next/headers');

// const albums = [
//   {
//     id: 1,
//     user_id: 1,
//     title: "Some travel pictures!",
//     is_public: 1,
//     cover_id: 2,
//     album_id: 1,
//     url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1126.jpg",
//   },
//   {
//     id: 2,
//     user_id: 1,
//     title: "Some more travel pictures!",
//     is_public: 0,
//     cover_id: 38,
//     album_id: 2,
//     url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6268.jpg",
//   },
// ];

export const fetchAlbumsByUserId = async () => {
  const userId = Number(cookies().get('userId')?.value);

  if (!userId) {
    return null;
  }

  const sql = `
  SELECT *, photos.url 
    FROM albums 
    JOIN photos ON albums.cover_id = photos.id 
    WHERE albums.user_id = ?
  `;

  const args = [userId];

  const albums = await client.execute({ sql, args });

  // return albums.filter(album => album.user_id === userId);
  return albums.rows;
};

export const fetchPhotosFromAlbumId = async (albumId) => {
  const userId = Number(cookies().get('userId')?.value);

  if (!userId) {
    return [];
  }

  const sql = `SELECT * 
                FROM photos
                WHERE photos.album_id = ?
                AND user_id = ?
  `;
  const args = [albumId, userId];

  const albums = await client.execute({ sql, args });

  // return albums.filter(album => album.user_id === userId);
  console.log("album from server", albums);
  return albums.rows;
};

export const fetchAlbumPhotosById = async (albumId) => {

  const userId = Number(cookies().get("userId")?.value);

  const sql =
    "SELECT * FROM photos JOIN albums ON albums.id = photos.album_id WHERE album_id = ?";

  const args = [albumId];

  const result = await client.execute({ sql, args });

  //if user does not match, go home
  if (result.rows[0].user_id !== userId) {
    redirect("/");
  }

  return result.rows;
}


