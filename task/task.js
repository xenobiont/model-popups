const modalButtons = document.querySelectorAll('.btn--modal');

modalButtons.forEach((button) => button.addEventListener('click', openModal));

const modals = document.querySelectorAll('.modal');

modals.forEach((modal) => modal.addEventListener('click', closeModal));

function openModal(e) {
	e.preventDefault();
	const modalWindowSelector = this.dataset.target;
	const modalWindow = document.querySelector(modalWindowSelector);
	modalWindow.classList.add('active');
}

function closeModal(e) {
	console.log(e);
	if (e.target.matches('.modal') || e.target.matches('.close')) {
		this.classList.remove('active');
	}
}
