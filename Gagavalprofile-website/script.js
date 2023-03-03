// Menangkap elemen-elemen navbar
const sejarahLink = document.querySelector('a[href="#sejarah"]');
const geografisLink = document.querySelector('a[href="#geografis"]');
const wisataLink = document.querySelector('a[href="#wisata"]');

// Fungsi yang akan dipanggil saat tautan navbar ditekan
function navigateToSection(event) {
  // Mencegah tautan mengarah ke halaman baru
  event.preventDefault();

  // Menemukan elemen dengan ID yang sesuai
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  // Menghitung offset untuk menghindari bagian yang tertutup navbar
  const navbarHeight = document.querySelector('nav').offsetHeight;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  // Scroll ke elemen tersebut
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Menambahkan event listener ke setiap tautan navbar
sejarahLink.addEventListener('click', navigateToSection);
geografisLink.addEventListener('click', navigateToSection);
wisataLink.addEventListener('click', navigateToSection);

