const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numSet = "1234567890";
const symbolSet = "~`!@#$%^&*()_+-=[]{};'\:|,./<>?";


const posswordlen = document.querySelector("#posswordlen");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbols = document.querySelector("#symbols");



function getRandomData(dataset)
{
    const data = dataset[Math.floor(Math.random()*dataset.length)];
    return data;
    
}


function generatePassword()
{
    let password="";
    let selectdata="";
    if(uppercase.checked)
    {
        selectdata += uppercaseSet;
    }
    if(lowercase.checked)
    {
        selectdata += lowercaseSet;
    }
    if(number.checked)
    {
        selectdata += numSet;
    }
    if(symbols.checked)
    {
        selectdata += symbolSet;
    }


    if (selectdata.length === 0) 
    {
        alert("Please select at least one character set.");
        
    }

    for(let i=0;i<posswordlen.value;i++)
    {
        password = password + getRandomData(selectdata);
    }

    const passwordDisplay = document.querySelector("[password-data]");
    passwordDisplay.value = password;


    
}






function generate()
{
   
    
    
    generatePassword();
    
}






