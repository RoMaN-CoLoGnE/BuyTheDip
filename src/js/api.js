function getTrendingCoins() {
  const apiUrl = 'https://api.coingecko.com/api/v3/search/trending';
  $.ajax({
    url: apiUrl,
    type: 'GET',
    success: function (data) {
      displayTrendingCoins(data.coins);
    },
    error: function (error) {
      console.error('Error while getting data:', error);
    },
  });
}

function displayTrendingCoins(coins) {
  const coinList = $('.trend-coins__list');
  coinList.empty();

  coins.slice(0, 7).forEach(coin => {
    const listItem = `
        <li class='trend-coins__item'>
          <img class='trend-coins__logo' src="${coin.item.small}">
          <span class='trend-coins__name'>Name: ${coin.item.name} (Symbol: ${coin.item.symbol})</span>
          <span class='trend-coins__price'>Price: ${coin.item.price_btc} BTC</span>
          <span class='trend-coins__rank'>Market Cap Rank: ${coin.item.market_cap_rank}</span>
        </li>
      `;
    coinList.append(listItem);
  });
}

$(document).ready(function () {
  getTrendingCoins();
});
