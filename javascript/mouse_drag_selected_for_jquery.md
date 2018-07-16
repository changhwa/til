```
var isMouseDown = false;
var isHighlighted = false;

$(document).mouseup(function() {
     isMouseDown = false;
});
table.on('mousedown', 'tbody > tr', function(evt) {
            if (!evt.altKey) {
                isMouseDown = true;
                $(this).toggleClass("selected");
                isHighlighted = $(this).hasClass("selected");
                return false; // prevent text selection
            } else {
                return true;
            }
        }).on('mouseover', 'tbody > tr', function() {
            if (isMouseDown) {
                $(this).toggleClass("selected", isHighlighted);
            }
        })
```
