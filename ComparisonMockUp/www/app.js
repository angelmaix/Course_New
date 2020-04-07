requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        // Load jQuery
        jquery: 'jquery.min',
        jqueryColor : 'jquery.color.min',
        jqueryUI : 'jquery-ui',
        datatable: 'datatables',
        dataTables: 'jquery.dataTables',
        dataTablesSelect: 'dataTables.select.min',
        plotly: 'plotly.js-master/dist/plotly.min',

    }
});

requirejs(['app/main']);



