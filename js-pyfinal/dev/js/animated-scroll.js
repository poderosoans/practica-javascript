const getInitialScroll = () => document.body.scrollTop;
const getFinalScroll = element => Math.ceil(element.getBoundingClientRect().top + getInitialScroll());

const animatedScrollTo = (targetElement, time) => {
	let initialPosition = getInitialScroll(),
		finalPosition = getFinalScroll(targetElement),
		distanceToScroll = finalPosition - initialPosition,
		scrollFragment = distanceToScroll / time;

	animateScroll(scrollFragment, finalPosition);


};

const animateScroll = (scrollFragment, finalPosition) => {
	let animatedScroll = setInterval(function(){
		document.body.scrollTop +=scrollFragment;
		if(scrollFragment>0){
		if(document.body.scrollTop > finalPosition - (scrollFragment / 2)){
			clearInterval(animatedScroll);
		}
		}else{
			if(document.body.scrollTop < finalPosition - (scrollFragment / 2)){
			clearInterval(animatedScroll);
		}
		}

	},1);
};


//console.log(getFinalScroll(document.getElementById("cap2")));
//let animatedScroll = setInterval(function(){
//	document.body.scrollTop +=10;
//},100);

const animatedScrollEvent = (originElement,time) => {
	if(originElement.tagName === 'A' && originElement.hash !== ''){
		let targetElement = document.getElementById(originElement.hash.slice(1));
		originElement.addEventListener('click', e =>{
			e.preventDefault();
			animatedScrollTo(targetElement, time);
		});
		
	}
};

const animatedScrollAllLinks = time => {
	let links = document.links;
	for (let link of links){
		animatedScrollEvent(link,time);
	}
}

animatedScrollAllLinks(200);

//animatedScrollEvent(document.getElementById('link2'), 500);