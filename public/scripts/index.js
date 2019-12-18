document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

function listJobsPage()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => 
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.body.innerHTML=xmlhttp.responseText;
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

function acceptJobs(e)
{
    // var title = document.getElementById("title").value;
    // var desc = document.getElementById("descriptions").value;
    // var sal = document.getElementById("salary").value;
    // console.log(title + " " + desc + " " + sal);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => 
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById('app').innerHTML=xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET","/acceptJobs",true);
    xmlhttp.send();
}