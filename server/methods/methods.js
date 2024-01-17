async function addToCollection(dbName, collectionName, data) {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(data);
    console.log(`Данные успешно добавлены: ${result.insertedId}`);
  } catch (e) {
    console.error(e);
  }
}

async function findInCollection(dbName, collectionName, query) {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const items = await collection.find(query).toArray();
    console.log(items);
    return items;
  } catch (e) {
    console.error(e);
  }
}

async function updateInCollection(dbName, collectionName, query, newData) {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(query, { $set: newData });
    console.log(`Обновлено записей: ${result.modifiedCount}`);
  } catch (e) {
    console.error(e);
  }
}

async function deleteFromCollection(dbName, collectionName, query) {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne(query);
    console.log(`Удалено записей: ${result.deletedCount}`);
  } catch (e) {
    console.error(e);
  }
}
