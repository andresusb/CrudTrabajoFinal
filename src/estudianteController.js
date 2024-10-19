import pool from "./db.js";

// Obtener todos los estudiantes
export const listarEstudiantes = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM estudiantes");
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener estudiantes" + error };
  }
};

export const eliminarEstudiante = async (id_estudiante) => {
  const [result] = await pool.query('DELETE FROM estudiantes WHERE id_estudiante = ?', [id_estudiante]);
  return result;
};





