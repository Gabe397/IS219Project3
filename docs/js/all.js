(function ($) {
    $('#oscarTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/oscar",
        "columns": [
            { "data": "indexes" },
            { "data": "years" },
            { "data": "age" },
            { "data": "name" },
            { "data": "movie" }
        ]
    } );

})(jQuery);