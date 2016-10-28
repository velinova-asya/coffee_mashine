var sum = 0;
var change = 0;

function insertCoin(coin) {
  sum += coin;
  document.getElementById("sum").innerHTML = "Oбщо вкарана сума " + sum.toFixed(2);
};


function orderCoffee(price) {
  sum -= price;
  if (sum < 0) {
    document.getElementById("change").innerHTML = "Наличната сума не е достатъчна! Вземете Вашето ресто!" ;
  } else {
    document.getElementById("change").innerHTML = "Вашата напитка се приготвя ";
    setTimeout(moreDrinks, 2000);
  }
};

function moreDrinks() {
  document.getElementById("change").innerHTML = "Можете да поръчате още напитки за оставащатата Ви сума от "+ "<br>" + sum.toFixed(2) + 
  "<br>" + " или да получите рестото си чрез бутона 'Вземи ресто'";
};


function takeChange() {
  if (sum > 0) {
    document.getElementById("change").innerHTML = "Вземете Вашето ресто от " + sum.toFixed(2);
  }
  setTimeout(clear, 2000);
};



function clear() {
	sum = 0;
	change = 0;
	
	document.getElementById("sum").innerHTML = "СУМА";
	document.getElementById("change").innerHTML = "РЕСТО";
  //location.reload()
};