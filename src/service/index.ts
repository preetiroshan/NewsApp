export const getNews = () =>
  fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json"
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
