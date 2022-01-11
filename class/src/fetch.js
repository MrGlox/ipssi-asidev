const fetchResult = async () => {
  try {
    const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
    const data = await res.json();

    document.querySelector("div").textContent = data;
  } catch (err) {
    throw err;
  }
};

fetchResult();
