(function(){


    const customerImage = document.querySelector('#customer-image');

    const customerName = document.querySelector('#customer-name');

    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');

    // console.log(btn)


    let index = 1;

    const customers = [];


    function Customer(img, name, text){

        this.img =img;
 
        this.name = name;

        this.text = text;


    }

    function createCustomer(img, name, text){


        let currImg = `./img/${img}.jpg`;
        let customer = new Customer(currImg, name, text);
        customers.push(customer);



    }

    createCustomer(1, 'Jhon', "Love their service an very good cutomer service team");
    createCustomer(2, 'Jatin', "Love their service an very good cutomer service team");
    createCustomer(3, 'Shikhar', "Love their service an very good cutomer service team");
    createCustomer(4, 'Parth', "Love their service an very good cutomer service team");
    createCustomer(5, 'Saksham', "Love their service an very good cutomer service team");

    btn.forEach(function(button){
        console.log(button)

        // button.addEventListner('click',function(e){
            
        // })

        button.onclick = function(e){
            if(e.target.parentElement.classList.contains('prevbtn')){

                if(index === 0){
                    index = customers.length;
                }
                index--;

                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;

                customerText.textContent = customers[index].text;


            }

            if(e.target.parentElement.classList.contains('nextbtn')){
                index++;
                if(index === customers.length){
                    index = 0;
                }
                

                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;

                customerText.textContent = customers[index].text;


            }
        }
    })


})()