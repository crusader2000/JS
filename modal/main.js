//Get the modal element
var modal = document.getElementById('simplemodal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementById('closeBtn');

//Listen for open click
modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'block';
}

//Listen for close click
closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

//Listen for outside click
window.addEventListener('click', clickOutside)

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}