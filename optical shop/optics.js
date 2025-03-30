
        let slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function changeSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }

        setInterval(changeSlide, 2500); // Change slide every 3 seconds
        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('show');
        }
        function closeMenu() {
            document.querySelector('.nav-links').classList.remove('show');
        }
        function toggleSearch(){
            document.getElementById('searchBar').classList.toggle('show');
        }
        function checkScroll() {
            const section = document.querySelector('.why-choose-us');
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
        
            // If section is in the viewport, add the 'visible' class
            if (sectionPosition < windowHeight - 250) {
                section.classList.add('visible');
            }
        }
        
        // Listen for the scroll event
        window.addEventListener('scroll', checkScroll);
        
        // Call the function on page load to ensure it's checked immediately
        checkScroll();
       
    
        // Decrease Stock Count
        function decreaseStock() {
            let stockCount = document.getElementById("stock-count");
            let currentStock = parseInt(stockCount.innerText);
            if (currentStock > 1) {
                stockCount.innerText = currentStock - 1;
            } else {
                stockCount.innerText = "Out of Stock!";
            }
        }
    
        // Scroll Animation
        document.addEventListener("scroll", function() {
            let section = document.getElementById("limited-offer");
            let position = section.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;
            if (position < screenHeight - 250) {
                section.classList.add("visible");
            }
        });
     
        document.addEventListener("scroll", function() {
            let section = document.getElementById("premium-section");
            let position = section.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;
            if (position < screenHeight - 250) {
                section.classList.add("visible");
            }
        });
        window.onload = function() {
            document.getElementById("banner").style.opacity = "1";
        };

        
        let container = document.getElementById('productSlider');
        function scrollLeft() { container.scrollBy({ left: -320, behavior: 'smooth' }); }
        function scrollRight() { container.scrollBy({ left: 320, behavior: 'smooth' }); }

        document.addEventListener("DOMContentLoaded", function () {
            let wholesaleSection = document.querySelector(".wholesale-banner");
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(wholesaleSection);
        });
        document.addEventListener("DOMContentLoaded", function () {
            let wholesaleSection = document.querySelector(".products-section");
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(wholesaleSection);
        });
        let products = null;
    
        // Fetch data from JSON file
        fetch('product.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                addDataToHTML();
            });
    
        function addDataToHTML() {
            let listProductHTML = document.querySelector('.listProduct');
            let listProductHTML2 = document.querySelector('.listProduct2');
    
            if (products != null) { // If products exist
                products.forEach((product, index) => {
                    let newProduct = document.createElement('a');
                    newProduct.href = '/detail.html?id=' + product.id;
                    newProduct.classList.add('item');
                    newProduct.innerHTML = 
                    `<img src="${product.image}" alt="">
                    <h2>${product.name}</h2>
                    <div class="price">₹${product.price}</div>`;
    
                    // Distribute products across 5 containers
                    if (index % 5 === 0) {
                        listProductHTML.appendChild(newProduct);
                    } else if (index % 5 === 1) {
                        listProductHTML2.appendChild(newProduct)
                    }
                });
            }
        }