const nama = "elisa";
let usia = 19;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi ="anda generasi remaja";
    } else if (usia > 17 && usia < 30) {
        generasi ="anda generasi dewasa";
    } else if (usia > 29) {
        generasi ="anda generasi tua";
    }
    else {
        generasi ="anda generasi anak2";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);
generateBiodata();