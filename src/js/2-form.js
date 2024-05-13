
const formData = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || { email: '', message: '' };

const formEl = document.querySelector('form.feedback-form');

formEl.elements.email.value = formData.email
formEl.elements.message.value = formData.message;

formEl.addEventListener('submit', submitForm);
formEl.addEventListener('input', inputForm);

function inputForm(form) {
  formData.email = form.currentTarget.elements.email.value.trim();
  formData.message = form.currentTarget.elements.message.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function submitForm(form) {
  form.preventDefault();

  const formElements = form.currentTarget.elements;

  if (formElements.email.value.trim().length === 0) {
    showErrMsg();
    return null;
  }
  if (formElements.message.value.trim().length === 0) {
    showErrMsg();
    return null;
  }
  function showErrMsg() {
    alert('Fill please all fields');
  }

  console.log(formData)
  localStorage.removeItem('feedback-form-state')
  formData.email = ''
  formData.message = ''

  form.currentTarget.reset();
}
