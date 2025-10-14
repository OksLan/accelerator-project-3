const reviewCards = [
  {
    foto: "alex",
    firstName: "Лола",
    lastName: "Алекс",
    program: "Masa Art Challenge",
    date: "Осень 2022",
    title:
      "Я&nbsp;могу с&nbsp;уверенностью сказать, что это был один из&nbsp;самых незабываемых опытов в&nbsp;жизни!",
    text:
      "Я&nbsp;рекомендую программу &laquo;Стажировка&raquo; всем студентам, желающим получить незабываемые впечатления. Сочетание путешествий, общения и&nbsp;значимой работы действительно отличает её&nbsp;от&nbsp;других программ, и&nbsp;я&nbsp;чувствую огромную благодарность за&nbsp;предоставленную мне возможность.",
  },
    {
    foto: "ivanov",
    firstName: "Давид",
    lastName: "Иванов",
    program: "Volonteer Career",
    date: "Лето 2022",
    title:
      "Благодаря опыту стажировки я&nbsp;узнал так много нового о&nbsp;себе и&nbsp;об&nbsp;окружающем мире.",
    text:
      "Каждый день был возможностью оказать ощутимое влияние на&nbsp;жизнь других людей. Я&nbsp;бы очень рекомендовал эту волонтёрскую программу всем, кто ищет значимый и&nbsp;незабываемый опыт. Организация была на&nbsp;высшем уровне. Для меня было честью быть частью такой удивительной инициативы.",
  },
  {
    foto: "ivanov",
    firstName: "Давид",
    lastName: "Иванов",
    program: "Volonteer Career",
    date: "Лето 2022",
    title:
      "Благодаря опыту стажировки я&nbsp;узнал так много нового о&nbsp;себе и&nbsp;об&nbsp;окружающем мире.",
    text:
      "Каждый день был возможностью оказать ощутимое влияние на&nbsp;жизнь других людей. Я&nbsp;бы очень рекомендовал эту волонтёрскую программу всем, кто ищет значимый и&nbsp;незабываемый опыт. Организация была на&nbsp;высшем уровне. Для меня было честью быть частью такой удивительной инициативы.",
  },
];

export { reviewCards };

const reviewsList = document.querySelector(".reviews__list");
const reviewTemplate = document.querySelector("#review-card").content;

function addReview(reviewCard) {
  const cardElement = reviewTemplate
    .querySelector(".reviews__list-item")
    .cloneNode(true);

  cardElement.classList.add("swiper-slide");

  // картинки <source>
  const sources = cardElement.querySelectorAll("source");
  sources.forEach((source) => {
    const dataSrcset = source.getAttribute("data-srcset");
    if (dataSrcset) {
      const newSrcset = dataSrcset.replaceAll("[[id]]", reviewCard.foto);
      source.setAttribute("srcset", newSrcset);
    }
  });

  // <img>
  const img = cardElement.querySelector("img.review-card__avatar");
  if (img) {
    const rawSrc = img.getAttribute("data-src");
    const rawSrcset = img.getAttribute("data-srcset");
    if (rawSrc) img.src = rawSrc.replace("[[id]]", reviewCard.foto);
    if (rawSrcset) img.srcset = rawSrcset.replaceAll("[[id]]", reviewCard.foto);
    img.alt = `${reviewCard.firstName} ${reviewCard.lastName}`;
  }

  // текст
  cardElement.querySelector(".review-card__first-name").textContent = reviewCard.firstName;
  cardElement.querySelector(".review-card__last-name").textContent = reviewCard.lastName;
  cardElement.querySelector(
    ".review-card__program .review-card__meta-value"
  ).innerHTML = reviewCard.program;
  cardElement.querySelector(
    ".review-card__date .review-card__meta-value"
  ).innerHTML = reviewCard.date;
  cardElement.querySelector(".review-card__title").innerHTML = reviewCard.title;
  cardElement.querySelector(".review-card__text p").innerHTML = reviewCard.text;

  reviewsList.append(cardElement);
}

export function showReviews(reviewCards) {
  for (const reviewCard of reviewCards) {
    addReview(reviewCard);
  }
}
