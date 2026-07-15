/*=====================================================
    INDIE BOOKSTORE
    script.js
    Part 1
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
        ELEMENTS
    ==================================*/

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const browseBtn = document.getElementById("browseBtn");



    /*==================================
        MOBILE MENU
    ==================================*/

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                navLinks.classList.contains("active")
            );

        });

        navItems.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /*==================================
        SMOOTH SCROLL
    ==================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });



    /*==================================
        ACTIVE NAVIGATION
    ==================================*/

    function activateMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (pageYOffset >= top &&
                pageYOffset < top + height) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activateMenu);

    activateMenu();



    /*==================================
        HEADER SHADOW
    ==================================*/

    const header = document.querySelector(".header");

    function headerEffect() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.style.boxShadow =
                "0 12px 25px rgba(0,0,0,.08)";

        }

        else {

            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", headerEffect);

    headerEffect();



    /*==================================
        ANALYTICS
    ==================================*/

    function analytics(action) {

        console.log(

            `[Analytics] User interacted with Static Landing Page (${action})`

        );

    }

    if (browseBtn) {

        browseBtn.addEventListener("click", () => {

            analytics("Browse Collection");

        });

    }

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            analytics(
                "Navigation - " + link.textContent.trim()
            );

        });

    });



    /*==================================
        BUTTON ANALYTICS
    ==================================*/

    document.querySelectorAll(".primary-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                analytics(

                    button.textContent.trim()

                );

            });

        });



    /*==================================
        ESC KEY CLOSE MENU
    ==================================*/

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(

                "aria-expanded",

                "false"

            );

        }

    });



    /*==================================
        CONTINUE IN PART 2...
    ==================================*/
    /*==================================
        NEWSLETTER FORM
    ==================================*/

    const newsletterForm =
        document.getElementById("newsletterForm");

    const emailInput =
        document.getElementById("email");

    const emailError =
        document.getElementById("emailError");

    const loadingMessage =
        document.getElementById("loadingMessage");



    /*==================================
        XSS SANITIZATION
    ==================================*/

    function sanitizeInput(value){

        const div = document.createElement("div");

        div.textContent = value;

        return div.innerHTML.trim();

    }



    /*==================================
        EMAIL VALIDATION
    ==================================*/

    function validateEmail(email){

        const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);

    }



    /*==================================
        SHOW ERROR
    ==================================*/

    function showError(message){

        emailError.textContent = message;

        emailInput.classList.add("error");

        emailInput.setAttribute(

            "aria-invalid",

            "true"

        );

    }



    /*==================================
        CLEAR ERROR
    ==================================*/

    function clearError(){

        emailError.textContent = "";

        emailInput.classList.remove("error");

        emailInput.setAttribute(

            "aria-invalid",

            "false"

        );

    }



    /*==================================
        FORM SUBMISSION
    ==================================*/

    if(newsletterForm){

        newsletterForm.addEventListener(

            "submit",

            function(e){

                e.preventDefault();

                clearError();

                let email = sanitizeInput(

                    emailInput.value

                );



                if(email===""){

                    showError(

                        "Email address is required."

                    );

                    return;

                }



                if(!validateEmail(email)){

                    showError(

                        "Please enter a valid email address."

                    );

                    return;

                }



                /*=========================
                    LOADING
                =========================*/

                loadingMessage.innerHTML =

                    '<div class="loader"></div>';



                const submitButton =

                    newsletterForm.querySelector(

                        "button"

                    );



                submitButton.disabled = true;

                submitButton.textContent =

                    "Subscribing...";



                /*=========================
                    SIMULATE SLOW NETWORK
                =========================*/

                setTimeout(()=>{

                    loadingMessage.innerHTML =

                        "<p>✅ Successfully subscribed!</p>";



                    console.log(

                        "[Analytics] User interacted with Static Landing Page (Newsletter Subscription)"

                    );



                    newsletterForm.reset();

                    submitButton.disabled = false;

                    submitButton.textContent =

                        "Subscribe Now";



                    setTimeout(()=>{

                        loadingMessage.innerHTML="";

                    },3000);



                },1800);

            }

        );

    }



    /*==================================
        LIVE VALIDATION
    ==================================*/

    if(emailInput){

        emailInput.addEventListener(

            "input",

            ()=>{

                clearError();

            }

        );

    }



    /*==================================
        ENTER KEY SUPPORT
    ==================================*/

    document.addEventListener(

        "keydown",

        function(e){

            if(

                e.key==="Enter" &&

                document.activeElement===emailInput

            ){

                newsletterForm.requestSubmit();

            }

        }

    );



    /*==================================
        CONTINUE IN PART 3...
    ==================================*/
        /*==================================
        BACK TO TOP BUTTON
    ==================================*/

    const backToTop =
        document.getElementById("backToTop");

    function toggleBackToTop(){

        if(!backToTop) return;

        if(window.scrollY > 500){

            backToTop.style.display = "flex";

        }else{

            backToTop.style.display = "none";

        }

    }

    window.addEventListener(

        "scroll",

        toggleBackToTop

    );

    toggleBackToTop();

    if(backToTop){

        backToTop.addEventListener(

            "click",

            ()=>{

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            }

        );

    }



    /*==================================
        SCROLL REVEAL
    ==================================*/

    const revealElements = document.querySelectorAll(

        ".genre-card, .book-card, .arrival-card, .about-card, .why-card, .contact-card, .testimonial-card, .timeline-item"

    );

    revealElements.forEach(element=>{

       element.style.opacity = "0";

    element.style.transform = "translateY(70px) scale(.98)";

    element.style.transition =
        "opacity .9s ease, transform .9s ease";

    });

    const revealObserver =

        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.style.opacity = "1";
                        
                        entry.target.style.transform = "translateY(0) scale(1)";

                    }

                });

            },

            {

                threshold:.15

            }

        );

    revealElements.forEach(

        element=>{

            revealObserver.observe(element);

        }

    );



    /*==================================
        WISHLIST BUTTONS
    ==================================*/

    const wishlistButtons =

        document.querySelectorAll(

            ".wishlist-btn"

        );

    wishlistButtons.forEach(button=>{

        button.addEventListener(

            "click",

            ()=>{

                const active =

                    button.classList.toggle(

                        "active"

                    );

                button.innerHTML =

                    active ? "♥" : "♡";

                console.log(

                    `[Analytics] User interacted with Static Landing Page (Wishlist ${active ? "Added" : "Removed"})`

                );

            }

        );

    });



    /*==================================
        FAQ ANALYTICS
    ==================================*/

    document.querySelectorAll(

        ".faq details"

    ).forEach(item=>{

        item.addEventListener(

            "toggle",

            ()=>{

                if(item.open){

                    console.log(

                        "[Analytics] FAQ Opened"

                    );

                }

            }

        );

    });



    /*==================================
        BOOK CARD HOVER EFFECT
    ==================================*/

    document.querySelectorAll(

        ".book-card"

    ).forEach(card=>{

        card.addEventListener(

            "mouseenter",

            ()=>{

                card.style.transform =

                    "translateY(-12px)";

            }

        );

        card.addEventListener(

            "mouseleave",

            ()=>{

                card.style.transform =

                    "";

            }

        );

    });



    /*==================================
        BUTTON RIPPLE EFFECT
    ==================================*/

    document.querySelectorAll(

        ".primary-btn"

    ).forEach(button=>{

        button.addEventListener(

            "click",

            function(e){

                const ripple =

                    document.createElement(

                        "span"

                    );

                ripple.className =

                    "ripple";

                const rect =

                    this.getBoundingClientRect();

                ripple.style.left =

                    (e.clientX - rect.left) +

                    "px";

                ripple.style.top =

                    (e.clientY - rect.top) +

                    "px";

                this.appendChild(ripple);

                setTimeout(()=>{

                    ripple.remove();

                },600);

            }

        );

    });



    /*==================================
        IMAGE FALLBACK
    ==================================*/

    document.querySelectorAll("img")

    .forEach(image=>{

        image.addEventListener(

            "error",

            ()=>{

                image.src =

                    "assets/placeholder.jpg";

            }

        );

    });



    /*==================================
        CONTINUE IN PART 4...
    ==================================*/
        /*==================================
        EMPTY STATE HANDLING
    ==================================*/

    function showEmptyState(containerSelector, message){

        const container = document.querySelector(containerSelector);

        if(!container) return;

        if(container.children.length === 0){

            const empty = document.createElement("div");

            empty.className = "empty-state";

            empty.textContent = message;

            container.appendChild(empty);

        }

    }

    showEmptyState(

        ".books-grid",

        "No data found."

    );



    /*==================================
        OFFLINE / ONLINE STATUS
    ==================================*/

    function updateConnectionStatus(){

        if(navigator.onLine){

            console.log(

                "[System] Internet connection restored."

            );

        }

        else{

            console.warn(

                "[System] Offline Mode Detected."

            );

        }

    }

    window.addEventListener(

        "online",

        updateConnectionStatus

    );

    window.addEventListener(

        "offline",

        updateConnectionStatus

    );



    /*==================================
        KEYBOARD ACCESSIBILITY
    ==================================*/

    document.querySelectorAll(

        "button, a"

    ).forEach(element=>{

        element.addEventListener(

            "keyup",

            e=>{

                if(e.key==="Enter"){

                    element.click();

                }

            }

        );

    });



    /*==================================
        READING PROGRESS BAR
    ==================================*/

    const progressBar =

        document.createElement("div");

    progressBar.id = "readingProgress";

    document.body.appendChild(progressBar);

    function updateProgress(){

        const scrollTop =

            document.documentElement.scrollTop;

        const scrollHeight =

            document.documentElement.scrollHeight -

            document.documentElement.clientHeight;

        const progress =

            (scrollTop / scrollHeight) * 100;

        progressBar.style.width =

            progress + "%";

    }

    window.addEventListener(

        "scroll",

        updateProgress

    );



    /*==================================
        PERFORMANCE
    ==================================*/

    let resizeTimeout;

    window.addEventListener(

        "resize",

        ()=>{

            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(()=>{

                console.log(

                    "[Performance] Resize complete."

                );

            },200);

        }

    );



    /*==================================
        PAGE LOADED
    ==================================*/

    window.addEventListener(

        "load",

        ()=>{

            document.body.classList.add(

                "loaded"

            );

            console.log(

                "[System] Landing Page Loaded Successfully."

            );

        }

    );



    /*==================================
        FINAL ANALYTICS
    ==================================*/

    console.log(

        "[Analytics] Static Landing Page Ready."

    );



});
/* Additional featured books and detailed FAQs */
document.addEventListener("DOMContentLoaded", () => {
    const bookGrid = document.querySelector(".books-grid");
    const extraBooks = [
        ["book5.jpg", "Romance", "It Starts With Us", "Colleen Hoover", "4.6", "₹520", "Bestseller"],
        ["book6.jpg", "Romance", "The Love Hypothesis", "Ali Hazelwood", "4.7", "₹499", "New Arrival"],
        ["book7.jpg", "Thriller", "Verity", "Colleen Hoover", "4.7", "₹599", ""],
        ["book8.jpg", "Romance", "Ugly Love", "Colleen Hoover", "4.6", "₹450", ""],
        ["book9.jpg", "Fiction", "The Seven Husbands of Evelyn Hugo", "Taylor Jenkins Reid", "4.8", "₹599", "Recommended"],
        ["book10.jpg", "Mystery", "A Good Girl's Guide to Murder", "Holly Jackson", "4.7", "₹499", ""],
        ["book11.jpg", "Fantasy", "Fourth Wing", "Rebecca Yarros", "4.7", "₹799", "Popular"],
        ["book12.jpg", "Thriller", "The Silent Patient", "Alex Michaelides", "4.6", "₹549", ""]
    ];

    if (bookGrid) {
        extraBooks.forEach(([image, category, title, author, rating, price, badge]) => {
            const card = document.createElement("article");
            card.className = "book-card";
            card.innerHTML = `<div class="book-image"><img src="assets/books/${image}" alt="${title}" onerror="this.onerror=null;this.src='assets/placeholder.png';"><button class="wishlist-btn" aria-label="Add ${title} to Wishlist">♡</button>${badge ? `<span class="book-badge">${badge}</span>` : ""}</div><div class="book-info"><span class="category">${category}</span><h3>${title}</h3><p class="author">${author}</p><div class="book-rating">★★★★★ <span>(${rating})</span></div><div class="book-footer"><span class="price">${price}</span><button class="book-btn">Learn More →</button></div></div>`;
            const wishlistButton = card.querySelector(".wishlist-btn");
            wishlistButton.addEventListener("click", () => {
                wishlistButton.classList.toggle("active");
                wishlistButton.textContent = wishlistButton.classList.contains("active") ? "♥" : "♡";
            });
            bookGrid.appendChild(card);
        });
    }

    const faqContainer = document.querySelector(".faq-container");
    const extraFaqs = [
        ["What are your delivery options and how long does shipping take?", "We offer delivery across India as well as free in-store pickup. Orders are usually packed within one business day, and delivery times depend on your location. Once an order is confirmed, we share updates so you always know when to expect your books."],
        ["Can you help me choose a book as a gift?", "Of course. Tell us a little about the reader, such as their favourite genres, authors, or interests, and our team will suggest thoughtful options. We can also prepare a gift-ready package and include a personal note on request."],
        ["Do you accept returns or exchanges?", "If a book arrives damaged or is not the title you ordered, please contact us within seven days of delivery. We will review the request and arrange a replacement or exchange wherever possible. Books must be unused and in their original condition."],
        ["Can I reserve a book before visiting the store?", "Yes. You can reserve an available title online or contact us directly. We will hold it for a short period and let you know when it is ready for collection, so you do not make an unnecessary trip."],
        ["How do I hear about author events and new arrivals?", "Join our newsletter for event invitations, fresh recommendations, and new-arrival updates. You can also follow our social channels for reminders, reading lists, and announcements from our community."],
        ["Do you stock books for children and young readers?", "Yes. Our collection includes picture books, middle-grade adventures, young adult fiction, and thoughtful non-fiction for younger readers. We are happy to recommend age-appropriate titles for any occasion."]
    ];

    if (faqContainer) {
        extraFaqs.forEach(([question, answer]) => {
            const item = document.createElement("details");
            item.innerHTML = `<summary>${question}</summary><p>${answer}</p>`;
            faqContainer.appendChild(item);
        });
    }

});
