

    
function submit1()
{
    var inputs = [];

    for (var j = 1; j <= 4; j++) 
    {
        
        inputs.push(document.getElementById("input_"+j).value);
    }
    document.getElementById("showpara1").innerHTML = inputs.join(" ");

}

function submit2()
{
    var inputs = [];

    for (var j = 1; j <= 4; j++) 
    {
        
        inputs.push(document.getElementById("input_1"+j).value);
    }
    document.getElementById("showpara2").innerHTML = inputs.join(" ");

}