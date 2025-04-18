
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.getElementById('createUserForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const docType = document.getElementById('docType').value;
    const docNumber = document.getElementById('docNumber').value;
    const userRole = document.getElementById('userRole').value;

    
    alert(`Usuario creado:\nNombre: ${fullName}\nCorreo: ${email}\nTeléfono: ${phoneNumber}\nTipo de Documento: ${docType}\nNúmero de Documento: ${docNumber}\nRol: ${userRole}`);

    
    this.reset();
});
