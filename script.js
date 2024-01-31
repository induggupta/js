const button=document.getElementById("btn")
const gp=document.getElementById("gp")
const p=document.getElementById("p")
const c=document.getElementById("c")
button.addEventListener("click",function()
{
    alert("button got clicked")
})
c.addEventListener("click",function()
{
    alert("child got clicked")

})
p.addEventListener("click",function()
{
    alert("parent got clicked")

})
gp.addEventListener("click",function()
{
    alert("gp got clicked")
})
const btndiv =document.getElementById("button")
btndiv.addEventListener(click,function(e)
{
    alert(e.target.textcontent + "clicked")
})