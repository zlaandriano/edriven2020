var viewItem = document.getElementById('viewItem')
var viewOrders = document.querySelectorAll('#viewOrder')
var ORNumberView = document.getElementById('ORNumberView')
var customerNameView = document.getElementById('customerNameView')
var item1View = document.getElementById('item1View')
var item2View = document.getElementById('item2View')
var item3View = document.getElementById('item3View')
var item4View = document.getElementById('item4View')
var p1View = document.getElementById('p1View')
var p2View = document.getElementById('p2View')
var p3View = document.getElementById('p3View')
var p4View = document.getElementById('p4View')
var q1View = document.getElementById('q1View')
var q2View = document.getElementById('q2View')
var q3View = document.getElementById('q3View')
var q4View = document.getElementById('q4View')
var subtotal1View = document.getElementById('subtotal1View')
var subtotal2View = document.getElementById('subtotal2View')
var subtotal3View = document.getElementById('subtotal3View')
var subtotal4View = document.getElementById('subtotal4View')
var exit = document.getElementById('exit')
var data = JSON.parse(localStorage.getItem("customers"))
var itemss = [item1View, item2View, item3View, item4View]
var pricess = [p1View, p2View, p3View, p4View]
var qtyss = [q1View, q2View, q3View, q4View]
var subtotalss = [subtotal1View, subtotal2View, subtotal3View, subtotal4View]
var orderNum;
var viewItemBody = document.getElementById('viewItemBody')

viewItem.addEventListener("hidden.bs.modal",function(){
    viewItemBody.innerHTML = ''
})
viewOrders.forEach(function(viewOrder){
    viewOrder.addEventListener('click', function(e){
        console.log(e.target)
        orderNum = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText //CATCH ORDER NUMBER THAT IS CLICKED
        for(var i = 0; i < data.length; i++){
            if(data[i]['ORNumber'] == orderNum){    
                ORNumberView.value = data[i]['ORNumber']
                customerNameView.value = data[i]['name']
                for(var ii = 0; ii < data[i]['items'].length; ii++){
                    console.log(itemss[ii])
                    if(data[i]['items'][ii]['name'] != ''){
                        var card = document.createElement("div")
                        card.className = "card"
                        card.style.width = "11rem"
                        card.style.height = "19rem"
                        card.style.color = "white"
                        card.style.backgroundColor = "#903d2b"
                        var image = document.createElement("img")
                        image.src = data[i]['items'][ii]['thumbnail']
                        image.style.height = "150px"
                        image.style.width = "150px"
                        var cardBody = document.createElement("div")
                        cardBody.className = "card-body"
                        var cardTitle = document.createElement("h6")
                        cardTitle.className = "card-title"
                        var cardTxtNode = document.createTextNode(data[i]["items"][ii]["name"])
                        cardTitle.appendChild(cardTxtNode)
                        var cardPrice = document.createElement("p")
                        cardPrice.className = "card-text"
                        var priceTxtNode = document.createTextNode("Price: "+data[i]["items"][ii]["price"])
                        
                        cardPrice.appendChild(priceTxtNode)
                        var cardQty = document.createElement("p")
                        cardQty.className = "card-text"
                        var qtyTxtNode = document.createTextNode("Quantity: "+data[i]["items"][ii]["qty"])
                        cardQty.appendChild(qtyTxtNode)

                        cardBody.appendChild(cardTitle)
                        cardBody.appendChild(cardPrice)
                        cardBody.appendChild(cardQty)
                        card.appendChild(image)
                        card.appendChild(cardBody)
                        viewItemBody.appendChild(card)
                    }
                }
            }
        }
    })
})