// To open card, create a function that hides card and shows code on click of button Open Me.


function showCode()
{
  const showCodeImage = document.getElementById("discountCode");
     console.log(showCodeImage)
  showCodeImage.src = "images/discountcode.png.jpg" ;

  let cardButton = document.getElementById('showGiftCardBtn')
      console.log(cardButton)
  cardButton.textContent = " Your code! 10% off any of our products or services. Thank You For Your Bussiness"
}








///////////////////////////////////////////////////////////////
// const showGiftCard = document.getElementById("ShowGiftCardBtn");
// const showCodeImage = document.getElementById("discountCode");
// showGiftCard.addEventListener("click", ()  => {
//   showCodeImage.style.dispaly = "block";

//   let cardButton = document.getElementById('showGiftCardBtn')
//   console.log(cardButton)
//   cardButton.textContent = " Your code! 10% off any of our products or services. Thank You For Your Bussiness"
// });

 

