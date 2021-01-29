
function handleProductChange(product, isIncrese) {

  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;

  if (isIncrese == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrese == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  let productTotal = 0;

  if (product == "phone") {
    productTotal = productNewCount * 1219;
  }

  if (product == "case") {
    productTotal = productNewCount * 59;
  }


  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculateTotal();
}

function calculateTotal() {

  const caseCount = getInputValue("case");
  const phoneCount = getInputValue("phone");

  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText = "$" + totalPrice;
  const tax = Math.round(totalPrice * .1);
  document.getElementById("taxAmount").innerText = '$' + tax;
  const Gtotal = totalPrice + tax

  const GrantTotal = document.getElementById("grandTotal").innerText = "$" + Gtotal;

}

function getInputValue(product) {

  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}
