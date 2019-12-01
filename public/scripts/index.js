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

function postJobs()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => 
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById('app').innerHTML=xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET","/postJobs",true);
    xmlhttp.send();
}
