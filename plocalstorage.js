/*
    pomeloStorage
    Author : pomeloJ
    description : just easy to use
*/
(function(window){
    window.pstore={
        //set a item data
        'set':function(name,data){
            let dataType = typeof data;
            let dataString = JSON.stringify(data);
            if (dataType == 'function')dataString = data.toString();//if is function then convert function to string

            let result = JSON.stringify({'type':dataType,'d':dataString});
            return localStorage.setItem(name,result);
        },
        //get one item
        'get':function(name){
            let parseObj=null;
            try {
                parseObj = JSON.parse(localStorage.getItem(name));
            }catch(objError){
                console.log('error format', objError);
            }

            let dataString = parseObj['type'];
            if(typeof dataString == 'undefined')return null;
            let result = null;
            switch(dataString){
                case 'boolean':
                    result = (parseObj['d']==='true'?true:false);
                break;
                case 'number':
                    result = parseFloat(parseObj['d']);
                break;
                case 'string':
                case 'object':
                    result = parseObj['d'];
                break;
                case 'function':
                    //eval('result = '+parseObj['d']);
                    console.log('Because of security,plase "eval" on your code');
                    result = parseObj['d'];
                break;
                default:
                    result = null;
                break;
            } 
            return result;
        },
        //get all about pomelo Storage data
        'getAll':function(){
            let obj = this;
            let arr = Object.entries(localStorage);

            let result = {}
            arr.forEach((ele) => {
                result[ele[0]] = obj.get(ele[0]);
            });


            return result;
        }
    }
}(window));
