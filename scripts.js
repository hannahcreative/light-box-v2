//'un-hide' the lightbox div
function toggleLightBox() {
  $('.lightbox').toggle();
  $('.lightboxWrapper').toggle();
}

$(function() {
  // creating an object that contains child objects (these children contain the data for each project)
  var myList = {
    'project1': {
      title: "Project1 Title",
      desc: "Project1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'img/wild-1.jpg'
    },
    'project2': {
      title: "Project2 Title",
      desc: "Project2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'img/wild-2.jpg'
    },
    'project3': {
      title: "Project3 Title",
      desc: "Project3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'img/wild-3.jpg'
    },
    'project4': {
      title: "Project4 Title",
      desc: "Project3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa eveniet neque ullam iure aut officiis eius laborum accusantium at? Perferendis laboriosam odio minima facilis ipsum, voluptate inventore quia, voluptas!",
      img: 'img/wild-4.jpg'
    }
  }; 

  // capturing the ID 
  var whatId;
  $('.box').click(function(event){
      whatId = this.id;
  
    // get project object 
    var currentProject = myList[whatId];
    // fill in img
    $('.lightboxImg').attr('src', currentProject.img);
    // fill in title  
    $('.projectTitle').text(currentProject.title);
    // fill in desc
    $('.projectDesc').text(currentProject.desc);
    // call function to hide the lightbox and wrapper
    toggleLightBox();
  });

   // and if statement and e.target to check if they clicked on .lightboxWrapper directly, or something inside of it
    $('.lightboxWrapper').click(function(e){
    
    // using jQuery - turn the target element into a jQuery element
    // var clickedElement = $(e.target);
    // if (clickedElement.hasClass('lightboxWrapper')) {
    //   toggleLightBox();
    // }

    // using vanilla JavaScript 
    if (e.target.classList.contains('lightboxWrapper')) {
      console.log('success');
      toggleLightBox();
    }

     // make sure that a.close also will close the lightbox
    var clickedElement = $(e.target);
    if (clickedElement.hasClass('close')) {
      toggleLightBox();
    }

  });

  // THIS IS THE SORTING PART - IT IS NOT WORKING... YET  

  function sort(attribute) {
    // first hide everything
    $('.box').hide();
    // then show the ones that you want
    $('[data-category="'+attribute+'"]').show()
  };

  // when the list item is clicked...
  $('.li').click(function(event){
    
    // find out which data-category is attached to the list item
    var whatCat = this.data();
    console.log(whatCat);
    // call the function?
    // sort();


  });
});



// when the user selects a category, do the previous function
// $('[data-category="cat-1"]').onclick = function() {
//    alert("button was clicked");
// }​;​