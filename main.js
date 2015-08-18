(function() {
    var button = $('button');
    var background = 'background-color';
    var data_background = 'data-background-color';
    
    var blue = 'rgb(0, 0, 255)';
    var red = 'rgb(255, 0, 0)';
    var green = 'rgb(0, 255, 0)';

    button.click(function() {

        if (button.css(background) === blue) {
            button.css(background, red);
        } else if (button.css(background) === red) {
            button.css(background, blue);
        } else if (button.css(background) === green) {
            if (button.attr(data_background) == blue) {
                button.attr(data_background, red);
            } else if (button.attr(data_background) == red) {
                button.attr(data_background, blue);
            }
        }
    });
    
    button.hover(function() { /* hover in/out */

        if (!button.attr(data_background)) { /* hover in*/
            var color = button.css(background);
            button.attr(data_background, color);
            button.css(background, green);
        } else { /* hover out */
            var color = button.attr(data_background);
            button.css(background, color);
            button.removeAttr(data_background);
        }
    });
})();
