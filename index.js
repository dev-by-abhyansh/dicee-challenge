var randomnumber1=Math.floor(Math.random()*6)+1;
console.log(randomnumber1);//We will be using node to run the javascript code here in the vscode without the help of the browser
//I will be storing the image object inside a variable 
const diceimg1= document.querySelector("img.img1");
diceimg1.setAttribute("src" , "images/dice"+randomnumber1+".png");//Now every time you reload the website the randomnumber1 will get updated and the after the websites HTML gets loaded then the javascript is applied again with the updated diceimg




var randomnumber2=Math.floor(Math.random()*6)+1;
const diceimg2=document.querySelector("img.img2");//We have stored the second image element object in the constant variable diceimg2
diceimg2.setAttribute("src","images/dice"+randomnumber2+".png");





const heading=document.querySelector("h1");//stored the heading object inside the variable 

if(randomnumber1>randomnumber2)
{
    heading.innerHTML="<em>🏆 Player 1 Wins!</em>";
}
else if(randomnumber1==randomnumber2)
{
    heading.innerHTML="<em>😲 Draw!</em>";
}
else{
    heading.innerHTML="<em>👑 Player 2 Wins!</em>";
}

