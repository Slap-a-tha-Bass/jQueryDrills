$(document).ready(function () {
    $('#btnsubmit').click(function () {
        alert('Clicked');
    });
    // This function HAS to run before the submit button on the form is clicked. That is why this is outside and prior to that function.
    let searchInput = $('#searchInput');
    searchInput.keyup(function () {
        // Also, I previously had the let text = searchInput.val(); outside of the function. You have to grab the value on EVERY keyup since it always changes.
        let text = searchInput.val();
        if (text === '') {
            $('.submitbtn').prop('disabled', true);
        } else {
            $('.submitbtn').prop('disabled', false);
        }
    })
    $('body').append('<div></div>');
    // be consistent with your event (always use e)
    $('form').submit(function (e) {
        // prevents the form submit from refreshing on your page
        e.preventDefault();
        // selector for <element type="text"/>
        // .val() returns the value of the input, aka what a user typed into it
        let input = searchInput.val();
        // alert the value of what they typed

        // creating the variable, instead of the new element each time, creates a unique text input each time the function runs
        let ul = $('<ul></ul>');
        $('div').append(ul);
        ul.append(input);

        ul.click(function() {
            let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
            let random = Math.floor(Math.random() * colors.length);
            ul.css('color', colors[random]);
            // let colors = ['red', 'blue', 'orange', 'purple', 'green', 'yellow'];
            // let random = Math.floor(Math.random() * colors.length);
            // return colors[random];
        })
        ul.dblclick(function(){
            ul.remove();
        })
        // let header = $('<h2></h2>');
        // alert('You have typed: ' + text);
        // $('div').append(header);
        // $(header).text(input);

        // $(header).hover(function (){
        //     $(header).css('background-color', 'blue');
        //     $(header).css('border', '2px solid black');

        // })
    });
    
});