document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('news-button').addEventListener('click', fetchStockNews);
  document.getElementById('estimates-button').addEventListener('click', fetchFinancialEstimates);
  document.getElementById('price-target-button').addEventListener('click', fetchPriceTargetNews);
  document.getElementById('api-key').addEventListener('input', function() {
    chrome.storage.local.set({ apiKey: this.value });
  });
});
async function fetchStockNews() {
  const ticker = document.getElementById('news-ticker').value.toUpperCase();
  const resultsDiv = document.getElementById('news-results');
  resultsDiv.innerHTML = 'Loading...';
  const apiKey = await new Promise(resolve => {
    chrome.storage.local.get(['apiKey'], result => resolve(result.apiKey));
  });
  if (!apiKey || !ticker) {
    resultsDiv.innerHTML = 'Enter API key and ticker.';
    return;
  }
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/stable/news/stock?symbols=${ticker}&apikey=${apiKey}`
    );
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    resultsDiv.innerHTML = data.length === 0 ? 'No news found.' : data
      .map(item => `
        <div class="news-item">
          <h4>${item.title}</h4>
          <p>Publisher: ${item.publisher}</p>
          <p>Date: ${item.publishedDate}</p>
          ${item.image ? `<img src="${item.image}" alt="News image" style="max-width:100%;border-radius:4px;">` : ''}
          <p>${item.text}</p>
        </div>
      `)
      .join('');
  } catch (error) {
    resultsDiv.innerHTML = `Error: ${error.message}`;
  }
}
async function fetchFinancialEstimates() {
  const ticker = document.getElementById('estimates-ticker').value.toUpperCase();
  const period = document.getElementById('period').value;
  const resultsDiv = document.getElementById('estimates-results');
  resultsDiv.innerHTML = 'Loading...';
  const apiKey = await new Promise(resolve => {
    chrome.storage.local.get(['apiKey'], result => resolve(result.apiKey));
  });
  if (!apiKey || !ticker) {
    resultsDiv.innerHTML = 'Enter API key and ticker.';
    return;
  }
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/stable/analyst-estimates?symbol=${ticker}&period=${period}&page=0&limit=10&apikey=${apiKey}`
    );
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    resultsDiv.innerHTML = data.length === 0 ? 'No estimates found.' : data
      .map(item => `
        <div class="estimate-item">
          <h4>${item.date}</h4>
          <p>Revenue Avg: $${(item.revenueAvg / 1e9).toFixed(2)}B</p>
          <p>EBITDA Avg: $${(item.ebitdaAvg / 1e9).toFixed(2)}B</p>
          <p>Net Income Avg: $${(item.netIncomeAvg / 1e9).toFixed(2)}B</p>
          <p>EPS Avg: $${item.epsAvg.toFixed(2)}</p>
        </div>
      `)
      .join('');
  } catch (error) {
    resultsDiv.innerHTML = `Error: ${error.message}`;
  }
}
async function fetchPriceTargetNews() {
  const ticker = document.getElementById('price-target-ticker').value.toUpperCase();
  const resultsDiv = document.getElementById('price-target-results');
  resultsDiv.innerHTML = 'Loading...';
  const apiKey = await new Promise(resolve => {
    chrome.storage.local.get(['apiKey'], result => resolve(result.apiKey));
  });
  if (!apiKey || !ticker) {
    resultsDiv.innerHTML = 'Enter API key and ticker.';
    return;
  }
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/stable/price-target-news?symbol=${ticker}&page=0&limit=10&apikey=${apiKey}`
    );
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    resultsDiv.innerHTML = data.length === 0 ? 'No price targets found.' : data
      .map(item => `
        <div class="price-target-item">
          <h4>${item.newsTitle}</h4>
          <p>Price Target: $${item.priceTarget}</p>
          <p>Analyst: ${item.analystName || 'N/A'}</p>
          <p>Company: ${item.analystCompany}</p>
          <p>Date: ${item.publishedDate}</p>
        </div>
      `)
      .join('');
  } catch (error) {
    resultsDiv.innerHTML = `Error: ${error.message}`;
  }
}