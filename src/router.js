import express from "express";
import { listarEstudiantes, eliminarEstudiante } from "./estudianteController.js";

const router = express.Router();

router.get("/Crud-Completo-con-NodeJS-Express-y-MySQL", async (req, res) => {
  try {
    const estudiantes = await listarEstudiantes();
    res.render("pages/estudiantes", { estudiantes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

router.post("/crear", async (req, res) => {
  const { data } = req.body;
  console.log(data);
  return;
})




router.delete('/eliminar/:id_estudiante', async (req, res) => {
  const { id_estudiante } = req.params;

  try {
    const result = await eliminarEstudiante(id_estudiante);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }

    // Obtener la lista actualizada de estudiantes
    const estudiantesActualizados = await listarEstudiantes();

    // Enviar la respuesta con la lista actualizada
    res.json({
      message: 'Estudiante eliminado correctamente',
      estudiantes: estudiantesActualizados
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el estudiante' });
  }
});

export default router;