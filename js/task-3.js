function checkForSpam(message) {
    let lowermessage=message.toLowerCase();
    const hasSpam=lowermessage.includes("spam","sale");
    const hasSale=lowermessage.includes("sale");
    
    if (hasSpam) return `true`;
    else if (hasSale) return `true`;
    else return `false`;

}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true