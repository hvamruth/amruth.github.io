function optimizeLayoutForResolution() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  console.log('Screen width:', screenWidth, 'px');
  console.log('Screen height:', screenHeight, 'px');

  // Add your logic to optimize layout based on screen width and height
  // For example, you can modify CSS classes, adjust element sizes, etc.
}

// Call the function when the window loads and when it's resized
window.addEventListener('load', optimizeLayoutForResolution);
window.addEventListener('resize', optimizeLayoutForResolution);


const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  slideIndex++;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  slideIndex--;
  updateSlider();
});

function updateSlider() {
  const slideWidth = document.querySelector('.slider img').clientWidth;
  slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}









// Function to adjust styles for mobile devices
function adjustStylesForMobile() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
        // Apply mobile styles
        const elements = document.querySelectorAll('.your-mobile-class');

        elements.forEach(element => {
            // Modify styles for mobile view
            element.style.fontSize = '14px';
            // Add other style modifications as needed
        });
    }
}

// Call the function initially and on window resize
adjustStylesForMobile();
window.addEventListener('resize', adjustStylesForMobile);











Home

const converted = {
  body: { margin: "0", padding: "0", overflowX: "hidden" },
  "html, body": { height: "100%" },
  ".some-element": { marginBottom: "0", paddingBottom: "0" },
  "@media (max-width: 767px)": { body: { fontSize: "14px" } },
  "@media (min-width: 768px) and (max-width: 1024px)": {
    body: { fontSize: "16px" }
  },
  "*": { margin: "0", padding: "0" },
  element: { margin: "0", padding: "0" },
  ".container": {
    height: "100vh",
    width: "100%",
    backgroundImage: "url(bgck.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingLeft: "5%",
    paddingRight: "5%",
    boxSizing: "border-box",
    position: "relative"
  },
  ".navbar": {
    width: "700%",
    height: "14vh",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    font: "bold",
    flex: 1,
    paddingLeft: "18px"
  },
  ".logo": { width: "60px", cursor: "pointer" },
  "nav ul li": {
    display: "inline-block",
    listStyle: "none",
    margin: "15px 35px"
  },
  "nav ul li a": { textDecoration: "none", color: "#87adfe", fontWeight: 400 },
  ul: { textDecoration: "none", color: "#000" },
  ".theme": {
    right: "100px",
    display: "inline-block",
    position: "absolute",
    marginRight: "140px",
    bottom: "400px",
    paddingRight: "30px",
    paddingLeft: "15px",
    paddingTop: "40px"
  },
  ".contents h1": {
    fontSize: "30px",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontWeight: "50vh",
    marginTop: "600px",
    marginRight: ["150px", "30%"],
    marginBottom: "10px",
    color: "#232d60"
  },
  ".contents h2": {
    fontSize: "30px",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontWeight: "50vh",
    marginTop: "20px",
    marginBottom: "10px",
    marginRight: "50%",
    color: "#232d60"
  },
  ".contents h3": {
    fontSize: "30px",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontWeight: "50vh",
    marginTop: "20px",
    marginBottom: "10px",
    marginRight: "50%",
    color: "#232d60"
  },
  ".contents p": {
    fontSize: "30px",
    fontFamily: " ",
    fontWeight: "50vh",
    color: "#232d60",
    marginRight: "50%"
  },
  ".contents": { marginLeft: "10", marginTop: "10", marginRight: "40%" },
  ".contents.btn": {
    display: "inline-block",
    background: "linear-gradient(45deg, #87adfe, #ff77cd)",
    borderRadius: "6px",
    padding: "10px 20px",
    boxSizing: "border-box",
    textDecoration: "none",
    color: "#fff",
    boxShadow: "3px 8px 22px rgba(94, 28, 68, 0, 15)"
  },
  ".feature-img": {
    height: "60%",
    position: "absolute",
    bottom: "170px",
    right: "700px"
  },
  ".middle": {
    height: "100vh",
    width: "100%",
    backgroundPosition: "center",
    position: "absolute",
    top: "100%",
    right: "0%"
  },
  ".slider-container": {
    maxWidth: "1150px",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
    bottom: "-150px"
  },
  ".slider": {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    animation: "transform 0.5s ease-in-out",
    fontSize: "0"
  },
  ".slide": { flexShrink: 0, width: "100%", boxSizing: "border-box" },
  img: { maxWidth: "100%", height: "auto" },
  ".prev, .next": {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "10px 15px"
  },
  ".prev": { left: "0" },
  ".next": { right: "0" },
  ".contents1": {
    fontSize: "30px",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontWeight: "30vh",
    marginTop: "-650px",
    marginRight: ["px", "70%"],
    marginBottom: "0px",
    textAlign: ["70%", "justify"],
    textRendering: "optimizeLegibility",
    color: "#ffffff"
  }
}


