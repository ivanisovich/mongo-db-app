async function createItem(client, data) {
  const db = client.db("app");
  const collection = db.collection("menu");

  const result = await collection.insertOne(data);

  return result;
}

async function getMenuItems(client) {
  const db = client.db("app");
  const menu = db.collection("menu");
  const menusList = await menu.find({}).toArray();

  return menusList;
}

module.exports = { createItem,getMenuItems };
