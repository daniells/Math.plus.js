/*      
    Math.plus.js            (c) Daniel Swartzendruber 2015          MIT License           

    A small library of Math addons that give the Math object extra methods

    Math.squr(num)                      |   Square of num
    Math.cube(num)                      |   Cube of num
    Math.irandom(min, max)              |   Random integer between min and max
    Math.frandom(min, max)              |   Random float between min and max
    Math.mean(x1, x2, xn)               |   Math.mean([x1, x2, xn])
    Math.avg(x1, x2, xn)                |   same as mean()
    Math.median(x1, x2, xn)             |   Math.median([x1, x2, xn])
    Math.mode(x1, x2, xn)               |   Math.mode(x1, x2, xn)
    Math.range(x1, x2, xn)              |   Math.range([x1, x2, xn])
    Math.rms(x1, x2, xn)                |   Math.rms([x1, x2, xn])  Returns root mean square
    Math.lineLen(x1,y1, x2,y2, xn,yn)   |   Math.lineLen([x1,y1,x2,y2,xn,yn])  |  [Math.lineLen([[x1,y1],[x2,y2],[xn,yn]])

    If there is a problem with arguments to these methods they return false.

    Math methods can also be passed an array. 

    Math.mode() method returns null if the set has no mode. 

    If Math.rrandom() or .irandom() is called with no arguments it behaves like the normal Math.random()

 */     

