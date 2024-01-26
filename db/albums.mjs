export const statement = `
INSERT INTO 
  albums (user_id, title, is_public, cover_id )
VALUES 
  (?, ?, ?,?)
`;

export const entries = [
  [1, "Some travel pictures", true, 20],
  [1, "Some more travel pictures", false, 60],
  [2, "Some travel pictures again", true, 80],
];
