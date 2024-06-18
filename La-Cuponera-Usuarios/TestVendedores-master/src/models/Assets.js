import { conexion_App } from '../config/database.js';

// Consultar assets (imágenes, videos, etc.)
const consultarAssets = (callback) => {
  conexion_App.query('SELECT * FROM assets', (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results);
  });
};

// Insertar un nuevo asset
const insertarAsset = (asset, callback) => {
  const query = 'INSERT INTO assets SET ?';
  conexion_App.query(query, asset, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results);
  });
};

// Actualizar un asset existente
const actualizarAsset = (idAsset, datosActualizados, callback) => {
  const query = 'UPDATE assets SET ? WHERE id = ?';
  conexion_App.query(query, [datosActualizados, idAsset], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results);
  });
};

// Eliminar un asset existente
const eliminarAsset = (idAsset, callback) => {
  const query = 'DELETE FROM assets WHERE id = ?';
  conexion_App.query(query, idAsset, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results);
  });
};

export { consultarAssets, insertarAsset, actualizarAsset, eliminarAsset };
