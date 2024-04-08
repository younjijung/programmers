class PrivateNumber {
    constructor(number){
        this.number = number;
    }  
  
    getPrivateNumber() {
        let count = this.number.length;
        let replacement = "*".repeat(count - 4);
        let modifiedString = replacement + this.number.substring(count - 4);
        return modifiedString;
    }
}

function solution(phone_number) {
    let phone = new PrivateNumber(phone_number);
    return phone.getPrivateNumber(); 
}