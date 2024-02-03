var inputText = document.getElementById('inputText1');

function getValue(val)
{
    console.log(val);
    inputText.value += val;

}

function clearAll()
{
    inputText.value = "";
}

function calculate()
{
    console.log(inputText.value);
    
    inputText.value = eval(inputText.value);
}