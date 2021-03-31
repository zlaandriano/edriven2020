var newCustomer = document.getElementById('newCustomer')
var ORNumber = document.getElementById('ORNumber')
var customerName = document.getElementById('customerName')
var item1 = document.getElementById('item1')
var item2 = document.getElementById('item2')
var item3 = document.getElementById('item3')
var item4 = document.getElementById('item4')
var itemList = [item1, item2, item3, item4]
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var q4 = document.getElementById('q4')
var subtotal1 = document.getElementById('subtotal1')
var subtotal2 = document.getElementById('subtotal2')
var subtotal3 = document.getElementById('subtotal3')
var subtotal4 = document.getElementById('subtotal4')
var save = document.getElementById('save')
var a = [ORNumber,
    customerName,
    item1,
    item2,
    item3,
    item4,
    p1,
    p2,
    p3,
    p4,
    q1,
    q2,
    q3,
    q4,
    subtotal1,
    subtotal2,
    subtotal3,
    subtotal4]
newCustomer.addEventListener('show.bs.modal', function(){ //TRIGGER UPON MODAL DISPLAY
    for(var i = 0; i < a.length; i++){
        a[i].value = ''
        if (i >= 2){
            a[i].disabled = true
        }
    }
    
})

const request = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese'
var response 
fetch (request)
.then((res) => {
    let converted = res.json()
    converted
    .then((data) => {      
        response = data
        for (var i = 0; i < itemList.length; i++){
            for (var ii = 0; ii < data['meals'].length; ii++){
                var option = document.createElement("option")
                var optionTextNode = document.createTextNode(data['meals'][ii]['strMeal'])
                option.value = data['meals'][ii]['strMeal']
                option.appendChild(optionTextNode)
                itemList[i].appendChild(option)
            }
        }
    })
    .catch((err) =>{
        console.log(err) 
    })
})
.catch((err) =>{
    console.log(err)
})


newCustomer.addEventListener('change', function(){ //TRIGGER EVERY CONTENT CHANGE INSIDE MODAL
    if(ORNumber.value != '' && customerName.value != ''){
        item1.disabled = false
    }
    else{
        item1.disabled = true
    }
})
ORNumber.addEventListener('change', function(){ //ORNUMBER VALIDATOR
    var data = JSON.parse(localStorage.getItem('customers'))
    if(data != null){
        for(var i = 0; i < data.length; i++){
            if(ORNumber.value == data[i]['ORNumber']){
                ORNumber.value = ''
                break
            }
        }
    }
})
customerName.addEventListener('change', function(){ //CUSTOMERNAME VALIDATOR
    if(customerName.value.search(' ') != -1 && customerName.value.split(' ').length == 2 && (isNaN(customerName.value.split(' ')[0]) && isNaN(customerName.value.split(' ')[1]))){
        var checker = true
        var customerNameArray = customerName.value.split(' ')
        var firstNameArray = customerNameArray[0].split('')
        var lastNameArray = customerNameArray[1].split('')       
        for(var i = 0; i < firstNameArray.length; i++){
            if(!((firstNameArray[i] >= "a" && firstNameArray[i] <= "z") || (firstNameArray[i] >= "A" && firstNameArray[i] <= "Z"))){
                customerName.value = ''
                checker = false
                break
            }
        }
        if(checker){
            for(var i = 0; i < lastNameArray.length; i++){
                if(!((lastNameArray[i] >= "a" && lastNameArray[i] <= "z") || (lastNameArray[i] >= "A" && lastNameArray[i] <= "Z"))){
                    customerName.value = ''
                    checker = false
                    break
                }
            }
            if(checker){
                item1.disabled = false   
            }
            else{
                item1.disabled = true   
            }               
        }
        else{
            customerName.value = ''
        }              
           
    }
    else{
        item1.disabled = true
        customerName.value = ''
    }
    
})

