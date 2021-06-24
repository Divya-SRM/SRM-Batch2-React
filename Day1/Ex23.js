class StaticString {
    
    static staticMethod(str) {
        if(str.includes("program"))
        {
            return true;
        }
        
    }
  
  }
  
  
  console.log(StaticString.staticMethod("static example program"));