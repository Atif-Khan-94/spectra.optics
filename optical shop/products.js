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
