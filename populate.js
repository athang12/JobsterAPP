require("dotenv").config();
const connectDB = require("./db/connect");
const mockData = require("./MOCK_DATA.json");
const Job = require("./models/Job");

const populate = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    const pop = await Job.insertMany(mockData);
    console.log("Populated Successfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populate();
