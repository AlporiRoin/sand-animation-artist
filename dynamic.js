const feedbackSliderLine = document.querySelector( '.feedback_slider__line' );
const feedbackSliderLineScrollWidth = document.querySelector( '.feedback_slider__line' ).scrollWidth;
const slideWithReview = document.querySelector( '.slide_with_review' );
const numberOfSlides = document.querySelectorAll( '.slide_with_review' ).length;
const feedbackSlider = document.querySelector( '.feedback__slider' );

const leftSliderButton = document.querySelector( '.left_slider_button>button' );
const rightSliderButton = document.querySelector( '.right_slider_button>button' );

const lengthOfOneSlide = Math.floor( slideWithReview.getBoundingClientRect( ).width );
const lengthOfSpaceBetweenSlides = Math.floor( ( feedbackSliderLineScrollWidth - ( lengthOfOneSlide * numberOfSlides ) ) / ( numberOfSlides - 1 ) );

let positionOfTheFirstSlide = 1;

leftSliderButton.addEventListener( 'click', ( ) => {

    console.log( 1 );

    if ( feedbackSliderLine.getBoundingClientRect( ).left !== feedbackSlider.getBoundingClientRect( ).left ) {

        feedbackSliderLine.left = `${ lengthOfOneSlide + lengthOfSpaceBetweenSlides }px`;

    } else {

        feedbackSliderLine.left = `${ feedbackSliderLine.getBoundingClientRect( ).left }px`;

    }

});

rightSliderButton.addEventListener( 'click', ( ) => {

    if ( feedbackSliderLine.getBoundingClientRect( ).right === feedbackSlider.getBoundingClientRect( ).right ) {

        console.log( lengthOfSpaceBetweenSlides);

        feedbackSliderLine.style.left = `-${ lengthOfOneSlide + ( lengthOfSpaceBetweenSlides / numberOfSlides ) }px`;

    } else {

        console.log( 2 );

        feedbackSliderLine.right = `${ feedbackSliderLine.getBoundingClientRect( ).right }px`;

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

        document.querySelector( '.contacts' ).style.display = 'block';

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

        document.querySelector( '.underlining__title>h4' ).style.color = '#362B27';
        document.querySelector( '.underlining__subtitle>h5' ).style.color = '#362B27';

    }

    if ( window.innerWidth <= 1000 ) {

        document.querySelector( '.social_media' ).style.display = 'none';
        document.querySelector( '.contacts' ).style.display = 'none';

        document.querySelector( '.course__overview' ).style.display = 'block';
        document.querySelector( '.course_overview__mobile' ).style.display = 'none';

        document.querySelector( '.knowledge__map' ).style.display = 'block';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'none';

        document.querySelector( '.further__path' ).style.display = 'block';
        document.querySelector( '.further_path__mobile' ).style.display = 'none';

        document.querySelector( '.mentor__question_button' ).style.display = 'none';
        
        document.querySelector( '.slider__location' ).style.display = 'block';
        document.querySelector( '.slider__location__mobile' ).style.display = 'none';

        document.querySelector( '.underlining__title>h4' ).style.color = '#362B27';
        document.querySelector( '.underlining__subtitle>h5' ).style.color = '#362B27';

    }

    if ( window.innerWidth <= 900 ) {

        document.querySelector( '.course__overview' ).style.display = 'none';
        document.querySelector( '.course_overview__mobile' ).style.display = 'block';

        document.querySelector( '.knowledge__map' ).style.display = 'none';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'block';

        document.querySelector( '.further__path' ).style.display = 'block';
        document.querySelector( '.further_path__mobile' ).style.display = 'none';

        document.querySelector( '.mentor__question_button' ).style.display = 'block';

        document.querySelector( '.underlining__title>h4' ).style.color = '#362B27';
        document.querySelector( '.underlining__subtitle>h5' ).style.color = '#362B27';

    }

    if ( window.innerWidth < 760 ) {

        document.getElementById( 'student_level_dies' ).classList.remove( 'flex' );

        document.querySelector( '.knowledge__map' ).style.display = 'none';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'block';

        document.querySelector( '.further__path' ).style.display = 'none';
        document.querySelector( '.further_path__mobile' ).style.display = 'block';

        document.querySelector( '.underlining__title>h4' ).style.color = '#362B27';
        document.querySelector( '.underlining__subtitle>h5' ).style.color = '#362B27';

    }

    if ( window.innerWidth < 480 ) {

        document.getElementById( 'student_level_dies' ).classList.remove( 'flex' );

        document.querySelector( '.course__overview' ).style.display = 'none';
        document.querySelector( '.course_overview__mobile' ).style.display = 'block';

        document.querySelector( '.knowledge__map' ).style.display = 'none';
        document.querySelector( '.knowledge_map__mobile' ).style.display = 'block';

        document.querySelector( '.further__path' ).style.display = 'none';
        document.querySelector( '.further_path__mobile' ).style.display = 'block';

        document.querySelector( '.underlining__title>h4' ).style.color = '#362B27';
        document.querySelector( '.underlining__subtitle>h5' ).style.color = '#362B27';

    }

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