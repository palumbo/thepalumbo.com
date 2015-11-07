rules = [ 
	"1. Say what you want", 
	"2. Spend considerable time figuring out what you want", 
	"3. If you don't know, say so. Never miss an opportunity to learn something new", 
	"4. If it's not on my calendar, it doesn't exist", 
	"5. Don't wait. Go now", 
	"6. Fill up at half tank", 
	"7. Get as much sleep as possible", 
	"8. I am sensitive to my environment, keep it organized, clean and filled with things I value and appreciate", 
	"9. Set clear, valuable goals that can be achieved incrementally (use BSQ method)", 
	"10. Kill your heroes, kill the impostor syndrome", 
	"11. Be particular. If something is not up to my standards, don't waste time with it", 
	"12. Work is only as difficult as you make it", 
	"13. Lies are too laborious a tool to use which don't scale to life's demands", 
	"14. Always provide clear, descriptive instructions and criteria for success.", 
	"15. Approach everything as both a designer and project manager, equal parts creative and problem solver", 
	"16. Listen to your body, it knows better", 
	"17. Take your pleasure (and comfort) seriously", 
	"18. Production over consumption", 
	"19. The people who are crazy enough to think they can change the world are the ones who do", 
	"20. work > intelligence", 
	"21. Minimize inconsequential decisions", 
	"22. Write it down", 
	"23. If it's worth buying, it's worth buying the best you can afford", 
	"24. Fail...until you don't", 
	"25. Never ask 'Can it be done?', only 'How can it be done?'", 
	"26. Very successful people say 'no' to almost everything (Warren Buffett)", 
	"27. Purposeful action requires clear intention"
]; 

var i = 0; // initialize the index counter

 

window.onclick = function() { 
	document.getElementById('rule').innerHTML = rules[i];
	i++; 
	if (i >= rules.length) { 
		i = 0; 
	}
}

