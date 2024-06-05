let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};

function displayMessage() {
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var message = document.getElementById("message").value;

  document.getElementById("outputName").innerText = "Nama: " + name;
  document.getElementById("outputDob").innerText = "Tanggal Lahir: " + dob;
  document.getElementById("outputGender").innerText = "Jenis Kelamin: " + gender;
  document.getElementById("outputMessage").innerText = "Pesan: " + message;
}
