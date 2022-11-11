let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl =document.getElementById('ul-el');
const deletBtn = document.getElementById('delete-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); //array
const saveBtn = document.getElementById('save-btn');

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
    
}


saveBtn.addEventListener('click', function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);

    })
    
})

function render(leads){

    let listItems = '';

    for (let i = 0; i< leads.length; i++){
       
       listItems += `<li>
                        <a target = "_blank" href =" ${leads[i]}"> ${leads[i]} </a>
                    </li>`; //<li><a href = '#'></a></li>
    }
    
    ulEl.innerHTML = listItems;
  

}

deletBtn.addEventListener('dblclick', function(){
    localStorage.clear();
    myLeads = [];
    ulEl.innerHTML = ''; //or render()
})

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    inputEl.value =''
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //convert array to string so can save on local storage
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));

})




function printLastItem(){   //Altenative function to renderLeads()

    let i = myLeads.length-1;
    ulEl.innerHTML +=`<li><a target = "_blank" href = "${myLeads[i]}"> ${myLeads[i]}<a></li>`; //<li><a target = "_blank" href ="#"></a></li>

}
