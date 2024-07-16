const cartIssueButton= document.querySelector('.search-cart-display-checkout-button');


cartIssueButton.addEventListener('click',async ()=>{
    const response = await fetch('https://msns-soi.onrender.com/cart/'+currentusername.textContent); 
    const data = await response.json();
    await fetch('https://msns-soi.onrender.com/issue/'+currentusername.textContent,{body:JSON.stringify({books:data.bookid}),method:"POST",headers: { 'Content-Type': 'application/json' }});
    await fetch('https://msns-soi.onrender.com/cart/deleteall/'+currentusername.textContent);
    await fetchCart();
});
const issueButtons=document.querySelectorAll('.issue')
issueButtons.forEach((x)=>{
    x.addEventListener('click',async (e)=>{
    const abookId = e.target.parentElement.querySelector('[hidden]').textContent; 
    await fetch('https://msns-soi.onrender.com/issue/'+currentusername.textContent,{body:JSON.stringify({books:[abookId]}),method:"POST",headers: { 'Content-Type': 'application/json' }});

    });
});