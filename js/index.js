const title = document.querySelector('.title')
const text1 = 'REREN I LOVE  YOU♥️'.split('')
const text = 'MAU KAH KAMU BERSAMAKU MENGISI KEHIDUPAN YANG PAHIT INI'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text1[index]}<span/>`
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});
