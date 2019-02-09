var count = 0;
    var countMath = document.getElementById("count");
    function clickCounter(){
        count++;
        countMath.value = count;
        
    }
  
  
    var counter = 0;   
    var add = (function () {
       
        return function () {return counter += 1;}
      })();
      var minus = (function () {

        return function () {return counter -= 1;}
      })();
      
      function plus(){
        document.getElementById("result").innerHTML = add();
      }
      function sub(){
        document.getElementById("result").innerHTML = minus();
      }
      
      if (counter < 0){
        document.getElementById("result").style.color = 'red';

      }
   
      
        
        
      
    