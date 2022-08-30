const admin = require("../infra/database");
const database = admin.firestore();

exports.getAll = async () => {
  const posts = database.collection("Note");
  const snapshot = await posts.get();

  const data: any[] = [];

  snapshot.forEach((doc: any) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
};

exports.get = async (id: String) => {
  const nota = await database.collection("Note").doc(id).get();

  return { id: nota.id, ...nota.data() };
};

exports.delete = async (id: String) => {
  const nota = await database.collection("Note").doc(id).delete();

  return { status: "Success" };
};

exports.save = async (data: object) => {
  const { idProduto, qntProduto, cnpjCompra }: any = data;

  //verifications

  //then
  //generate note id
  //const crypto = require("crypto");
  //const UUID = crypto.randomUUID();

  //creation date time
  const date = new Date();
  const dateTime =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  //Note
  const newNote = { dateTime, idProduto, qntProduto, cnpjCompra };

  //post
  database.collection("Note").add(newNote);

  return { status: "success" };
};

exports.update = async (id: String, data: any) => {
  const { idProduto, qntProduto, cnpjCompra } = data;

  //verifications

  //creation date time
  const date = new Date();
  const dateTime =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  //Note
  const newNote = { dateTime, idProduto, qntProduto, cnpjCompra };

  //get
  const nota = database.collection("Note").doc(id);

  //update
  const res = await nota.update({ ...newNote });

  return { status: "success" };
};
