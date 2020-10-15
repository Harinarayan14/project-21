function vanish(sun,obj1){
        if (sun.isTouching(obj1) ){
            obj1.visible  = false;
            obj1.destroy();
        }
         
        }
