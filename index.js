enchant(); //…①
var picNumber;//…②
var flg = 0;
window.onload = function() { //…③
	var game = new Game(320, 480); //…④
	game.preload('http://enchantjs.com/assets/images/chara3.gif'); //…⑤
	game.onload = function() { //…⑥
		var bgSprite = new Sprite(320, 480); //背景画像となるスプライト
        var bgSurface = new Surface(320, 480);
        bgSprite.image = bgSurface; //image 属性として指定
        
        var bear = new Sprite(32, 32); //…⑦
		bear.image = //…⑧
		game.assets['http://enchantjs.com/assets/images/chara3.gif'];
		bear.frame = 12; //…⑨
		bear.addEventListener(Event.ENTER_FRAME, function() { //…⑩
            //右へ進む
            if (flg == 0) {
                if (picNumber >= 12 && picNumber <=14) {
                	picNumber++; //…⑪
					if (picNumber > 14) { //…⑫
						picNumber = 12;
					}
					bear.frame = picNumber; //…⑬
					bear.x += 2; //…⑭
                }
                else {
                    picNumber = 12;
                }
            }
            //左へ進む
            else if (flg == 1) {
            	if (picNumber >= 6 && picNumber <= 8) {
                	picNumber++; //…⑪
					if (picNumber > 8) { //…⑫
						picNumber = 6;
					}
					bear.frame = picNumber; //…⑬
					bear.x -= 2; //…⑭
                }
                else {
                    picNumber = 6;
                }
            }
            //下へ進む
            else if (flg == 2) {
            	if (picNumber >= 0 && picNumber <= 2) {
                	picNumber++; //…⑪
					if (picNumber > 2) { //…⑫
						picNumber = 0;
					}
					bear.frame = picNumber; //…⑬
					bear.y += 2; //…⑭
                }
                else {
                    picNumber = 0;
                }
            }
            //上へ進む
            else if (flg == 3) {
            	if (picNumber >= 18 && picNumber <= 20) {
                	picNumber++; //…⑪
					if (picNumber > 20) { //…⑫
						picNumber = 18;
					}
					bear.frame = picNumber; //…⑬
					bear.y -= 2; //…⑭
                }
                else {
                    picNumber = 18;
                }
            }
        });
        
        bgSprite.addEventListener(Event.TOUCH_START, function(event) {
			var x,y;
            x = event.x - bear.x;
            y = event.y - bear.y;
            if (x >= 0) {
                if(y >= 0) {
                    if(x >= y) {
                        flg = 0; // 右方向移動に切り替える
                    }
                    else{
                    	flg = 2; // 上方向移動に切り替える
                    }
                }
                else{
                    if(x >= (y*-1)) {
                    	flg = 0; // 右方向
                    }
                    else{
                    	flg = 3; // 下方向
                    }
                }
                
            }
            else{
                if(y >= 0) {
                    if((x*-1) >= y){
                    	flg = 1; // 左方向
                    }
                    else{
                    	flg = 2; // 上方向
                    }
                }
                else{
                    if((x*-1) >= (y*-1)){
                    	flg = 1; // 左方向
                    }
                    else{
                    	flg = 3; // 下方向
                    }
                }
            }
		});
                      
    	game.rootScene.addChild(bear); //…⑮
        game.rootScene.addChild(bgSprite); //子として追加
	};
	game.start(); //…⑯
};