$(document).ready(function(){
    $('select').formSelect();
  });
  
function listJobsPage()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => 
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById('app').innerHTML=xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET","/",true);
    xmlhttp.send();
}

function postJobsPage()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => 
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById('app').innerHTML=xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET","/post",true);
    xmlhttp.send();
}

function listJobs()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => 
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById('displayJobs').innerHTML=xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET","/listJobs",true);
    xmlhttp.send();
}