Aboutus

HTML

document.write('<!DOCTYPE html>');
document.write('<html lang="en">');
document.write('<html>');
document.write('<html>');
document.write('<title/>About Us</title>');
document.write('<link rel="stylesheet" href="about.css">');
document.write('<link rel="stylesheet" href="script.js">');
document.write('');
document.write('');
document.write('</head>');
document.write('<body>');
document.write('');
document.write('<div class="container">');
document.write('<div class="navbar">');
document.write('	<img src="logo.png" width="90" height="50 "class="logo.png">');
document.write('');
document.write('		');
document.write('</div>');
document.write('</nav>');
document.write('');
document.write('');
document.write('<div class="text1">');
document.write('</text>About Us</text>');
document.write('</div>');
document.write('');
document.write('');
document.write('<div class="text2">');
document.write('<text2>Welcome to KeepHiring, your trusted partner in IT Consultation and Recruitment. ');
document.write('	At KeepHiring, we specialize in connecting exceptional IT professionals with ');
document.write('	top-tier companies. With years of experience in the industry, our team of ');
document.write('	dedicated experts understands the unique challenges of the IT sector. ');
document.write('	We pride ourselves on our ability to match talent with opportunity, ');
document.write('	ensuring both candidates and clients achieve their goals.</text2>');
document.write('</div>');
document.write('');
document.write('<div class="image">');
document.write('	<img src="About.jpg" width="700" height="500" class="About.jpg"');
document.write('</div>');
document.write('');
document.write('<div class="text3">');
document.write('</text>Our Mission</text>');
document.write('</div>');
document.write('');
document.write('');
document.write('');
document.write('<div class="text4">');
document.write('	Our mission is to revolutionize IT recruitment by providing personalized, efficient, ');
document.write('	and transparent services. We believe in building long-lasting relationships, focusing ');
document.write('	on quality over quantity, and always striving for excellence.');
document.write('</div>');
document.write('');
document.write('');
document.write('');
document.write('<div class="image1">');
document.write('	<img src="mission800.png" width="620" height="350" class="mission800.png"');
document.write('</div>');
document.write('');




JS
const converted = {
  body: { margin: "0", padding: "0", overflowX: "hidden" },
  "html, body": { height: "100%" },
  ".some-element": { marginBottom: "0", paddingBottom: "0" },
  "@media (max-width: 767px)": { body: { fontSize: "14px" } },
  "@media (min-width: 768px) and (max-width: 1024px)": {
    body: { fontSize: "16px" }
  },
  "*": { margin: "0", pading: "0" },
  ".container": {
    height: "100vh",
    width: "100%",
    backgroundImage: "url(bgck.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingLeft: "5%",
    paddingRight: "5%",
    boxSizing: "border-box",
    position: "relative"
  },
  ".navbar": {
    width: "700%",
    height: "14vh",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    font: "bold",
    flex: 1,
    paddingLeft: "18px"
  },
  ".logo": { width: "60px", cursor: "pointer" },
  "nav ul li": {
    display: "inline-block",
    listStyle: "none",
    margin: "15px 35px"
  },
  ".note": {
    height: "60%",
    position: "absolute",
    bottom: "100px",
    right: "400px"
  },
  ".text1": {
    fontSize: "35px",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontWeight: "50vh",
    marginTop: "10px",
    marginLeft: "1000px",
    marginBottom: "10px",
    color: "#232d60"
  },
  ".text2": {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  ".image": {
    display: "inline-block",
    position: "absolute",
    marginLeft: "20%"
  },
  ".text3": {
    fontSize: "35px",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontWeight: "50vh",
    marginTop: "10px",
    marginLeft: "-270px",
    marginBottom: "10px",
    color: "#232d60"
  },
  ".text4": {
    marginTop: "3%",
    marginRight: "280px",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  ".image1": {
    display: "inline-block",
    position: "absolute",
    marginLeft: "5%",
    marginBottom: "5%"
  }
}






















function fetchAndStyle() {
    fetch('index.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = 'Fetched data: ' + JSON.stringify(data);

            // Apply styles to the content
            contentDiv.style.backgroundColor = 'lightblue';
            contentDiv.style.padding = '20px';
            contentDiv.style.border = '1px solid gray';
        })
        .catch(error => console.error('Error fetching data:', error));
}





document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    // Load the content.html file
    fetch('content.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data; // Place the content in the div
        })
        .catch(error => console.error('Error loading content:', error));
});






document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".loader").style.display = "none";
    }, 2000); // Adjust the timeout (in milliseconds) to control how long the loading animation is displayed.
});




document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".loader").style.display = "none";
    }, 2000); // Adjust the timeout (in milliseconds) to control how long the loading animation is displayed.
});



let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}



