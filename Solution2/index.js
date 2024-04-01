function array(num1,num2) {   

  let newNum = [];            

  if (num1 <= num2) {
      for (let i = num1; i <= num2; i++) {   
                                             
          newNum.push(i);                    
      }
  }else {
      for (let i = num1; i >= num2; i--) {  
                                            
          newNum.push(i);                  
      }
  }
  return newNum;                            
}


console.log(array(4, 7));  
console.log(array(-4, 7)); 