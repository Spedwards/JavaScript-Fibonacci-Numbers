function fibonacci(l) {
	l=l||1;
	o = [1, 1];
	if(l==1) return '1';
	while(o.length < l) {
		o.push(o[o.length-1] + o[o.length - 2]);
	}
	return o.join(', ');
}

function fibonacciNumberAt(i) {
	var Phi = 1.618033988749895;
	if(i===undefined || i < 0)i=i||0;
	return Math.round(Math.pow(Phi, i+1)/Math.sqrt(5));
}