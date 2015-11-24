# Math.Plus.js

The native Javascript **Math** object has [a lot of useful methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).  There are some common operations it does not support, however.  This little library adds a few useful tools you may find yourself needing.


## Supported Methods

**Math.avg(**_x1_**,** _x2_**,** _xn_**)**  

Returns the average of a set.

You may pass this method any number of arguments, or an array of numbers. All elements that are not numbers are ignored.

**Math.squr(**_num_**)**

Returns the square of a number.

**Math.cube(**_num_**)**  

Returns the cube of a number.

**Math.irandom(**_min_**,** _max_**)**  

Returns a random integer between _min_ and _max_.  If only one number is given, the integer will be between 0 and _max_.

**Math.frandom(**_min_**,** _max_**)**  

Returns a random float between _min_ and _max_.  If only one number is given, the float will be between 0 and _max_.  If no number is given, the result is identical to _Math.random()_ e.g. a float between 0 and 1

**Math.mean(**_x1_**,** _x2_**,** _xn_**)**  

Identical to _Math.avg()_

**Math.median(**_x1_**,** _x2_**,** _xn_**)**  

Returns the median of a set.  

You may pass this method any number of arguments, or an array of numbers. All elements that are not numbers are ignored.

**Math.mode(**_x1_**,** _x2_**,** _xn_**)**  

Returns the mode of all all numbers passed as arguments.  

You may pass this method any number of arguments, or an array of numbers. All elements that are not numbers are ignored.

**Math.range(**_x1_**,** _x2_**,** _xn_**)**  

Returns the range of a set.  

You may pass this method any number of arguments, or an array of numbers. All elements that are not numbers are ignored.

**Math.rms(**_x1_**,** _x2_**,** _xn_**)**  

Returns the root mean square of a set.  

You may pass this method any number of arguments, or an array of numbers. All elements that are not numbers are ignored.

**Math.lineLen(**_x1_**,** _y1_**,** _x2_ **_y2_**,** _xn_**,** _yn_**)**  

Returns the length of a line described by a set of xy coordinate points on a plane.  This method can take three forms of input:

* cordinate components as arguments e.g. Math.lineLen(x1,y1,x2,y2,x3,y3)
* coordinate components as elements in an array e.g. Math.lineLen([x1,y1,x2,y2,x3,y3])
* coordinate components as an array of arrays e.g. Math.lineLen([[x1,y1],[x2,y2],[x3,y3]])


## Comming Attractions

I want to add the following methods when I have time:

* Math.sum()  // Sum a set of numbers
* Math.area() // Calculate the area of a polygon




