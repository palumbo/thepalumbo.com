rules = [ 
	"Say what you want", 
	"Spend considerable time figuring out what you want", 
	"If you don't know, say so. Never miss an opportunity to learn something new", 
	"If it's not on my calendar, it doesn't exist", 
	"Don't wait. Go now", 
	"Fill up at half tank", 
	"Get as much sleep as possible", 
	"I am sensitive to my environment, keep it organized, clean and filled with things I value and appreciate", 
	"Set clear, valuable goals that can be achieved incrementally (use BSQ method)", 
	"Kill your heroes, kill the impostor syndrome", 
	"Be particular. If something is not up to my standards, don't waste time with it", 
	"Work is only as difficult as you make it", 
	"Lies are too laborious a tool to use which don't scale to life's demands", 
	"Always provide clear, descriptive instructions and criteria for success.", 
	"Approach everything as both a designer and project manager, equal parts creative and problem solver", 
	"Listen to your body, it knows better", 
	"Take your pleasure (and comfort) seriously", 
	"Production over consumption", 
	"The people who are crazy enough to think they can change the world are the ones who do", 
	"work > intelligence", 
	"Minimize inconsequential decisions", 
	"Write it down", 
	"If it's worth buying, it's worth buying the best you can afford", 
	"Fail...until you don't", 
	"Never ask 'Can it be done?', only 'How can it be done?'", 
	"Very successful people say 'no' to almost everything (Warren Buffett)", 
	"Purposeful action requires clear intention"
]; 

var i = 0; // initialize the index counter

 

window.onload = document.getElementById('rule').innerHTML = "click for rules"; 

window.onclick = function() {  
    document.getElementById('rule').innerHTML = rules[i]; 
    i++;
    if (i >= rules.length) { 
        i = 0; 
    } 
    
} 

