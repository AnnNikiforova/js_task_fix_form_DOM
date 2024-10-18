'use strict';

document.querySelectorAll('form').forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const parentField = input.closest('.field');
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.placeholder = `Enter your ${label.textContent}`;

    parentField.insertBefore(label, input);
  });
});
