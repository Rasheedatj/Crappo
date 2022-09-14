# Frontend Mentor - Sunnyside agency landing page solution


This is a solution to the [CodingOssy coding challenege for september](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Crappo is a brand that allow users trade bitcoin at convinience, the task has given me a better insight
of javascript. It was fun working on this project, I had to do a lot of in between researches and im glad I was able to pull this off.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Have good experiemce while usung the website
- Easy navigation and control
### Screenshot
![](./images/Screenshot%202022-09-14%20234058.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Rasheedatj/Crappo)
- Live Site URL: [Add live site URL here](https://rasheedatj.github.io/Crappo/)

## My process
I started by wrirting the html and then proceeded to stlye the desktop layout before the mobile and tablet layout. For section that were overlapping I used the before or after pseudo class on them, as a javascript beginner I pushed everything that was to be solved with javascript to the end. This gave me enough time to make adequate researches and i was able to finish 90% of the task perfecty. I ensured that my codes are redeable incase of future refrence and for people who may wish to learn through it.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow

### What I learned

- Javascrip functions
- DOM manpulation


```html

       <section class="cta">
        <div class="box1">
          <h1>start mining now</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            saepe.
          </p>
        </div>
        <form action="">
          <input type="text" placeholder="enter message" />
        </form>
        <button>subscribe</button>
      </section>
    </section>
```

```css
.main_section_2{
    padding-top: 15em;
    padding-bottom: 5em;
    background-color: #f9fafb;
    width: 100%;
   position: relative;
   margin-top: 15em;

}

```

```js
     const over = document.getElementById("demo");
     

      over.addEventListener("click", () => {
       
        over.classList.toggle("overstyle");
      });
```


## Author

- LinkedIn - [Rasheedat](https://www.linkedin.com/in/rashedat-jinadu-066078227)

- Twitter - [@Rashedatj](https://www.twitter.com/Rashedatj)