const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navElements = document.querySelectorAll('a');
navElements.forEach((item, idx) => {item.textContent = Object.values(siteContent.nav)[idx]
item.style.color = 'green';
});


const newOne = document.createElement("p");
newOne.textContent = 'Pictures';
const nav = document.querySelector('nav');
nav.appendChild(newOne);

const newTwo = document.createElement("p");
newTwo.textContent = 'Videos';
nav.prepend(newTwo); 
nav.style.color = 'green';



// document.querySelector('nav a').text = 'Services';
// document.querySelector('nav a:nth-of-type(2)').text = 'Products';
// document.querySelector('nav a:nth-of-type(3)').text = 'Vision';
// document.querySelector('nav a:nth-of-type(4)').text = 'Features';
// document.querySelector('nav a:nth-of-type(5)').text = 'About';
// document.querySelector('nav a:nth-of-type(6)').text = 'Contact';



const headerImg = document.querySelector("#cta-img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const h1 = document.querySelector('.cta-text h1')
h1.innerHTML = "DOM </br> Is </br> Awesome!";

const bttn = document.querySelector(".cta-text button:nth-of-type(1)")
bttn.textContent = siteContent['cta']['button'];

document.querySelector('.top-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.top-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['features-content'];

document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content'];


const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


document.querySelector('.bottom-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['services-content'];

document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content'];

document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content'];

document.querySelector('.contact h4').innerHTML = siteContent['contact']['contact-h4'];
document.querySelector('.contact p').innerHTML = "123 Way 456 Street </br> Somewhere, USA";
document.querySelector('.container .contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
document.querySelector('.container .contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];

document.querySelector('.footer').textContent = siteContent['footer']['copyright'];

