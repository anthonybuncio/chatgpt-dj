import mongoConnection from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await mongoConnection;
    const db = client.db("users");

    const userList = await db
      .collection("profiles")
      .aggregate([{ $sample: { size: 4 } }])
      // .find({})
      // .limit(10)
      .toArray();

    return res.json(userList);
  } catch (e) {
    console.error(e);
  }
};
