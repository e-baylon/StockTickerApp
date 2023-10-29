console.log('im fetch apoi')

//fetches url for 


var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey={API_KEY}';

async function logStock() {
    
    let response = await fetch(url);




if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let stocks = await response.json();
  console.log(stocks)
// Get
// Stock Symbol
// Stock Price
// Date
// Three additional pieces of Information

 console.log(stocks)

} else {
  alert("HTTP-Error: " + response.status);
}

}


logStock();


