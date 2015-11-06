rules = [ 
	"This is rule 1", 
	"This is rule 2", 
	"This is rule 3"
]; 

var i = 0; // initilizin the index counter

 

window.onclick = function() { 
	document.getElementById('rule').innerHTML = rules[i];
	i++; 
	if (i > rules.length) { 
		i = 0; 
	}
}

