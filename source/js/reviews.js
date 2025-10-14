const reviewCards = [
  {
    foto: "alex",
    name: "Лола Алекс",
    program: "Masa Art Challenge",
    date: "Осень 2022",
    title:
      "Я&nbsp;могу с&nbsp;уверенностью сказать, что это был один из&nbsp;самых незабываемых опытов в&nbsp;жизни!",
    text:
      "Я&nbsp;рекомендую программу &laquo;Стажировка&raquo; всем студентам, желающим получить незабываемые впечатления. Сочетание путешествий, общения и&nbsp;значимой работы действительно отличает её&nbsp;от&nbsp;других программ, и&nbsp;я&nbsp;чувствую огромную благодарность за&nbsp;предоставленную мне возможность.",
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
  const img = cardElement.querySelector(".review__avatar");
  if (img) {
    const rawSrc = img.getAttribute("data-src");
    const rawSrcset = img.getAttribute("data-srcset");
    if (rawSrc) img.src = rawSrc.replace("[[id]]", reviewCard.foto);
    if (rawSrcset) img.srcset = rawSrcset.replaceAll("[[id]]", reviewCard.foto);
    img.alt = reviewCard.name;
  }

  // текст
  cardElement.querySelector(".review-card__name").innerHTML = reviewCard.name;
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
