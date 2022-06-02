function calc() {
            //получаем ссылку на элемент Select (Тип дизайна)
            var platform_first = document.getElementById("platform");
            
           
            //var result = document.getElementById("result"); 
    
    var authorization_first = document.getElementById("authorization");
    
    var animation_first = document.getElementById("animation");
    
     var func_first = document.getElementById("func");
 
     var screen_first = document.getElementById("screen");
    
     var platform = platform_first.options[platform_first.selectedIndex].value;
    
    var func = func_first.options[func_first.selectedIndex].value;
    
    
    var screen = screen_first.options[screen_first.selectedIndex].value;
    
    var animation = animation_first.options[animation_first.selectedIndex].value;
    
     var authorization = authorization_first.options[authorization_first.selectedIndex].value;
    
    
    
            let price = 0;
            
            price = (platform *1) + (1*authorization) + (1*animation) + (1*screen) + (1*func);
 
            result.innerHTML = price;
    
    
   

    
        }