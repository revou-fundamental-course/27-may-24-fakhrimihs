document.addEventListener("DOMContentLoaded", function () {
  // Cek apakah sudah ada data masuk pengguna dalam local storage
  var userName = localStorage.getItem("userName");
  var userEmail = localStorage.getItem("userEmail");
  var userPhone = localStorage.getItem("userPhone");

  if (!userName || !userEmail || !userPhone) {
    // Jika belum ada data masuk, tampilkan form pop-up
    document.getElementById("popupForm").style.display = "flex";
  } else {
    // Jika sudah ada data masuk, isi nilai username dan sembunyikan form pop-up
    document.getElementById("userName").textContent = userName;
    document.getElementById("popupForm").style.display = "none";
  }
});

function submitPopup() {
  var name = document.getElementById("popupName").value;
  var email = document.getElementById("popupEmail").value;
  var phone = document.getElementById("popupPhone").value;

  if (name && email && phone) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);
    document.getElementById("userName").textContent = name;
    document.getElementById("popupForm").style.display = "none";

    alert("Anda Sudah Berhasil Masuk");
  } else {
    alert("Isi Kolom yang Tersedia");
  }
}

//Tampilkan Pop Up untuk Deskripsi Fasilitas
function showPopup(title, description) {
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupDesc").textContent = description;
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

//Tampilkan Validasi Input Kontak Kami dan Pop Up Validasi
function displayMessage() {
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var message = document.getElementById("message").value;

  if (name && dob && gender && message) {
    // Memeriksa apakah semua data telah diisi
    document.getElementById("outputName").innerText = "Nama: " + name;
    document.getElementById("outputDob").innerText = "Tanggal Lahir: " + dob;
    document.getElementById("outputGender").innerText = "Jenis Kelamin: " + (gender ? gender.value : "Tidak dipilih");
    document.getElementById("outputMessage").innerText = "Pesan: " + message;

    alert("Data yang Anda masukkan akan divalidasi.");
  } else {
    alert("Masukan Data Anda.");
  }
}

//Fungsi Logout untuk Mengakhiri Sesi
function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userPhone");
  window.location.href = "index.html";
}

// Fungsi Konfirmasi Logout
function confirmLogout() {
  if (confirm("Apakah Anda yakin akan logout?")) {
    logout();
  }
}
