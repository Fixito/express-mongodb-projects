const formDOM = document.querySelector('.form');
const usernameInputDOM = document.querySelector('.username-input');
const passwordInputDOM = document.querySelector('.password-input');
const formAlertDOM = document.querySelector('.form-alert');
const resultDOM = document.querySelector('.result');
const btnDOM = document.querySelector('#data');
const tokenDOM = document.querySelector('.token');

formDOM.addEventListener('submit', async (e) => {
  formAlertDOM.classList.remove('text-success');
  tokenDOM.classList.remove('text-success');

  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const { username, password } = Object.fromEntries(formData);

  try {
    const { data } = await axios.post('/api/v1/login', {
      username,
      password,
    });

    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = data.msg;

    formAlertDOM.classList.add('text-success');
    form.reset();

    resultDOM.innerHTML = '';
    tokenDOM.textContent = 'token présent';
    tokenDOM.classList.add('text-success');
  } catch (error) {
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = error.response.data.msg;
    resultDOM.innerHTML = '';
    tokenDOM.textContent = 'Pas de token présent';
    tokenDOM.classList.remove('text-success');
  }

  setTimeout(() => {
    formAlertDOM.style.display = 'none';
  }, 2000);
});

btnDOM.addEventListener('click', async () => {
  try {
    const { data } = await axios.get('/api/v1/dashboard');
    resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`;

    data.secret;
  } catch (error) {
    resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`;
  }
});
