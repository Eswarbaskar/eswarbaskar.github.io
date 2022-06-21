const urlApi = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner";

async function fetchPosts(){
    try{
        const response = await fetch(urlApi);
        if(response.ok){
            const data = await response.json();
             let data1= "";
             data.map((values)=>{
                 data1+=`<div class="card">
                 <h3 class="titel"> The Product name "${values.name}"</h3>
                 <p class="brand"> The Brand "${values.brand}"</p>
                 <p class="price"> the Product Cost is "${values.price}"</p>
              </div>`

             });
             document.getElementById("cards").innerHTML=data1;
        }else{
            throw new Error("Falied to fetch");
        }
    }catch (ex){
        console.log(ex.message);
    }
};
fetchPosts();