item1.addEventListener('change', function(){ //ITEM1 VALIDATOR (REFER VARIABLE NAMING FOR OTHER ITEMS)
        p1.value = ''
        q1.value = ''
        subtotal1.value = ''
        p1.disabled = false
        q1.disabled = false
        
        item2.value = ''
        p2.value = ''
        q2.value = ''
        subtotal2.value = ''
        item2.disabled = true
        p2.disabled = true
        q2.disabled = true

        item3.value = ''
        p3.value = ''
        q3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        p3.disabled = true
        q3.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
})
p1.addEventListener('change', function(){ // PRICE1 VALIDATOR (REFER VARIABLE NAMING FOR OTHER PRICES)
    if(isNaN(p1.value)){

        p1.value = ''
        subtotal1.value = ''
        save.disabled = true

        item2.value = ''
        p2.value = ''
        q2.value = ''
        subtotal2.value = ''
        item2.disabled = true
        p2.disabled = true
        q2.disabled = true

        item3.value = ''
        p3.value = ''
        q3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        p3.disabled = true
        q3.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
    }
    else{
        if(p1.value <= '0'){
            subtotal1.value = ''
            q1.value = ''
            save.disabled = true

            item2.value = ''
            p2.value = ''
            q2.value = ''
            subtotal2.value = ''
            item2.disabled = true
            p2.disabled = true
            q2.disabled = true
    
            item3.value = ''
            p3.value = ''
            q3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            p3.disabled = true
            q3.disabled = true
    
            item4.value = ''
            p4.value = ''
            q4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            p4.disabled = true
            q4.disabled = true 
        }
        else{
            if(q1.value <= "0" || q1.value == ''){
                subtotal1.value = ''
                save.disabled = true
    
                item2.value = ''
                p2.value = ''
                q2.value = ''
                subtotal2.value = ''
                item2.disabled = true
                p2.disabled = true
                q2.disabled = true
        
                item3.value = ''
                p3.value = ''
                q3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                p3.disabled = true
                q3.disabled = true
        
                item4.value = ''
                p4.value = ''
                q4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                p4.disabled = true
                q4.disabled = true 
            }
            else{
                var result = parseFloat(p1.value) * parseInt(q1.value)
                subtotal1.value = result.toFixed(2)
                save.disabled = false
                item2.disabled = false
                p2.disabled = false
                q2.disabled = false            
            }            
        }
    }
})
q1.addEventListener('change', function(){// QTY VALIDATOR (REFER VARIABLE NAMING FOR OTHER QTYS)
    if(p1.value <= '0'){
        q1.value = ''
        subtotal1.value = ''
        save.disabled = true

        item2.value = ''
        p2.value = ''
        q2.value = ''
        subtotal2.value = ''
        item2.disabled = true
        p2.disabled = true
        q2.disabled = true

        item3.value = ''
        p3.value = ''
        q3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        p3.disabled = true
        q3.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
    }
    else{
        if(q1.value <= '0'){
            q1.value = ''
            subtotal1.value = ''
            save.disabled = true
    
            item2.value = ''
            p2.value = ''
            q2.value = ''
            subtotal2.value = ''
            item2.disabled = true
            p2.disabled = true
            q2.disabled = true
    
            item3.value = ''
            p3.value = ''
            q3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            p3.disabled = true
            q3.disabled = true
    
            item4.value = ''
            p4.value = ''
            q4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            p4.disabled = true
            q4.disabled = true         
        }
        else{
            if(p1.value <= "0" || p1.value == ''){
                subtotal1.value = ''
                save.disabled = true
    
                item2.value = ''
                p2.value = ''
                q2.value = ''
                subtotal2.value = ''
                item2.disabled = true
                p2.disabled = true
                q2.disabled = true
        
                item3.value = ''
                p3.value = ''
                q3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                p3.disabled = true
                q3.disabled = true
        
                item4.value = ''
                p4.value = ''
                q4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                p4.disabled = true
                q4.disabled = true 
            }
            else{
                var result = parseFloat(p1.value) * parseInt(q1.value)
                subtotal1.value = result.toFixed(2)
                save.disabled = false
                item2.disabled = false
                p2.disabled = false
                q2.disabled = false            
            }     
        }
    }
    
})
item2.addEventListener('change', function(){
        p2.value = ''
        q2.value = ''
        subtotal2.value = ''
        p2.disabled = false
        q2.disabled = false
        save.disabled = true
    
        item3.value = ''
        p3.value = ''
        q3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        p3.disabled = true
        q3.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
})
p2.addEventListener('change', function(){
    if(isNaN(p2.value)){
        p2.value = ''
        subtotal2.value = ''
        save.disabled = true

        item3.value = ''
        p3.value = ''
        q3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        p3.disabled = true
        q3.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
    }
    else{
        if(p2.value <= '0'){
            subtotal2.value = ''
            q2.value = ''
            save.disabled = true
    
            item3.value = ''
            p3.value = ''
            q3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            p3.disabled = true
            q3.disabled = true
    
            item4.value = ''
            p4.value = ''
            q4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            p4.disabled = true
            q4.disabled = true 
        }
        else{
            if(q2.value <= "0" || q2.value == ''){
                subtotal2.value = ''
                save.disabled = true
        
                item3.value = ''
                p3.value = ''
                q3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                p3.disabled = true
                q3.disabled = true
        
                item4.value = ''
                p4.value = ''
                q4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                p4.disabled = true
                q4.disabled = true 
            }
            else{
                var result = parseFloat(p2.value) * parseInt(q2.value)
                subtotal2.value = result.toFixed(2)
                save.disabled = false
                item3.disabled = false
                p3.disabled = false
                q3.disabled = false            
            }            
        }
    }
})
q2.addEventListener('change', function(){
    if(p2.value <= '0'){
        q2.value = ''
        subtotal2.value = ''
        save.disabled = true

        item3.value = ''
        p3.value = ''
        q3.value = ''
        subtotal3.value = ''
        item3.disabled = true
        p3.disabled = true
        q3.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
    }
    else{
        if(q2.value <= '0'){
            q2.value = ''
            subtotal2.value = ''
            save.disabled = true
        
            item3.value = ''
            p3.value = ''
            q3.value = ''
            subtotal3.value = ''
            item3.disabled = true
            p3.disabled = true
            q3.disabled = true
    
            item4.value = ''
            p4.value = ''
            q4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            p4.disabled = true
            q4.disabled = true         
        }
        else{
            if(p2.value <= "0" || p2.value == ''){
                subtotal2.value = ''
                save.disabled = true
        
                item3.value = ''
                p3.value = ''
                q3.value = ''
                subtotal3.value = ''
                item3.disabled = true
                p3.disabled = true
                q3.disabled = true
        
                item4.value = ''
                p4.value = ''
                q4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                p4.disabled = true
                q4.disabled = true 
            }
            else{
                var result = parseFloat(p2.value) * parseInt(q2.value)
                subtotal2.value = result.toFixed(2)
                save.disabled = false
                item3.disabled = false
                p3.disabled = false
                q3.disabled = false            
            }     
        }
    }
    
})
item3.addEventListener('change', function(){
        p3.value = ''
        q3.value = ''
        subtotal3.value = ''
        p3.disabled = false
        q3.disabled = false
        save.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
})
p3.addEventListener('change', function(){
    if(isNaN(p3.value)){
        p3.value = ''
        subtotal3.value = ''
        save.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
    }
    else{
        if(p3.value <= '0'){
            subtotal3.value = ''
            q3.value = ''
            save.disabled = true
    
            item4.value = ''
            p4.value = ''
            q4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            p4.disabled = true
            q4.disabled = true 
        }
        else{
            if(q3.value <= "0" || q3.value == ''){
                subtotal3.value = ''
                save.disabled = true
        
                item4.value = ''
                p4.value = ''
                q4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                p4.disabled = true
                q4.disabled = true 
            }
            else{
                var result = parseFloat(p3.value) * parseInt(q3.value)
                subtotal3.value = result.toFixed(2)
                save.disabled = false
                item4.disabled = false
                p4.disabled = false
                q4.disabled = false            
            }            
        }
    }
})
q3.addEventListener('change', function(){
    if(p3.value <= '0'){
        q3.value = ''
        subtotal3.value = ''
        save.disabled = true

        item4.value = ''
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        item4.disabled = true
        p4.disabled = true
        q4.disabled = true
    }
    else{
        if(q3.value <= '0'){
            q3.value = ''
            subtotal3.value = ''
            save.disabled = true
    
            item4.value = ''
            p4.value = ''
            q4.value = ''
            subtotal4.value = ''
            item4.disabled = true
            p4.disabled = true
            q4.disabled = true         
        }
        else{
            if(p3.value <= "0" || p3.value == ''){
                subtotal3.value = ''
                save.disabled = true
        
                item4.value = ''
                p4.value = ''
                q4.value = ''
                subtotal4.value = ''
                item4.disabled = true
                p4.disabled = true
                q4.disabled = true 
            }
            else{
                var result = parseFloat(p3.value) * parseInt(q3.value)
                subtotal3.value = result.toFixed(2)
                save.disabled = false
                item4.disabled = false
                p4.disabled = false
                q4.disabled = false            
            }     
        }
    }
    
})
item4.addEventListener('change', function(){
        p4.value = ''
        q4.value = ''
        subtotal4.value = ''
        p4.disabled = false
        q4.disabled = false
        save.disabled = true
})
p4.addEventListener('change', function(){
    if(isNaN(p4.value)){
        p4.value = ''
        subtotal4.value = ''
        save.disabled = true
    }
    else{
        if(p4.value <= '0'){
            subtotal4.value = ''
            q4.value = ''
            save.disabled = true
        }
        else{
            if(q4.value <= "0" || q4.value == ''){
                subtotal4.value = ''
                save.disabled = true
            }
            else{
                var result = parseFloat(p4.value) * parseInt(q4.value)
                subtotal4.value = result.toFixed(2)
                save.disabled = false          
            }            
        }
    }
})
q4.addEventListener('change', function(){
    if(p4.value <= '0'){
        q4.value = ''
        subtotal4.value = ''
        save.disabled = true
    }
    else{
        if(q4.value <= '0'){
            q4.value = ''
            subtotal4.value = ''
            save.disabled = true      
        }
        else{
            if(p4.value <= "0" || p4.value == ''){
                subtotal4.value = ''
                save.disabled = true
            }
            else{
                var result = parseFloat(p4.value) * parseInt(q4.value)
                subtotal4.value = result.toFixed(2)
                save.disabled = false          
            }     
        }
    }
    
})