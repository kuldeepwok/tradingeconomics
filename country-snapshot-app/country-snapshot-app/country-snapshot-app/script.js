async function fetchData(country = "India") {
  const url = `https://api.tradingeconomics.com/country/${country}?c=guest:guest`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("output").innerText = "Failed to fetch data.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("getDataBtn").addEventListener("click", () => {
    const country = document.getElementById("countryInput").value;
    fetchData(country);
  });
});
