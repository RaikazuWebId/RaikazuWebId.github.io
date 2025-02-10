// Data sementara untuk menyimpan PDF dan customisasi
let pdfs = JSON.parse(localStorage.getItem('pdfs')) || [];
let schoolName = localStorage.getItem('schoolName') || 'PUSTAKA DIGITAL SMAN 23 GARUT';
let developerName = localStorage.getItem('developerName') || 'Dikembangkan oleh: Tim SMAN 23 Garut';

// Elemen DOM
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const pdfList = document.getElementById('pdfItems');
const addPdfSection = document.getElementById('addPdfSection');
const addPdfForm = document.getElementById('addPdfForm');
const customizeSection = document.getElementById('customizeSection');
const customizeForm = document.getElementById('customizeForm');
const schoolNameElement = document.getElementById('schoolName');
const developerNameElement = document.getElementById('developerName');

// Set nama sekolah dan developer
schoolNameElement.textContent = schoolName;
developerNameElement.textContent = developerName;

// Buka modal login
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Tutup modal login
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Proses login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh login sederhana
    if (username === 'admin' && password === 'admin123') {
        alert('Login berhasil!');
        loginModal.style.display = 'none';
        addPdfSection.style.display = 'block'; // Tampilkan form tambah PDF
        customizeSection.style.display = 'block'; // Tampilkan form customisasi
    } else {
        alert('Username atau password salah!');
    }
});

// Tambah PDF
addPdfForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('pdfTitle').value;
    const file = document.getElementById('pdfFile').files[0];

    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = function (e) {
            const pdf = {
                title: title,
                url: e.target.result
            };
            pdfs.push(pdf);
            localStorage.setItem('pdfs', JSON.stringify(pdfs));
            renderPdfs();
            addPdfForm.reset();
        };
        reader.readAsDataURL(file);
    } else {
        alert('Harap upload file PDF yang valid.');
    }
});

// Customize nama sekolah dan developer
customizeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const customSchoolName = document.getElementById('customSchoolName').value;
    const customDeveloper = document.getElementById('customDeveloper').value;

    schoolName = customSchoolName;
    developerName = `Dikembangkan oleh: ${customDeveloper}`;

    localStorage.setItem('schoolName', schoolName);
    localStorage.setItem('developerName', developerName);

    schoolNameElement.textContent = schoolName;
    developerNameElement.textContent = developerName;

    alert('Customisasi berhasil disimpan!');
});

// Render daftar PDF
function renderPdfs() {
    pdfList.innerHTML = '';
    pdfs.forEach((pdf, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = pdf.url;
        a.target = '_blank';
        a.textContent = pdf.title;
        li.appendChild(a);
        pdfList.appendChild(li);
    });
}

// Tampilkan daftar PDF saat pertama kali load
renderPdfs();