requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        // Load jQuery
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        // jqueryColor : 'jquery.color.min',
        jqueryUI : 'https://code.jquery.com/ui/1.12.1/jquery-ui.min',
        dataTables: 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min',
        plotly: 'https://cdnjs.cloudflare.com/ajax/libs/plotly.js/1.33.1/plotly.min',
    }
});

requirejs(['app/main']);



