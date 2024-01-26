export const statement = `
INSERT INTO 
  users (username, first_name, last_name, email, profile_url )
VALUES 
  (?, ?, ?, ?, ?)
`;

export const entries = [
  ["Pequeno Pollo", "Little", "Chicken", "pock@pock.com", ""],
  ["Potato", "Yukon", "Gold", "maybe@russett.com", ""],
];
