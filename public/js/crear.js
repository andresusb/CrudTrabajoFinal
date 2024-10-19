import { application } from "express";

function crearEstudiante(event) {
    event.preventDefault();

    const nombreEstudiante = document.getElementById('nombreEstudiante').value;
    const correoEstudiante = document.getElementById('correoEstudiante').value;
    const cursoEstudiante = document.getElementById('cursoEstudiante').value;

    const data = {
        nombre: nombreEstudiante,
        correo: correoEstudiante,
        curso: cursoEstudiante
    }

    fetch(`/crear`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Alumno creado correctamente:', data);
            // Aquí puedes agregar lógica para actualizar la interfaz de usuario
        })
        .catch(error => {
            console.error('Error al crear el alumno:', error.message);
        });
}