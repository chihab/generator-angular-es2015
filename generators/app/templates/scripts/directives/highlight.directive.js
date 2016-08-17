const HighlightDirective = function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.css('color', 'red');
        }
    }
}
export default HighlightDirective;