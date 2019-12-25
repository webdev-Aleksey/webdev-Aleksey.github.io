const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signInContainer = document.getElementById('signInContainer');

signUpButton.addEventListener('click', () => {
	signInContainer.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	signInContainer.classList.remove("right-panel-active");
});
