

cc.Class({
    extends: cc.Component,

    properties: {
       
    },


    onLoad () {
        //初始速度
        this.initVel = 0;
    },
       
    /*  
        碰撞回调。
		如果你的脚本中实现了这个函数，那么它将会在两个碰撞体开始接触时被调用。
		@param contact contact information
		@param selfCollider the collider belong to this rigidbody
		@param otherCollider the collider belong to another rigidbody 
	*/
    
    onBeginContact(contact, selfCollider, otherCollider) {
        //记录初始速度。使其回到起点时不会上升
        let regidBody = selfCollider.getComponent(cc.RigidBody);
        if(!this.initVel){
            
            this.initVel = regidBody.linearVelocity.y;
        }else{
            regidBody.linearVelocity.y = cc.v2(0,this.initVel);
        }
    },

});
