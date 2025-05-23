 Open files with the code editor like <a href="https://code.visualstudio.com">VScode.</a>

I made a simple Chrome extension that allows you to see your chosen stock’s: 
 1. target prices assigned by top investment analysts
 2. the most important company news
 3. analyst estimates for your chosen stock.

If you are interested in reading on how to build this extension, you can read my article <a href="https://site.financialmodelingprep.com/how-to/how-to-create-your-own-stock-analysis-chrome-extension">How to Create Your Own Stock Analysis Chrome Extension.</a>
If you want to see a practical application of this extension, read my article <a href="https://site.financialmodelingprep.com/how-to/how-to-forecast-stock-prices-using-fmp-news-stock-price-targets-and-financial-statements-estimates">How to forecast stock prices using FMP news, stock price targets, and financial statements estimates.</a>
If you don’t want to build this extension but want to use it, download it from the Chrome Web Store, it’s called <a href="https://chromewebstore.google.com/detail/stock-news-and-forecast-e/giliocmealnhiegcjafllopfbcfnnnpo">Stock News and Forecast Extension.</a>

## Support
If you find this extension useful, you can support me by sending a tip to the following crypto addresses. Click a button to copy the address to your clipboard.
<div style="text-align: center; margin: 20px 0;">
  <button onclick="copyToClipboard('1LL5cSjh5pkxWFXgVkmtLjCSWV49YKoa9m')" style="padding: 10px 20px; margin: 5px; background-color: #000000; color: #ffffff; border: none; border-radius: 5px; cursor: pointer;">Copy Bitcoin Address</button>
  <button onclick="copyToClipboard('0xda06d4fd2d0e268c57c75cc7520619572a9667d2')" style="padding: 10px 20px; margin: 5px; background-color: #000000; color: #ffffff; border: none; border-radius: 5px; cursor: pointer;">Copy Ethereum Address</button>
</div>

<div id="popup" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #98e07e; color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); font-family: Arial, sans-serif; font-size: 14px; z-index: 10000; text-align: center;">Address copied to clipboard!</div>

<script>
function copyToClipboard(address) {
  navigator.clipboard.writeText(address)
 .then(() => {
   const popup = document.getElementById('popup');
   popup.style.display = 'block';
   setTimeout(() => {
     popup.style.display = 'none';
   }, 2000);
 })
 .catch(err => {
   alert('Failed to copy address: ' + err);
 });
}
</script>


 


