// Existing code
const icon = document.querySelector('.Icon');
const ul = document.querySelector('ul');
icon.addEventListener('click', () => {
    ul.classList.toggle('ShowData');
    if (ul.classList.contains('ShowData')) {
        document.getElementById('bar').className = 'fa fa-close';
    } else {
        document.getElementById('bar').className = 'fa fa-bars';
    }
});

let show = document.getElementById('shop');
let review = document.getElementById('review');
let blog = document.getElementById('blog');
let contact = document.getElementById('contact');

show.addEventListener('click', () => {
    show.style.color = 'rgb(156, 77, 16)';
    review.style.color = '';
    blog.style.color = '';
    contact.style.color = '';
});

review.addEventListener('click', () => {
    review.style.color = 'rgb(156, 77, 16)';
    show.style.color = '';
    blog.style.color = '';
    contact.style.color = '';
});

blog.addEventListener('click', () => {
    blog.style.color = 'rgb(156, 77, 16)';
    review.style.color = '';
    show.style.color = '';
    contact.style.color = '';
});

contact.addEventListener('click', () => {
    contact.style.color = 'rgb(156, 77, 16)';
    review.style.color = '';
    show.style.color = '';
    blog.style.color = '';
});
const contactname = document.getElementById('name');
const number = document.getElementById('number');
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',()=>{
    if(contactname.value == '' && number == ''){
        alert('Please Enter Your Contect Details')
    }else{
        alert('your Response Recorded')
        contactname.value = ''
        number.value = ''
    }
})

// Cards target
let itemPage = document.querySelector('.itempage');
let container = document.querySelector('.container');
const card = document.querySelectorAll('.card');
let imagitem = document.querySelector('#srcImag')
const Byproduct = document.getElementById('byBtn')
 const bypage = document.querySelector('.bypage')
 let Crose = document.getElementById('crose')
 let bytext = document.querySelector('.bytext');
 
card.forEach((currentValue) => {
    currentValue.addEventListener('click', () => {
        itemPage.style.display = 'flex';
        container.style.display = 'none';
        let imageSrc = currentValue.firstElementChild.src;
        imagitem.src = imageSrc
    });
    Byproduct.addEventListener('click',()=>{
        bypage.style.display='block'
        document.querySelector('.bytext').innerHTML=`
         <h3>Enter Details:</h3>
            <input type="text" placeholder="Enter Your Name" id='name'><br>
            <input type="text" placeholder="Enter Your Address" id='address'><br>
            <input type="text" placeholder="Enter Your Mobile" id='name'><br>
            <h3>Payment OPtion</h3>
            <select name=""id='name' >
                <option value="Google Pay">Google-Pay</option>
                <option value="Phone Pay">Phone-Pay</option>
            </select>
            `
            let button = document.createElement('button')
            button.innerText='Submit'
            bytext.appendChild(button)
            button.addEventListener('click',()=>{
                let name = document.getElementById('name')
                if(name.value == ''&& address.value =='' && mobile.value == ''){
                 alert('Please Enter Your Details')
                }else{
                  alert('your Response Recorded')
                  bypage.style.display='none'
                }
            })
    })
    Crose .addEventListener('click',()=>{
     bypage.style.display='none'
    })
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle the intersection
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1  // Adjust this value as needed
    });

    // Target elements for animation
    const elements = document.querySelectorAll('.fade-in, .slide-up, .scale-up');
    elements.forEach(element => {
        observer.observe(element);
    });
});
