window.addEventListener("DOMContentLoaded", () => {
  // Quotes
  const quotes = [
    {
      name: "William Shakespeare",
      quote: "All that glitters is not gold.",
      translation: "Yaltirayotganning hammasi oltin emas.",
    },
    {
      name: "Frank Roosevelt",
      quote: "The only thing we have to fear is fear itself.",
      translation:
        "Biz qo'rqishimiz kerak bo'gan yagona narsa bu qorquvning o'zi.",
    },
    {
      name: "Mahatma Gandhi",
      quote: "You must be the change you wish to see in the world.",
      translation:
        "Siz dunyoda ko'rishni xohlagan o'zgarish o'zingiz bo'linshingiz kerak.",
    },
    {
      name: "Edmund De Waal",
      quote: "With languages, you are at home anywhere.",
      translation: "Tillar bilan siz harqanday joyda uyingizda bo'lasiz.",
    },
    {
      name: "Mahatma Gandhi",
      quote:
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      translation:
        "Ertega o'ladiganday yashang. Mangu yashaydiganday o'rganing.",
    },
    {
      name: "Steve Jobs",
      quote:
        "Your time is limited, so don't waste it living someone else's life.",
      translation:
        "Vaqtingiz chegaralangan, shuning uchun uni birovlarning hayoti bilan o'tqazmang.",
    },
    {
      name: "Walt Disney",
      quote: "The best way to get started is to quit talking and begin doing.",
      translation:
        "Boshlashning eng yaxshi yo'li bu gapirishni to'xtatish va ishni boshlash.",
    },
    {
      name: "Don Corleone",
      quote: "Great men are not born great, they grow great.",
      translation:
        "Buyuk insonlar buyuk bo'lib tug'ilishmaydi, ular buyuk bo'lib o'sishadi.",
    },
    {
      name: "Frank Zappa",
      quote: "A mind is like a parachute. It doesn't work if it isn't open.",
      translation:
        "Aql parashutga o'xshaydi. Agar u ochiq bo'lmasa ishlamaydi.",
    },
    {
      name: "Khabib Nurmogamedov",
      quote:
        "When Allah is with you, nobody can beat you, nobody. You have to believe this.",
      translation:
        "Alloh siz bilan bo'lganida hechkim sizga zarba bera olmaydi, hechkim. Siz bunga ishonishingiz kerak.",
    },
    {
      name: "Lao Tzu",
      quote: "A journey of a thousand of miles begins with a single step.",
      translation: "Minglab kilometrlik sayohat bir qadam bilan boshlanadi.",
    },
    {
      name: "Charlie Chaplin",
      quote: "You'll never find rainbows if you're looking down.",
      translation:
        "Agar siz pastga qarab turgan bo'lsangiz hechqachon kamalakni topa olmaysiz.",
    },
    {
      name: "Marcus Cicero",
      quote: "A room without books is like a body without a soul.",
      translation: "Kitobsiz xona ruxsiz tanaga o'xshaydi.",
    },
    {
      name: "Nelson Mandela",
      quote:
        "Education is the most powerful weapon which you can use to use to change the world.",
      translation:
        "Ta'lim - bu dunyoni o'zgartirish uchun foydalanishingiz mumkun bo'lgan eng kuchli.",
    },
    {
      name: "Someone",
      quote: "Your brother has already strong.",
      translation: "Akang kuchaydi uje (hazil).",
    },
  ];
  // Quotes

  // Selectors
  const quoteBtn = document.querySelector("#quoteBtn");
  const quoteAuthor = document.querySelector("#quoteAuthor");
  const quote = document.querySelector("#quote");
  const quoteTranslation = document.querySelector("#translation");
  const searchForm = document.querySelector("#search-quotes");
  const searchInput = document.querySelector("#search-input");
  const searchBtn = document.querySelector("#search-btn");
  // Selectors

  // Default quote
  quoteAuthor.innerHTML = quotes[9].name;
  quote.innerHTML = quotes[9].quote;
  quoteTranslation.innerHTML = quotes[9].translation;
  // Default quote

  // Events
  quoteBtn.addEventListener("click", displayQuote);
  searchBtn.addEventListener("click", searchQuote);
  // Events

  // Functions
  function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    quoteTranslation.innerHTML = quotes[number].translation;
  }
  function searchQuote(e) {
    e.preventDefault();
    for (let quoteItem of quotes) {
      if (quoteItem.name.toLowerCase() == searchInput.value.toLowerCase()) {
        quote.innerHTML = quoteItem.quote;
        quoteTranslation.innerHTML = quoteItem.translation;
        quoteAuthor.innerHTML = quoteItem.name;
        break;
      }
    }
    if (searchInput.value == "") {
      alert("First write someone's name");
    } else if (
      searchInput.value.toLowerCase() !== quotes[0].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[1].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[2].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[3].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[4].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[5].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[6].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[7].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[8].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[9].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[10].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[11].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[12].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[13].name.toLowerCase() &&
      searchInput.value.toLowerCase() !== quotes[14].name.toLowerCase()
    ) {
      alert("There is no that kind of value");
    }
    searchForm.reset();
  }
  // Functions
});
