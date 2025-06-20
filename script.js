async function fetchData() {
  const country = document.getElementById("countryInput").value;
  const url = `https://api.tradingeconomics.com/country/${country}?c=guest:guest`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    let output = `<h2>Economic Indicators for ${country.toUpperCase()}</h2><ul>`;
    data.forEach(item => {
      output += `<li><strong>${item.Category}</strong>: ${item.Value} ${item.Unit}</li>`;
    });
    output += "</ul>";

    document.getElementById("result").innerHTML = output;
  } catch (error) {
    document.getElementById("result").innerHTML = "Failed to fetch data.";
    console.error("Error:", error);
  }
}
