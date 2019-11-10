
cc.Class({
    extends: cc.Component,

    properties: {
        ballNode: cc.Node,

    },


    onLoad () {
        //初始化物理引擎
        this.initPhysics();
        //点击加速
        this.node.on("touchstart",this.boost,this);

        this.gameStart = 0;
    },
    onDestroy(){
        //关闭加速
        this.node.off("touchstart",this.boost,this);
    },

    //初始化物理引擎
    initPhysics() {
        let manager = cc.director.getPhysicsManager();

        //打开物理引擎
        manager.enabled = true;
        //设置重力
        manager.gravity = cc.v2(0,-3000);
    },

    //加速
    boost() {
       
        let regidBody = this.ballNode.getComponent(cc.RigidBody);
        /* 刚体在世界坐标下的线性速度 linearVelocity: Vec2;*/
	
        regidBody.linearVelocity = cc.v2(0,-1000);
        console.log("加速");
    },

});
