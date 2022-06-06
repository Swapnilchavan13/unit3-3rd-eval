
// let amount=JSON.parse(localStorage.getItem("amount"));
// console.log("amount:", amount)

// document.getElementById("wallet_balance").innerText = amount;


// let voucher= JSON.parse(localStorage.getItem("purchase")) || [];
let voucher =[];
let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    var vou=(res.vouchers);
    console.log(vou);
    localStorage.setItem("purchase", JSON.stringify(vou))

    displaydata(res.vouchers)
}).catch(function(err){
    console.log(err);
})

function displaydata(vouchers){
    let main=document.querySelector("#main");
    data.forEach(function(elem){

        let box=document.createElement("div");
        box.setAttribute("id" ,"voucher_list")
        let image= document.createElement("img");
        image.src=elem.image;
        let btn= document.createElement("button");
        btn.setAttribute("class","buy_voucher");
        btn.innerText="Buy"
    btn.addEventListener("click" , function(){
        myfunction (elem)
    })
    box.append(image,btn);
    main.append(box)
    })
}
function myfunction(elem){
voucher.push(elem);
localStorage.setItem("purchase",JSON.stringify(voucher));
}