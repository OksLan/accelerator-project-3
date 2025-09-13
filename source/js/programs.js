// const programCards = [
//   {
//     foto: "intern",
//     title: "Стажировка",
//     text: "Получите незаменимый опыт работы в&nbsp;крупнейших мировых компаниях.",
//   },

//   {
//     foto: "volont",
//     title: "Волонтёрство",
//     text: "Помогайте другим и&nbsp;развивайте свои лидерские качества.",
//   },
//   {
//     foto: "study",
//     title: "Учёба",
//     text: "Получите образование и&nbsp;измените своё будущее.",
//   },
// ];
// export { programCards };

// const programsList = document.querySelector(".programs__list");
// const programTemplate = document.querySelector("#program-card").content;

// let addProgram = (programCard) => {
//   const cardElement = programTemplate
//     .querySelector(".programs__list-item")
//     .cloneNode(true);
//   cardElement.classList.add("swiper-slide");

//   // картинка-фон
//   const sources = cardElement.querySelectorAll('source');
//   sources.forEach(source => {
//     const originalSrcset = source.getAttribute('data-srcset');
//     if (originalSrcset) {
//       const replaced = originalSrcset.replaceAll('[[id]]', programCard.foto);
//       source.setAttribute('srcset', replaced);
//     }
//   });

//   const img = cardElement.querySelector('.program-card__image');
//   if (img) {
//     const rawSrc = img.dataset.src;
//     const rawSrcset = img.dataset.srcset;
//     img.src = rawSrc.replace('[[id]]', programCard.foto);
//     img.srcset = rawSrcset.replaceAll('[[id]]', programCard.foto);

//     const tempDiv = document.createElement('div');
//     tempDiv.innerHTML = programCard.title;
//     img.alt = tempDiv.textContent.trim();
//   }

//   cardElement.querySelector(".program-card__title").innerHTML = programCard.title;
//   cardElement.querySelector(".program-card__text").textContent = programCard.text;

//   programsList.append(cardElement);
// };

// export function showPrograms(programCards) {
//   for (const programCard of programCards) {
//     addCard(programCard);
//   }
// }

const programCards = [
  {
    foto: "intern",
    title: "Стажировка",
    text: "Получите незаменимый опыт работы в&nbsp;крупнейших мировых компаниях.",
  },
  {
    foto: "volont",
    title: "Волонтёрство",
    text: "Помогайте другим и&nbsp;развивайте свои лидерские качества.",
  },
  {
    foto: "study",
    title: "Учёба",
    text: "Получите образование и&nbsp;измените своё будущее.",
  },
];

export { programCards };

const programsList = document.querySelector(".programs__list");
const programTemplate = document.querySelector("#program-card").content;

let addProgram = (programCard) => {
  const cardElement = programTemplate
    .querySelector(".programs__list-item")
    .cloneNode(true);

  cardElement.classList.add("swiper-slide");

  // картинки <source>
  const sources = cardElement.querySelectorAll("source");
  sources.forEach((source) => {
    const originalSrcset = source.getAttribute("data-srcset");
    if (originalSrcset) {
      const replaced = originalSrcset.replaceAll("[[id]]", programCard.foto);
      source.setAttribute("srcset", replaced);
    }
  });

  // <img>
  const img = cardElement.querySelector(".program-card__image");
  if (img) {
    const rawSrc = img.dataset.src;
    const rawSrcset = img.dataset.srcset;
    img.src = rawSrc.replace("[[id]]", programCard.foto);
    img.srcset = rawSrcset.replaceAll("[[id]]", programCard.foto);

    img.alt = programCard.title;
  }

  // текст
  cardElement.querySelector(".program-card__title").innerHTML = programCard.title;
  cardElement.querySelector(".program-card__text p").innerHTML = programCard.text;

  programsList.append(cardElement);
};

export function showPrograms(programCards) {
  for (const programCard of programCards) {
    addProgram(programCard);
  }
}
