function eliminarAlumno(id_estudiante) {
    console.log(id_estudiante);


    fetch(`/eliminar/${id_estudiante}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {

            if (!response.ok) {
                throw new Error('Error al eliminar el alumno');
            }
            return response.json();
        })
        .then(data => {
            console.log('Alumno eliminado correctamente:', data);
        })
        .catch(error => {

            console.error('Error al eliminar el alumno:', error);
        });
}

