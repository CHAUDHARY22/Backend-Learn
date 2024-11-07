import { connect } from "mongoose";

const Database = async (URL) =>{
      const db = await connect(URL)
      console.log("Mongoose Conndected...");
};

export default Database