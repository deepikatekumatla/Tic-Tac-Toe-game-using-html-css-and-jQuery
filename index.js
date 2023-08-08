var char;
var alreadypressed=[];
var topbutton=false;
var clicked=false;
$("button").click(function(){
    var buttonname=$(this).attr('id');
    if(alreadypressed.length==9)
    {
        sound("wrong");
        $("h1").text("GAME OVER...");
         topbutton=false;
        setTimeout(function () {
                    location.reload(true);
                  }, 1000);
    }
    if(buttonname=="x-turn")
    {
        char="X";
        sound("yellow");
        shadow("x-turn");
        topbutton=true;
    }
    if(buttonname=="o-turn")
    {
        char="O";
        sound("yellow");
        shadow("o-turn");
        topbutton=true;
    }
    if(topbutton==true && buttonname!="o-turn" && buttonname!="x-turn")
    {
        sound("button");
        shadowbutton(buttonname);
        var buttonvalue=alreadypressedfun(buttonname);
        if(buttonvalue==false)
        {
            putletter(buttonname);
            if(char=="O")
            {
                char="X";
            }
            else
            {
                char="O";
            }
            alreadypressed.push(buttonname);
            topbutton=false;
            var k=checkrow();
            var t=checkcolumn();
            var w=checkdiagonal1();
            var z=checkdiagonal2();
            if(k=="X WON" || t=="X WON" || w=="X WON" || z=="X WON" )
            {
                sound("red");
                $("h1").text("X WON...");
                topbutton=false;
                setTimeout(function () {
                    location.reload(true);
                  }, 2000);
            }
            if(k=="O WON" || t=="O WON" || w=="O WON" || z=="O WON" )
            {
                sound("red");
                $("h1").text("O WON...");
                topbutton=false;
                setTimeout(function () {
                    location.reload(true);
                  }, 2000);
            }
        }
        else
        {
            sound("green");
            setTimeout(function () {
                $("h1").text("The Button is already pressed...Try another One");
              }, 1000);
            setTimeout(function () {
                $("h1").text("TIC TAC TOE");
              }, 2000);
        }
    }

});
function  putletter(buttonname)
{
    $("#"+buttonname).text(char);
}
function alreadypressedfun(buttonname)
{
    for(var k=0;k<alreadypressed.length;k++)
    {
        if(alreadypressed[k]==buttonname)
        {
            return true;
        }
    }
    return false;
}
function sound(soundname)
{
    var audio=new Audio("sounds/"+soundname+".mp3");
    audio.play();
}
function shadowbutton(buttonname) {
    $("#"+buttonname).addClass("pressed");
    setTimeout(function () {
      $("#"+buttonname).removeClass("pressed");
    }, 100);
}
function shadow(buttonxo) {
    if(buttonxo=="o-turn")
    {
         $("."+buttonxo).addClass("pressedxo");
        if($(".x-turn").hasClass("pressedxo"))
        {   
          $(".x-turn").removeClass("pressedxo");
        }
    }
    if(buttonxo=="x-turn")
    {
        $("."+buttonxo).addClass("pressedxo");
        if($(".o-turn").hasClass("pressedxo"))
        {   
          $(".o-turn").removeClass("pressedxo");
        }
    }
   
}
function checkrow()
{
    var i,j,k;
    var xcount=0;
    var ocount=0;
    for(i=1 ; i<4 ; i++ )
    {
        for(j=1 ; j<4 ; j++)
        {
            k=$(".r"+i+"c"+j).text();
            if(k=="X")
            {
                xcount++;
            }
            if(k=="O")
            {
                ocount++;
            }
        }
        if(xcount==3)
        {
            return "X WON";
        }
        if(ocount==3)
        {
            return "O WON";
        }
        xcount=0;
        ocount=0;
    }
    return "false"
}
function checkcolumn()
{
    var i,j,k;
    var xcount=0;
    var ocount=0;
    for(i=1 ; i<4 ; i++ )
    {
        for(j=1 ; j<4 ; j++)
        {
            k=$(".r"+j+"c"+i).text();
            if(k=="X")
            {
                xcount++;
            }
            if(k=="O")
            {
                ocount++;
            }
        }
        if(xcount==3)
        {
            return "X WON";
        }
        if(ocount==3)
        {
            return "O WON";
        }
        xcount=0;
        ocount=0;
    }
    return "false"
}

function checkdiagonal1()
{
    var i,j,k;
    var xcount=0;
    var ocount=0;
    for(i=1,j=1 ; i<4,j<4 ; i++,j++)
    {
            k=$(".r"+i+"c"+j).text();
            if(k=="X")
            {
                xcount++;
            }
            if(k=="O")
            {
                ocount++;
            }
    }
    if(xcount==3)
    {
        return "X WON";
    }
    if(ocount==3)
    {
        return "O WON";
    }
    return "false"
}
function checkdiagonal2()
{
    var i,j,k;
    var xcount=0;
    var ocount=0;
    for(i=1,j=3 ; i<4,j>0 ; i++,j--)
    {
            k=$(".r"+i+"c"+j).text();
            if(k=="X")
            {
                xcount++;
            }
            if(k=="O")
            {
                ocount++;
            }
    }
    if(xcount==3)
    {
        return "X WON";
    }
    if(ocount==3)
    {
        return "O WON";
    }
    return "false"
}

 
 
