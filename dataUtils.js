(function(){
    window['DataUtils'] = {};

    /*
    * map对象
    */
    var hashMap = {   
    	Set : function(key,value){
    		this[key] = value
    	},   
    	Get : function(key){
    		return this[key]
    	},   
    	Contains : function(key){
    		return this.Get(key) == null?false:true
    	},   
    	Remove : function(key){
    		delete this[key]
    	}   
	};

    /*
    * 时间对比
    * yyyy-mm-dd
    */

    function ContrastYMD(a,b) {
        var arra = a.split("-");
        var beginTime = new Date(arra[0], arra[1], arra[2]);
        var beginTimes = beginTime.getTime();

        var arrb = b.split("-");
        var endTime = new Date(arrb[0], arrb[1], arrb[2]);
        var endTimes = endTime.getTime();

        if (beginTimes >= endTimes) {
            return false;
        }else{
            return true; 
        }
    }

    /*
    * 时间对比
    * yyyy-mm-dd hh:mi:ss
    */
    function ContrastYMDHMS(a,b) {
        //var beginTime = "2009-09-21 00:00:00";
        //var endTime = "2009-09-21 00:00:01";
        var beginTime = a;
        var endTime = b;
        var beginTimes = beginTime.substring(0, 10).split('-');
        var endTimes = endTime.substring(0, 10).split('-');

        beginTime = beginTimes[1] + '-' + beginTimes[2] + '-' + beginTimes[0] + ' ' + beginTime.substring(10, 19);
        endTime = endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);

        var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;

        if (a < 0) {
            return 1;
        } else if (a > 0) {
            return 2;
        } else {
            return 3;
        }
    }


	function consoleLog(str){
		console.log(str);
	}
    window['DataUtils']['consoleLog']= consoleLog;
    window['DataUtils']['hashMap']= hashMap;
    window['DataUtils']['ContrastYMD']= ContrastYMD;
    window['DataUtils']['ContrastYMDHMS']= ContrastYMDHMS;

})();