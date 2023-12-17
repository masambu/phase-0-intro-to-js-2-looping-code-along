function writeCards(names, giftType) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${giftType} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
}




function countDown(integer) {
    for (let i = integer; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);