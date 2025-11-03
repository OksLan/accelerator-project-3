export function initForm() {
  const form = document.querySelector(".form");
  const formContainer = form?.querySelector(".form__container");
  const nameInput = form?.querySelector('input[name="user-name"]');
  const phoneInput = form?.querySelector('input[name="user-phone"]');
  const messageInput = form?.querySelector('textarea[name="user-message"]');
  const citySelect = form?.querySelector(".custom-select__text");
  const checkbox = form?.querySelector('input[type="checkbox"]');
  const submitBtn = form?.querySelector(".form__button");

  if (!form || !formContainer || !submitBtn) return;

  /* маска телефона */
  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (!value.startsWith("7")) value = "7" + value;
    let result = "+7 ";
    if (value.length > 1) result += "(" + value.substring(1, 4);
    if (value.length >= 5) result += ") " + value.substring(4, 7);
    if (value.length >= 8) result += "-" + value.substring(7, 9);
    if (value.length >= 10) result += "-" + value.substring(9, 11);
    e.target.value = result;
  });

  /* валидация */
  const validateForm = () => {
    let valid = true;
    const namePattern = /^[A-Za-zА-Яа-яЁё\s'-]+$/;

    // имя
    if (!nameInput.value.trim()) {
      nameInput.classList.add("form__input--error");
      nameInput.setCustomValidity("Пожалуйста, укажите ваше имя");
      valid = false;
    } else if (!namePattern.test(nameInput.value.trim())) {
      nameInput.classList.add("form__input--error");
      nameInput.setCustomValidity("Имя должно содержать только буквы");
      valid = false;
    } else {
      nameInput.classList.remove("form__input--error");
      nameInput.setCustomValidity("");
    }

    // телефон
    const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.setCustomValidity("Введите телефон в формате +7 (XXX) XXX-XX-XX");
      valid = false;
    } else {
      phoneInput.setCustomValidity("");
    }

    // сообщение
    if (!messageInput.value.trim()) {
      messageInput.classList.add("form__input--error");
      messageInput.setCustomValidity("Пожалуйста, напишите сообщение");
      valid = false;
    } else {
      messageInput.classList.remove("form__input--error");
      messageInput.setCustomValidity("");
    }

    // город (кастомный или нативный)
    let selectedCity = "";
    if (citySelect) {
      selectedCity = citySelect.textContent.trim();
      if (!selectedCity) {
        citySelect.closest(".custom-select").classList.add("error");
        valid = false;
      } else {
        citySelect.closest(".custom-select").classList.remove("error");
      }
    } else {
      const nativeSelect = form.querySelector(".form__city-list");
      if (!nativeSelect.value) {
        nativeSelect.classList.add("form__input--error");
        valid = false;
      } else {
        nativeSelect.classList.remove("form__input--error");
      }
    }

    // чекбокс
    if (!checkbox.checked) {
      checkbox.setCustomValidity("Необходимо согласие на обработку данных");
      valid = false;
    } else {
      checkbox.setCustomValidity("");
    }

    return valid;
  };

  /* отправка формы */
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      formContainer.reportValidity();
      return;
    }

    // имитация отправки (1 секунда)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // очистка формы
    nameInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
    if (citySelect) citySelect.textContent = "";
    else form.querySelector(".form__city-list").value = "";
    checkbox.checked = false;

    // системное сообщение
    const overlay = document.createElement("div");
    overlay.className = "system-overlay";

    const message = document.createElement("div");
    message.className = "system-message";
    message.textContent = "Форма успешно отправлена";

    overlay.appendChild(message);
    document.body.appendChild(overlay);

    // анимация появления
    requestAnimationFrame(() => overlay.classList.add("visible"));

    // исчезновение
    setTimeout(() => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 300);
    }, 2500);
  });
}
