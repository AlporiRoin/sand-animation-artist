const feedbackSliderLine = document.querySelector( '.feedback_slider__line' );
const feedbackSliderLineScrollWidth = document.querySelector( '.feedback_slider__line' ).scrollWidth;
const slideWithReview = document.querySelector( '.slide_with_review' );
const numberOfSlides = document.querySelectorAll( '.slide_with_review' ).length;

const leftSliderButton = document.querySelector( '.left_slider_button>button' );
const rightSliderButton = document.querySelector( '.right_slider_button>button' );

const lengthOfOneSlide = Math.floor( slideWithReview.getBoundingClientRect( ).width );
const lengthOfSpaceBetweenSlides = Math.floor( ( feedbackSliderLineScrollWidth - ( lengthOfOneSlide * numberOfSlides ) ) / ( numberOfSlides - 1 ) );
console.log( lengthOfOneSlide );
console.log( lengthOfSpaceBetweenSlides );

let positionOfTheFirstSlide = 1;

leftSliderButton.addEventListener( 'click', ( ) => {

    if ( positionOfTheFirstSlide === 1 ) {
        console.log( positionOfTheFirstSlide );

        positionOfTheFirstSlide = -1;
        feedbackSliderLine.style.left = `${ ( lengthOfOneSlide + lengthOfSpaceBetweenSlides ) * positionOfTheFirstSlide }px`;
        

    } else if ( ( numberOfSlides - positionOfTheFirstSlide ) !== 1 ) {
        console.log( positionOfTheFirstSlide );
        console.log( numberOfSlides - positionOfTheFirstSlide );
        
        feedbackSliderLine.style.left = `${ ( lengthOfOneSlide + lengthOfSpaceBetweenSlides ) * positionOfTheFirstSlide }px`;
        positionOfTheFirstSlide++;

    } else if ( positionOfTheFirstSlide === ( numberOfSlides - 1 ) ) {
        console.log( positionOfTheFirstSlide );

        
        feedbackSliderLine.style.left = `${ ( lengthOfOneSlide + lengthOfSpaceBetweenSlides ) * positionOfTheFirstSlide }px`;
        positionOfTheFirstSlide++;

    }

});

rightSliderButton.addEventListener( 'click', ( ) => {

    if ( positionOfTheFirstSlide === 1 ) {
        console.log( positionOfTheFirstSlide );

        feedbackSliderLine.style.left = `-${ ( lengthOfOneSlide + lengthOfSpaceBetweenSlides ) }px`;
        positionOfTheFirstSlide++;

    } else if ( ( numberOfSlides - positionOfTheFirstSlide ) !== 1 ) {
        console.log( positionOfTheFirstSlide );
        
        feedbackSliderLine.style.left = `-${ ( lengthOfOneSlide + lengthOfSpaceBetweenSlides ) * positionOfTheFirstSlide }px`;
        positionOfTheFirstSlide++;

    } else if ( positionOfTheFirstSlide === ( numberOfSlides - 1 ) ) {
        console.log( positionOfTheFirstSlide );

        positionOfTheFirstSlide = 1;
        feedbackSliderLine.style.left = `-${ ( lengthOfOneSlide + lengthOfSpaceBetweenSlides ) * positionOfTheFirstSlide }px`;

    }

});