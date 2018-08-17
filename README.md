# mgn-accordion ( Don't Need jQuery )


Implement accordion function.
- Target browser : IE9+
- In case of IE9, opening and closing accordion without transition.

___

# Install

```
npm i mgn-accordion -S
```

## Or Download raw data
[↓ download "mgn-accordion.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-accordion/master/src/mgn-accordion.js)


___

# Import

```
import mgnAccordion from 'mgn-accordion';
```

___

# Constructor

```
new mgnAccordion(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|Specify target element.<br>ex) ".accordion"|
|option|Object|-|ex)<br> option = {<br> toggleSpeed: 100,<br> btnElm: "dl dt",<br> detailElm: "dl dd"<br>}|

|Option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|toggleSpeed|Number|0|Adjust opening and closing speed.|
|btnElm|String|".accordion_btn"<br>(if “.accordion”)|Specify element to be button.|
|detailElm|String|".accordion_detail"<br>(if “.accordion”)|Specify element to be content.|

___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|Toggle( element )|String|Operate closing and opening of the accordion designated by element.<br>( ex: ".default_open" )|
|Open( element )|String|Open the accordion designated by element.|
|Close( element )|String|Close the accordion designated by element.|
|OpenEnd = function(){};|Function|To be executed after opening accordion.|
|CloseEnd = function(){};|Function|To be executed after closing accordion.|

___

# Demo

[https://frontend-isobar-jp.github.io/mgn-accordion/](https://frontend-isobar-jp.github.io/mgn-accordion/)

```
import mgnAccordion from 'mgn-accordion';

let accordion = new mgnAccordion(".j-accordion");

accordion.OpenEnd = function(){
    console.log("OpenEnd");
};
accordion.CloseEnd = function(){
    console.log("CloseEnd");
};

////

let accordion2 = new mgnAccordion(
	".j-accordion2",
	{
		toggleSpeed: 200,
		btnElm: "dt",
		detailElm: "dd"
	}
);

setTimeout(function() {
    accordion2.Open( ".open" );
},1000);
setTimeout(function() {
    accordion2.Close(".close");
},2000);
```
