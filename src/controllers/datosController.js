import database from '../config/database.js';
import Datos from '../models/datosModel.js';

const controller = {
  getDatos: (req, res) => {
    const db = database();

    const sql = `SELECT * FROM datos`;

    db.all(sql, (err, rows) => {
      if (err) throw err;
      return res.status(200).json(rows);
    });

    db.close();
  },
  getDatosById: (req, res) => {
    const { id } = req.params;

    const db = database();

    const sql = `SELECT * FROM datos WHERE rowid = ${id}`;

    db.get(sql, (err, row) => {
      if (err) throw err;
      return res.status(200).json(row);
    });

    db.close();
  },
  postDatos: (req, res) => {
    const datosObj = new Datos(req.body);

    const db = database();

    db.serialize(() => {
      const createTable = `CREATE TABLE datos (
					concepto varchar(255) not null,
					monto double(10,2) not null,
					fecha char(10) not null,
					tipo varchar(10) not null,
					categoria varchar(255)
				)`;

      db.run(createTable, (err) => {
        console.log("Database 'datos' already exists\n");
      });

      db.run('INSERT INTO datos VALUES (?,?,?,?,?)', datosObj.toArray());
    });

    db.close();

    res.sendStatus(201);
  },
  deleteDatosById: (req, res) => {
    const { id } = req.params;

    const db = database();

    db.run('DELETE FROM datos WHERE rowid = ?', id);

    db.close();

    res.sendStatus(200);
  },
};

export default controller;
