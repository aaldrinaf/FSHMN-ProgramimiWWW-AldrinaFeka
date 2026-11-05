// Funksioni kryesor për llogaritjen e buxhetit

export function llogarit(cmimi, persona, buxheti) {

    // Kontrollimi i numrave
    if (
        !Number.isFinite(cmimi) ||
        !Number.isFinite(persona) ||
        !Number.isFinite(buxheti)
    ) {
        return {
            ok: false,
            error: "Të gjitha vlerat duhet të jenë numra të vlefshëm."
        };
    }

    // Kontrollimi i çmimit dhe buxhetit
    if (cmimi < 0 || buxheti < 0) {
        return {
            ok: false,
            error: "Çmimi dhe buxheti nuk mund të jenë negativë."
        };
    }

    // Kontrollimi i numrit të personave
    if (!Number.isInteger(persona) || persona < 1 || persona > 5) {
        return {
            ok: false,
            error: "Numri i personave duhet të jetë nga 1 deri në 5."
        };
    }

    // Shndërrimi i eurove në centë
    const cmimiCente = Math.round(cmimi * 100);
    const buxhetiCente = Math.round(buxheti * 100);

    // Llogaritja e çmimit total
    const totalCente = cmimiCente * persona;

    // Llogaritja e shumës së mbetur
    const mbetjaCente = buxhetiCente - totalCente;

    // Kontrollimi i buxhetit
    const brenda = totalCente <= buxhetiCente;

    // Kthimi i rezultatit
    return {
        ok: true,
        total: totalCente / 100,
        mbetja: mbetjaCente / 100,
        brenda: brenda
    };
}


// Lidhja e formularit me JavaScript
const forma = document.getElementById("forma");
const rezultati = document.getElementById("rezultati");

forma.addEventListener("submit", function(event) {

    // Ndalon rifreskimin e faqes
    event.preventDefault();

    // Marrja e vlerave nga formulari
    const cmimi = Number(document.getElementById("cmimi").value);
    const persona = Number(document.getElementById("persona").value);
    const buxheti = Number(document.getElementById("buxheti").value);

    // Thirrja e funksionit
    const pergjigjja = llogarit(cmimi, persona, buxheti);

    // Kontrollimi i gabimeve
    if (!pergjigjja.ok) {
        rezultati.className = "rezultati gabim";
        rezultati.textContent = pergjigjja.error;
        return;
    }

    // Shfaqja e rezultatit
    if (pergjigjja.brenda) {

        rezultati.className = "rezultati sukses";

        rezultati.innerHTML = `
            <h3>Aktiviteti është brenda buxhetit!</h3>
            <p>Çmimi total: <strong>${pergjigjja.total.toFixed(2)} €</strong></p>
            <p>Shuma e mbetur: <strong>${pergjigjja.mbetja.toFixed(2)} €</strong></p>
        `;

    } else {

        rezultati.className = "rezultati paralajmerim";

        rezultati.innerHTML = `
            <h3>Buxheti nuk është i mjaftueshëm!</h3>
            <p>Çmimi total: <strong>${pergjigjja.total.toFixed(2)} €</strong></p>
            <p>Mungojnë: <strong>${Math.abs(pergjigjja.mbetja).toFixed(2)} €</strong></p>
        `;
    }

});


// TESTET E FUNKSIONIT
const testet = [
    {
        emri: "Test normal",
        rezultat: llogarit(4, 5, 20)
    },
    {
        emri: "Test tejkalimi",
        rezultat: llogarit(4.5, 5, 20)
    },
    {
        emri: "Test kufitar me centë",
        rezultat: llogarit(0.1, 3, 0.3)
    },
    {
        emri: "Test hyrje negative",
        rezultat: llogarit(-4, 2, 20)
    },
    {
        emri: "Test NaN",
        rezultat: llogarit(NaN, 3, 20)
    },
    {
        emri: "Test persona zero",
        rezultat: llogarit(4, 0, 20)
    }
];

// Shfaqja e testeve në Console
console.log("REZULTATET E TESTEVE:");

console.table(testet);