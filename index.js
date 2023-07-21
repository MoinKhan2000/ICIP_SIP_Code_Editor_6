console.log("hellow world");
function run(){
    let html=document.getElementById('html').value;
    let css=document.getElementById('css').value;
    let js=document.getElementById('js').value;
    let output=document.getElementById('output');
    css="<style>"+css+"</style>";
    js="<scri"+"pt>"+js+"</scri"+"pt>";
    output.contentDocument.body.innerHTML=html+css+js;
}