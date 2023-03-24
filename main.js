
var array=[0,1,2,3,4,5,6,7,8,9,10];
var count=0;
function even(array)
{
for(i=0; i<array.length; i++)
	{
	if(array[i]%2==0)
		{
		document.write(array[i] +"&nbsp;"+"&nbsp;"+"even number");
		document.write("<br>");
		count++;
		}
	}	
	return count;
}
document.write(even(array));
document.write("<br>");

var array=[1,2,3,4,5,6,7,8,9,10];
var count=0;
function odd(array)
{
for(i=0; i<array.length; i++)
	{
	if(array[i]%2!=0)
		{
		document.write(array[i]+"&nbsp;"+"&nbsp;"+"odd number");
		document.write("<br>");
		count++;
		}
	}	
	return count;
}
document.write(odd(array));

	
	