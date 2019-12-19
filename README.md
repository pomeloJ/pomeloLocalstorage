# pomeloLocalstorage
 It's really simple for localstorage managed [Javascript(ES6)]

*for demo something quickly*

*for simple demand*

*for dont't want to think too much*

*for any simple reason*

## CDN JS
for simplicity,just copy and coding

we don't say anymore
```javascript
<script src="https://cdn.ank.uno/github/pomeloJ/pomeloLocalstorage/plocalstorage.js"></script>
```

## Basic sample

```javascript
//init it's global function just call it
pstore;
```
### Set
Just set what you need,any data type.
```javascript
//set a item
pstore.set('aNumber',123);
pstore.set('aNumberFloat',123.32);

//with boolean true/false
pstore.set('aFalse',false);

//or set object , array or string
pstore.set('aObject',{'hello':'world'});
pstore.set('aArray',[1,3,5]);
pstore.set('aString','hello you are world');

//event set a function
pstore.set('aFunction',function(name){alert('name');});
//BUT BEACUSE OF SECURITY,function only store string,when use it,must be using "eval" yourself
```
### Get
What data type set,get what data type you set.  
```javascirpt
//get a item
pstore.get('aNumber');//return 123

pstore.get('aNumberFloat');//return 123.32

pstore.get('aObject');//return {'hello':'world'}

//if data type is function,then return data with "string"  
eval('let func = '+pstore.get('aFunction'));//it's work
```
####Get All
If you want get all the data with pomeloLocalStorage
```javscript
pstore.getAll();
```
It will list all you set with pomeloLocalStorage lib,if not then return null;


# Future
* we have no idea now.....

* we expect to make anything intuitive and simple,maybe just for 71% common situation.

# Star
if this JS helps you, please let us know by giving **star** , thank you.
