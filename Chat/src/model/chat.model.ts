import { Connection } from '../connection';

const connection = new Connection();

const create = async (data: {
  text: String;
  userFromId: number;
  userToId: number;
}) => {
  try {
    console.log(data);
    
    const response = await connection.query(`
        INSERT INTO chats (
            text,
            contact_to_id,
            contact_from_id
        ) VALUES (
            ${data.text},
            1,
            2 
        )
    `);
  } catch (err) {
    console.log(err);
  }
};

export default { create };
