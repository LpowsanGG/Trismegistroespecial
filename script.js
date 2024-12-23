// Función para mostrar/ocultar el popup
function showPopup(id) {
    document.getElementById(id).style.display = "block";
}

function hidePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Función para exportar tabla a Excel
function exportToExcel(tableId, filename) {
    var wb = XLSX.utils.table_to_book(document.getElementById(tableId), { sheet: "Sheet1" });
    XLSX.writeFile(wb, filename);
}

// Función de filtrado de asistencia
function filtrarAsistencia(mes) {
    alert("Filtrando asistencia para el mes: " + mes);
}

// Función de manejo de calificaciones
function verCalificaciones(mes) {
    alert("Mostrando calificaciones para el mes de " + mes);
}
