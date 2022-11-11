const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "images/hero1.jfif",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "images/hero2.jfif",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "images/hero3.jfif",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "images/hero4.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const userImg = document.getElementById('person-img');
const authorEl = document.getElementById('author-el');
const jobEl = document.getElementById('job-el');
const infoEl = document.getElementById('info-el');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

/*function renderImages(){
    let printImg = "";
    printImg = `<img src="${reviews[1].img}" id="person-img" alt=""></img>`
    userImg.innerHTML = printImg;
    console.log(printImg)
}
*/
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem)
} )


prevBtn.addEventListener('click', function(){

    if (currentItem <0 || currentItem ===0){
        currentItem =0
    }else{
        showPerson(currentItem-1)
        currentItem -=1
    }
    
    console.log("decrease: "+ currentItem)
})

nextBtn.addEventListener('click', function(){
    
    if (currentItem>reviews.length-2){
        showPerson(reviews.length-1)
        currentItem = reviews.length-1
    }else{
        showPerson(currentItem+1)
        currentItem +=1;
        
    }
    console.log(currentItem)
})


randomBtn.addEventListener('click', function(){
    showPerson(RandomId())
    currentItem = RandomId();
    console.log(RandomId())
})

function showPerson(personId){
    userImg.src = reviews[personId].img;
    authorEl.textContent = reviews[personId].name;
    jobEl.textContent = reviews[personId].job;
    infoEl.textContent = reviews[personId].text;
}

function RandomId(){
    return Math.floor(Math.random()*reviews.length)
}