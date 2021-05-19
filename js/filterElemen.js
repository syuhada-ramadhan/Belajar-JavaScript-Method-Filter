// array hewan
const hewan = ["Kambing", "Kelinci", "Kerbau", "Kucing", "Sapi"];

// function untuk filter array hewan
function filterElemen(array, kriteria) {
  return array.filter((elemen) => elemen.indexOf(kriteria) !== -1);
}

// cetak elemen array berdasarkan kriteria tertentu
console.log(filterElemen(hewan, "ci"));
console.log(filterElemen(hewan, "Sa"));
