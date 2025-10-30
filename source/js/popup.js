export function initPopup() {
  const popup = document.querySelector(".popup");
  const openBtn = document.querySelector(".about__button");
  const closeBtn = document.querySelector(".popup-toggle");

  if (!popup || !openBtn || !closeBtn) return;

  const openPopup = () => {
    popup.classList.add("popup--active");
    document.body.classList.add("no-scroll");
  };

  const closePopup = () => {
    popup.classList.remove("popup--active");
    document.body.classList.remove("no-scroll");
  };

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup();
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup();
  });

  popup.addEventListener("click", (e) => {
    if (!e.target.closest(".popup__container")) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
  });

  initCustomSelect();
  initPopupForm(popup, closePopup);
}

/* city */
function initCustomSelect() {
  document.querySelectorAll(".custom-select").forEach((select) => {
    const button = select.querySelector(".custom-select__button");
    const text = select.querySelector(".custom-select__text");
    const list = select.querySelector(".custom-select__list");
    const items = select.querySelectorAll(".custom-select__item");

    // открыть/закрыть список
    button.addEventListener("click", () => {
      select.classList.toggle("custom-select--open");
      select.classList.remove("error");
    });

    // выбрать пункт
    items.forEach((item) => {
      item.addEventListener("click", () => {
        text.textContent = item.textContent;
        select.classList.remove("custom-select--open");
        select.classList.remove("error");
      });
    });

    // закрыть при клике вне селекта
    document.addEventListener("click", (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove("custom-select--open");
      }
    });
  });
}

/* проверка и отправка */
function initPopupForm(popup, closePopup) {
  const formContainer = popup.querySelector(".popup__container");
  const nameInput = popup.querySelector('input[name="user-name"]');
  const phoneInput = popup.querySelector('input[name="user-phone"]');
  const citySelect = popup.querySelector(".custom-select__text");
  const checkbox = popup.querySelector('input[type="checkbox"]');
  const submitBtn = popup.querySelector(".popup__button");

  if (!formContainer || !submitBtn) return;

  // маска телефона
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

  // проверка полей
  const validateForm = () => {
    let valid = true;

    const namePattern = /^[A-Za-zА-Яа-яЁё\s'-]+$/;

    if (!nameInput.value.trim()) {
      nameInput.classList.add("popup__input--error");
      nameInput.setCustomValidity("Пожалуйста, укажите ваше имя");
      valid = false;

    } else if (!namePattern.test(nameInput.value.trim())) {
      nameInput.classList.add("popup__input--error");
      nameInput.setCustomValidity("Имя должно содержать только буквы");
      valid = false;

    } else {
      nameInput.classList.remove("popup__input--error");
      nameInput.setCustomValidity("");
    }

    const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.setCustomValidity("Введите телефон в формате +7 (XXX) XXX-XX-XX");
      valid = false;
    } else {
      phoneInput.setCustomValidity("");
    }

    if (!citySelect.textContent.trim()) {
      citySelect.closest(".custom-select").classList.add("error");
      valid = false;
    } else {
      citySelect.closest(".custom-select").classList.remove("error");
    }

    if (!checkbox.checked) {
      checkbox.setCustomValidity("Необходимо согласие на обработку данных");
      valid = false;
    } else {
      checkbox.setCustomValidity("");
    }

    return valid;
  };

  // отправка
  // submitBtn.addEventListener("click", async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     formContainer.reportValidity();
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("name", nameInput.value.trim());
  //   formData.append("phone", phoneInput.value.trim());
  //   formData.append("city", citySelect.textContent.trim());
  //   formData.append("consent", checkbox.checked);

  //   const messageEl = popup.querySelector(".popup__message");

  //   try {
  //     // имитация успешной отправки
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     // очистка формы
  //     nameInput.value = "";
  //     phoneInput.value = "";
  //     citySelect.textContent = "";
  //     checkbox.checked = false;

  //     // сообщение
  //     messageEl.textContent = "Спасибо! Форма успешно отправлена.";
  //     messageEl.className = "popup__message popup__message--success";
  //     messageEl.hidden = false;

  //     // закрыть popup через 2 секунды
  //     // setTimeout(() => {
  //     //   messageEl.hidden = true;
  //     //   closePopup();
  //     // }, 2000);

  //       setTimeout(() => {
  //       messageEl.hidden = true;
  //       closePopup();
  //     },10000000);

  //     } catch (err) {
  //       messageEl.textContent = "Произошла ошибка при отправке. Попробуйте снова.";
  //       messageEl.className = "popup__message popup__message--error";
  //       messageEl.hidden = false;
  //     }
  // });

    // отправка
  // submitBtn.addEventListener("click", (e) => {
  //   if (!validateForm()) {
  //     formContainer.reportValidity();
  //     return;
  //   }

  //   // если всё корректно — просто отправляем форму
  //   formContainer.submit();
  // });

    // отправка
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      formContainer.reportValidity();
      return;
    }

    // имитация успешной отправки
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // очистка формы
    nameInput.value = "";
    phoneInput.value = "";
    citySelect.textContent = "";
    checkbox.checked = false;

    closePopup();

    // создаем оверлей и сообщение
    const overlay = document.createElement("div");
    overlay.className = "system-overlay";

    const message = document.createElement("div");
    message.className = "system-message";
    message.textContent = "Форма успешно отправлена";

    overlay.appendChild(message);
    document.body.appendChild(overlay);

    // показываем анимационно
    requestAnimationFrame(() => overlay.classList.add("visible"));

    // удаляем через 2.5 секунды
    setTimeout(() => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 300);
    }, 2500);
  });

}
