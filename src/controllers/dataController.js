import database from '../config/database.js';
import Datos from '../models/dataModel.js';

const controller = {
  getDatos: (req, res) => {
    const db = database();

    const sql = `SELECT * FROM data ORDER BY id DESC`;

    db.all(sql, (err, rows) => {
      if (err) throw err;
      return res.status(200).json(rows);
    });

    db.close();
  },
  getDatosById: (req, res) => {
    const { id } = req.params;

    const db = database();

    const sql = `SELECT * FROM data WHERE rowid = ${id}`;

    db.get(sql, (err, row) => {
      if (err) throw err;
      if (row === null) res.status(200).json({});
      return res.status(200).json(row);
    });

    db.close();
  },
  postDatos: (req, res) => {
    const dataObj = new Datos(req.body);

    const db = database();

    db.run(
      'INSERT INTO data (concepto, monto, fecha, tipo, categoria) VALUES (?,?,?,?,?)',
      dataObj.toArray()
    );

    db.close();

    res.sendStatus(201);
  },
  deleteDatosById: (req, res) => {
    const { id } = req.params;

    const db = database();

    db.run('DELETE FROM data WHERE id = ?', id);

    db.close();

    res.sendStatus(200);
  },
  putDatosById: (req, res) => {
    const { id } = req.params;
    const dataObj = new Datos(req.body);

    const db = database();

    db.run(
      'UPDATE data SET concepto = ?, monto = ?, fecha = ?, tipo = ?, categoria = ? WHERE id = ?',
      [...dataObj.toArray(), id]
    );

    db.close();

    res.sendStatus(200);
  },
};

export default controller;
