import mgnAccordion from './mgn-accordion';

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