(function(){
    /*  Square  */
    Object.defineProperty(Math, 'sqr', {
        value:function(x){
            if(x.constructor === Number) return Math.pow(x,2);
            else return false;
        }
    });
    /*  Cube  */
    Object.defineProperty(Math, 'cube', {
        value:function(x){
            if(x.constructor === Number) return Math.pow(x,3);
            else return false;
        }
    });
    /*  Average / Mean  */
    Object.defineProperty(Math, 'mean', {
        value:function(){
            if(arguments[0].constructor === Number){    
                var sum = 0, reals = Array.prototype.slice.call(arguments).filter(function(elem){return elem.constructor === Number;});    
                if(reals.length){
                    for(var i = 0; i != reals.length; i++){
                        sum += reals[i];
                    }
                    return sum/reals.length;
                }
            }
            else if(arguments[0].constructor === Array){
                var sum = 0, reals = arguments[0].filter(function(elem){return elem.constructor === Number;});    
                if(reals.length){
                    for(var i = 0; i != reals.length; i++){
                        sum += reals[i];
                    }
                    return sum/reals.length;
                }
                else return sum;
            }
            else return sum;
        }
    });
    /* the same as above */
    Object.defineProperty(Math, 'avg', {value: Math.mean});
    /* Median */
    Object.defineProperty(Math, 'median', {
        value:function(){
            if(arguments[0].constructor === Number){ 
                reals = Array.prototype.slice.call(arguments).filter(function(elem){return elem.constructor === Number;}).sort(function(a, b) {return a - b;});
                if(reals.length){
                    if(reals.length % 2 == 0)
                        return (reals[reals.length/2-1] + reals[reals.length/2]) /2 ;
                    else
                        return reals[Math.ceil(reals.length/2-1)];
                }
                else return false;
            }
            else if(arguments[0].constructor === Array){
                var reals = arguments[0].filter(function(elem){return elem.constructor === Number;}).sort(function(a, b) {return a - b;});
                if(reals.length){
                    if(reals.length % 2 === 0)
                        return (reals[reals.length/2-1] + reals[reals.length/2]) /2 ;
                    else
                        return reals[Math.ceil(reals.length/2-1)];
                }
                else return false;
            }
        }
    }); 
    /* mode() Returns null if a set has no mode.  Null is falsy, but null !== false so you can distinguish the difference. */
    Object.defineProperty(Math, 'mode', {
        value:function(){
            if(arguments[0].constructor === Number){ 
                var reals = Array.prototype.slice.call(arguments).filter(function(elem){return elem.constructor === Number;});
                if(reals.length){
                    var mode = String(reals[0]), bins = {};
                    reals.forEach(
                        function(elem){
                            bins[elem.toString()] = bins[elem.toString()] === undefined ? 1 : bins[elem.toString()] + 1 ;
                        }
                    );
                    for(var key in bins){
                        mode = bins[key] > bins[mode] ? key : mode;
                    }
                    if(bins[mode] > 1)
                        return Number(mode);
                    else return null;
                }
            }
            else if(arguments[0].constructor === Array){
                var reals = arguments[0].filter(function(elem){return elem.constructor === Number;});
                if(reals.length){
                    var mode = String(reals[0]), bins = {};
                    reals.forEach(
                        function(elem){
                            bins[elem.toString()] = bins[elem.toString()] === undefined ? 1 : bins[elem.toString()] + 1 ;
                        }
                    );
                    for(var key in bins){
                        mode = bins[key] > bins[mode] ? key : mode;
                    }
                    if(bins[mode] > 1)
                        return Number(mode);
                    else return null;
                }
            }
            else return false;
        }
    }); 
    /* Range */
    Object.defineProperty(Math, 'range', {
        value:function(){
            if(arguments[0].constructor === Number){ 
                reals = Array.prototype.slice.call(arguments).filter(function(elem){return elem.constructor === Number;}).sort(function(a, b) {return a - b;});
                if(reals.length)
                    return reals[reals.length-1] - reals[0];
                else return false;
            }
            else if(arguments[0].constructor === Array){
                reals = arguments[0].filter(function(elem){return elem.constructor === Number;}).sort(function(a, b) {return a - b;});
                if(reals.length){
                    return reals[reals.length-1] - reals[0];
                }
                else return false;
            }
            else return false;
        }
    }); 
    /* Root Mean Square */
    Object.defineProperty(Math, 'rms', {
        value:function(){
            if(arguments[0].constructor === Number){    
                var squaresum = 0, reals = Array.prototype.slice.call(arguments).filter(function(elem){return elem.constructor === Number;});    
                if(reals.length){
                    reals.forEach(
                        function(elem){
                            squaresum += Math.pow(elem,2);
                        }
                    );
                    return Math.sqrt(squaresum/reals.length);
                }
                else return false;
            }
            else if(arguments[0].constructor === Array){
                var squaresum = 0, reals = arguments[0].filter(function(elem){return elem.constructor === Number;});    
                    if(reals.length){
                        reals.forEach(
                            function(elem){
                                squaresum += Math.pow(elem,2);
                            }
                        );
                        return Math.sqrt(squaresum/reals.length);
                    }
                    else return false;
            }
            else return false;
        }
    }); 
    /* Length of a line segment or polyline */
    Object.defineProperty(Math, 'lineLen', {
        value:function(){
            if(arguments[0].constructor === Number){
                var reals = Array.prototype.slice.call(arguments).filter(function(elem){return elem.constructor === Number;});  
                if(!(reals.length%2)){ 
                    var sum = 0;
                    for(var i=0; i<reals.length-2; i+=2){
                        sum +=  ( Math.sqrt( Math.pow( (reals[i+2] - reals[i]),2) + Math.pow( (reals[i+3] - reals[i+1]) ,2) ) );
                    }
                    return sum;
                }
                else return false;
            }
            else if(arguments[0].constructor === Array){
                if(arguments[0][0].constructor === Number){
                    var reals = arguments[0].filter(function(elem){return elem.constructor === Number;});  
                    if(!(reals.length%2)){ 
                        var sum = 0;
                        for(var i=0; i < reals.length-2; i+=2){
                            sum +=  ( Math.sqrt( Math.pow( (reals[i+2] - reals[i]),2) + Math.pow( (reals[i+3] - reals[i+1]) ,2) ) );
                        }
                        return sum;
                    }
                    else return false;
                }
                else if(arguments[0][0].constructor === Array){
                    var pairs = arguments[0].filter(function(elem){return elem.constructor === Array;});
                    var sum = 0;
                    for(var i=0; i < pairs.length; i++){
                        if(pairs[i+1]){
                            var reals_a = pairs[i].filter(function(elem){return elem.constructor === Number;});
                            var reals_b = pairs[i+1].filter(function(elem){return elem.constructor === Number;});
                            if(reals_a.length === 2 && reals_b.length === 2)
                                sum +=  ( Math.sqrt( Math.pow( (reals_b[0] - reals_a[0]),2) + Math.pow( (reals_b[1] - reals_a[1]) ,2) ) );
                        }  
                    }
                    return sum;
                }
                else return false;
            }
            else return false;
        }
    });
    /* Random integer between a min and max.  If no argument is given it returns a random decimal between 0 and 1.  */

    Object.defineProperty(Math, 'irandom', {
        value:function(min, max) {
            if(arguments.length === 0)
                return Math.random();
            if(min.constructor === Number && max.constructor === Number && arguments.length === 2){
                var rand = Math.random();
                return Math.floor(Math.random() * (max+1 - min)) + min; /* max+1 allows the random int to also fall on the max */
            }
            else return false;
        }
    });
    /* Random float between a min and max.  If no argument it returns a random decimal between 0 and 1. */
    Object.defineProperty(Math, 'frandom', {
        value:function(min, max) {
            if(arguments.length === 0) return Math.random();
            if(arguments.length == 1){
                if(min.constructor === Number){
                    return Math.random() * (min);
                }
                else throw("Math.frandom() accepts only Numbers.");
            }
            else if(arguments.length === 2){
                if(min.constructor === Number && max.constructor === Number && arguments.length === 2)
                    return Math.random() * (max - min) + min;
                else throw("Math.frandom() accepts only Numbers.");
            }
        }
    });
})();

