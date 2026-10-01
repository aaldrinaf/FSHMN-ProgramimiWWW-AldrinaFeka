# programimi-www

## Çfarë realizova

Ky projekt është realizuar si pjesë e mësimit të Programimit Web.

Në `JavaI` janë realizuar dy faqe HTML:
- `index.html` – faqja kryesore e pasaportës së Artës.
- `rreth.html` – faqja me historinë e Artës.

Gjithashtu është krijuar `style.css` për stilizimin e faqeve dhe janë vendosur lidhjet vajtje/kthim ndërmjet dy faqeve.

## Struktura

Projekti përmban folderat `JavaI` deri në `JavaXIV`.

Folderat që nuk kanë përmbajtje përdorin `.gitkeep` për të ruajtur strukturën në Git.

## Hapat e hapjes

1. Hap repository-n `programimi-www` në VS Code.
2. Hape folderin `JavaI`.
3. Hape `index.html`.
4. Nis faqen me Live Server.
5. Kontrollo lidhjen `Rreth Artës`.
6. Nga `rreth.html`, përdor `Kthehu te pasaporta` për t'u kthyer te faqja kryesore.

## Testet

### Testi 1 – Hapja e index.html

**Hyrje:** U hap `JavaI/index.html` përmes Live Server.

**Rezultati i pritur:** Faqja kryesore hapet dhe nuk shfaq gabim `404`.

**Rezultati i marrë:**
- URL: `http://127.0.0.1:5500/JavaI/index.html`
- Method: `GET`
- Status: `304 Not Modified`

### Testi 2 – Hapja e rreth.html

**Hyrje:** Nga faqja kryesore u klikua lidhja `Rreth Artës`.

**Rezultati i pritur:** Hapet `rreth.html` pa gabim `404`.

**Rezultati i marrë:**
- URL: `http://127.0.0.1:5500/JavaI/rreth.html`
- Method: `GET`
- Status: `304 Not Modified`

### Testi 3 – Lidhjet vajtje/kthim

**Hyrje:** U testuan lidhjet ndërmjet dy faqeve.

**Rezultati i pritur:** `index.html` hap `rreth.html` dhe `rreth.html` kthehet në `index.html`, pa `404`.

**Rezultati i marrë:** Të dyja lidhjet funksionuan me sukses dhe nuk u shfaq `404`.

## Reflektim individual

Një ndryshim që ruhet lokalisht por ende nuk shihet në GitHub është një ndryshim që është bërë dhe ruajtur në skedarët e projektit, por ende nuk është bërë `commit` dhe `push`.

Në këtë projekt, ndryshimet në `JavaI` do të shfaqen në GitHub pasi të bëhet commit dhe push.

## Deklarimi i AI dhe burimeve

Për realizimin e projektit është përdorur ndihmë nga AI për udhëzime dhe shpjegime gjatë punës me HTML, CSS, Git dhe GitHub.

Përmbajtja e personazhit dhe të dhënat e përdorura në faqe janë të sajuara për qëllime mësimore.

## Teknologjitë

- HTML
- CSS
- Git
- GitHub
