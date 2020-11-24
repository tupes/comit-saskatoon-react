import { db } from "./";

async function getData(tableName, uid) {
  const data = [];
  const tableRef = db.ref(`${tableName}/${uid}`);
  const dataSnapshot = await tableRef.once("value");
  dataSnapshot.forEach((itemSnapshot) => {
    const item = itemSnapshot.val();
    data.push(item);
  });
  console.log(data);
  return data;
}

export function getNotes(uid) {
  return getData("notes", uid);
}
