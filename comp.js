Crafty.c("player",{
    make: function(x,y){
        Crafty.sprite(64,"./img/trainer.png",{hero:[0,0]});
        var player = Crafty.e("2D, DOM, player, hero").attr({x:x,y:y})
    }
});
