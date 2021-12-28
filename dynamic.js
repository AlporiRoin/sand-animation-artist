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

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    ResizingTheWindow( );
});

function ResizingTheWindow( ) {

    if ( window.innerWidth >= 1440 ) {

        document.querySelector( '.menu' ).classList.add( 'flex' );

        document.getElementById( 'student_level_dies' ).classList.add( 'flex' );

        document.querySelector( '.course__overview' ).style.display = 'block';
        document.querySelector( '.course_overview__mobile' ).style.display = 'none';

        document.querySelector( '.knowledge__map' ).style.display = 'block';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'none';

        document.querySelector( '.further__path' ).style.display = 'block';
        document.querySelector( '.further_path__mobile' ).style.display = 'none';

        document.querySelector( '.slider__location' ).style.display = 'block';
        document.querySelector( '.slider__location__mobile' ).style.display = 'none';

        document.querySelector( '.social_media' ).style.display = 'block';

        document.querySelector( '.underlining__title>h4' ).style.color = '#362B27';
        document.querySelector( '.underlining__subtitle>h5' ).style.color = '#362B27';

        // document.querySelector( '.program__die' ).style.top = '50px';

    }

    if ( window.innerWidth < 1440 ) {

        document.querySelector( '.social_media' ).style.display = 'none';
        document.querySelector( '.contacts' ).style.display = 'block';

        document.getElementById( 'menu' ).classList.add( 'flex' );
        document.getElementById( 'student_level_dies' ).classList.add( 'flex' );

        document.querySelector( '.knowledge__map' ).style.display = 'block';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'none';

        document.querySelector( '.further__path' ).style.display = 'block';
        document.querySelector( '.further_path__mobile' ).style.display = 'none';

        document.querySelector( '.course__overview' ).style.display = 'block';
        document.querySelector( '.course_overview__mobile' ).style.display = 'none';

        document.querySelector( '.slider__location' ).style.display = 'block';
        document.querySelector( '.slider__location__mobile' ).style.display = 'none';

        document.querySelector( '.mentor__question_button' ).style.display = 'block';

    }

    if ( window.innerWidth <= 1000 ) {

        document.querySelector( '.social_media' ).style.display = 'none';
        document.querySelector( '.contacts' ).style.display = 'none';

        document.querySelector( '.course__overview' ).style.display = 'block';
        document.querySelector( '.course_overview__mobile' ).style.display = 'none';

        document.querySelector( '.knowledge__map' ).style.display = 'none';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'block';

        document.querySelector( '.further__path' ).style.display = 'block';
        document.querySelector( '.further_path__mobile' ).style.display = 'none';

        document.querySelector( '.mentor__question_button' ).style.display = 'none';
        
        document.querySelector( '.slider__location' ).style.display = 'block';
        document.querySelector( '.slider__location__mobile' ).style.display = 'none';

    }

    if ( window.innerWidth < 900 ) {

        document.querySelector( '.course__overview' ).style.display = 'none';
        document.querySelector( '.course_overview__mobile' ).style.display = 'block';

        document.querySelector( '.knowledge__map' ).style.display = 'none';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'block';

        document.querySelector( '.further__path' ).style.display = 'block';
        document.querySelector( '.further_path__mobile' ).style.display = 'none';

    }

    if ( window.innerWidth < 760 ) {

        document.getElementById( 'student_level_dies' ).classList.remove( 'flex' );

        document.querySelector( '.knowledge__map' ).style.display = 'none';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'block';

        document.querySelector( '.further__path' ).style.display = 'none';
        document.querySelector( '.further_path__mobile' ).style.display = 'block';

    }

    if ( window.innerWidth < 480 ) {

        document.getElementById( 'student_level_dies' ).classList.remove( 'flex' );

        document.querySelector( '.course__overview' ).style.display = 'none';
        document.querySelector( '.course_overview__mobile' ).style.display = 'block';

        document.querySelector( '.knowledge__map' ).style.display = 'none';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'block';

        document.querySelector( '.further__path' ).style.display = 'none';
        document.querySelector( '.further_path__mobile' ).style.display = 'block';

    }

    // if ( window.innerWidth <= 1099 ) {

    //     document.querySelector( '.social_media' ).style.display = 'none';
    //     document.querySelector( '.contacts' ).style.display = 'block';

    //     document.getElementById( 'advantages_dies__container' ).classList.remove( 'flex' );
    //     document.getElementById( 'advantages_dies__container' ).classList.add( 'flex-wrap' );

    // } 
    
    // if ( window.innerWidth > 1190 ) {

    //     document.querySelector( '.social_media' ).style.display = 'block';
    //     document.getElementById( 'advantages_dies__container' ).classList.remove( 'flex' );
    //     document.getElementById( 'advantages_dies__container' ).classList.add( 'flex-wrap' );

    // } 
    
    // if ( window.innerWidth <= 759 ) {

    //     document.querySelector( '.social_media' ).style.display = 'none';
    //     document.querySelector( '.contacts' ).style.display = 'none';

    //     document.getElementById( 'advantages_dies__container' ).classList.remove( 'flex' );
    //     document.getElementById( 'advantages_dies__container' ).classList.add( 'flex-wrap' );

    //     document.querySelector( '.course__overview' ).style.display = 'none';
    //     document.getElementById( 'start__button' ).style.display = 'none';

    //     document.querySelector( '.knowledge__map' ).style.display = 'none';
    //     document.querySelector( '.mentor__question_button' ).style.display = 'none';
    //     document.querySelector( '.further__path' ).style.display = 'none';
    //     document.querySelector( '.slider__location' ).style.display = 'none';

    //     console.log( 1 );
        
    // }

}

ResizingTheWindow( );

function ReductionOfTheSubstrate( id ) {

    let elementIndex = `program_die__${ id }`;

    console.log( document.getElementById( elementIndex ).children[0] );

    document.getElementById( elementIndex ).children[0].style.top = '20px';
    

}

function RaisingTheSubmarine( id ) {

    let elementIndex = `program_die__${ id }`;

    console.log( document.getElementById( elementIndex ).children[0] );

    document.getElementById( elementIndex ).children[0].style.top = '0px';
    

}