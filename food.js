class MilkFood{
    constructor(lastFed, foodStock){
        this.image = loadImage('milk.png');

    }
    
    getFoodStock(){
            var foodStock = database.ref('Food');
            foodStock.on("value", function(data){
                Food = data.val();
            })
        }
    updateFoodStock(x){
            database.ref('/').set({
                Food: x
            })
    }


    display(){

      var x = 80, y = 100;

      imageMode(CENTER);
      image(this.image, 80, 140, 70, 70);
 
         if(this.foodStock!=0){
            for(var i=0; i < this.foodStock; i++){
                if(i%10==0){
                x = 80;
                y = y + 50;
                }
            image(this.image, x, y, 50, 50);
            x = x + 50;

          }

         }

    }

}