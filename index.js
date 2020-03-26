$(function shoppingList(){
    $('#js-shopping-list-form').submit(function(e){
        e.preventDefault();

        //get entered item value
        const listItem = $('#shopping-list-entry').val();

        //make sure the text box isn't empty
        if (listItem !== "") {
            //add in html elements for new item
            $('.shopping-list').append(`<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
            </li>`);
            //reset value in box back to empty string
            $('#shopping-list-entry').val("");
        }
    });

    //toggle line-through on click of check button
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        //this element, find closest matching class, on same level, toggleClass function to check/uncheck
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
    
    //remove items on click  
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        //this element, closest matching li, remove function to remove item
        $(this).closest('li').remove();
    });
});
