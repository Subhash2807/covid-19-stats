
var country;

totalCases = document.querySelector('#totalcases');
totalDeaths = document.querySelector('#totaldeaths')
newCases = document.querySelector('#newcases');
newDeaths = document.querySelector('#newdeaths')
activeCases = document.querySelector('#activecases');
totalRecovered = document.querySelector('#totalrecovered');

 
    
    fetch('/country').then((response)=>{
        response.json().then((data)=>{

            country = data;
      })

})





var inpt = '';
var input = document.querySelector('input');
input.addEventListener('keyup',(e)=>{

     if(e.keyCode==13)
    {
        var flag=0;
        inpt = input.value;
        country.body.response.forEach((element)=>{
            
        if(element.country.toUpperCase().indexOf(inpt.toUpperCase())>-1)
        {
            console.log(element)
            totalCases.innerText = element.cases.total;
            totalDeaths.innerText = element.deaths.total;
            newDeaths.innerText = element.deaths.new===null?0:parseInt(element.deaths.new);
            newCases.innerText = element.cases.new===null?0:parseInt(element.cases.new);
            activeCases.innerText = element.cases.active;
            totalRecovered.innerText = element.cases.recovered;
            var property = document.querySelector('.corona-heading-1').style;
            document.querySelector('.corona-heading-1').innerText = 'Coronavirus cases in '+element.country;
            document.querySelector('.corona-heading-1').style = property;
            document.querySelector('input').value ="";
            flag=1;
        }
       
    })
    if(!flag)
    {
        alert('No such country is found');
        document.querySelector('input').value ="";

    }
        
    }
    
});

function myfunction()
{
    $('.right-nav').slideToggle('slow')
}