
const reviewContainer = document.getElementsByClassName('reviewContainer')[0];
const reviewBtn = document.getElementsByClassName('reviewBtn')[0];
const secondReview = document.getElementsByClassName('secondReview')[0];
const showReviewContainer = () =>{
  if(reviewContainer.classList.contains('isClicked')){
    reviewContainer.classList.remove('newreviewContainer');
    secondReview.classList.remove('newsecondReview');
    reviewContainer.classList.remove('isClicked');
  }else{
    reviewContainer.classList.add('newreviewContainer');
    secondReview.classList.add('newsecondReview');
    reviewContainer.classList.add('isClicked');
  }
}
reviewBtn.addEventListener('click', showReviewContainer);
