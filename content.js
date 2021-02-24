var userConfirmation =confirm("You have 3 Trials to guess the key \n if you do not confirm you cant use the site features");
if (userConfirmation==true){
var secutityKEy="Jessuse";
var userGuess=0;
var counter=0;
document.body.style["background-image"] = "url(https://c2.staticflickr.com/6/5530/11442019345_d50b753156.jpg)";
while(counter<3){
    userGuess=prompt("Enter the security key");
    if (counter==0 &&userGuess==secutityKEy){
        document.body.style["background-image"] = "https://www.channelfutures.com/files/2019/10/Cybersecurity-877x432.jpg)";
        break;
    }else if(counter==1 && userGuess==secutityKEy){
        document.body.style["background-image"] = "url(https://c2.staticflickr.com/6/5530/11442019345_d50b753156.jpg)";
        break;
    }else if(counter==2&&userGuess==secutityKEy){
        document.body.style["background-image"] = "url(https://c2.staticflickr.com/6/5530/11442019345_d50b753156.jpg)";
        break;
    }else{
        alert("TRY AGAIN!!!")
    }
    counter+=1;
}
var images=new Array("url(https://th.bing.com/th/id/OIP.t4tfw0VMBLD8rUi4qZ6-rwHaEh?w=291&h=180&c=7&o=5&dpr=1.25&pid=1.7)","url(https://th.bing.com/th/id/OIP.1hZhpiGDgClKdBreodkqIQHaFj?w=237&h=180&c=7&o=5&dpr=1.25&pid=1.7)" , "url(https://www.nasdaq.com/sites/acquia.prod/files/2019-05/0902-Q19%20Total%20Markets%20photos%20and%20gif_CC8.jpg?1469739445)","url(https://th.bing.com/th/id/OIP.opBZBlzH1vQUYuDpgZw3AwGHCf?pid=ImgDet&rs=1)","url(https://th.bing.com/th/id/OIF.VgZ6ocf7kJhIxploVAG8Vg?pid=ImgDet&rs=1)","url(https://th.bing.com/th/id/OIF.ZYI0WI2oklIji2Yose1LuQ?pid=ImgDet&rs=1)");
var userSelection=parseInt(prompt("enter a number between 1&5 to chose \n background"));
document.body.style["background-image"] = images[userSelection];
var default_image = document.getElementById('default_image');
function imgloop()
  {
    var ar = [];
    ar.push("https://th.bing.com/th/id/OIP.zEi3upbdEgU2CmRVe8WBiAHaD-?pid=ImgDet&rs=1");
    ar.push("https://th.bing.com/th/id/Rad7d773bf3ad277fc8b5df124fde2ca3?rik=%2bT%2fbsNO8dNbpXQ&riu=http%3a%2f%2fwww.groundreport.com%2fwp-content%2fuploads%2f2016%2f11%2fProgramming-Languages-1.jpg&ehk=0G%2fXewDFd%2bsDqAotUtJte%2fnnJ3pC7IvZgDvvNnJzh8k%3d&risl=&pid=ImgRaw");
    ar.push("https://th.bing.com/th/id/OIP.pa9QIgVrWe-Nq8KESBsARQHaEK?pid=ImgDet&rs=1");
    for (i = 0; ar.length > i; i++)
    {
      var img = new Image(200, 200);
      img.src = ar[i];

      var src = document.getElementById("elementid");
      src.appendChild(img);
    }
  }
  imgloop();
}
