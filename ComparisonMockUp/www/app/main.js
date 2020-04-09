let tableData = [];

let sectionData = [
    ["",'AEB1234','Fall 2018','09FB',356,278,28,32,18,98,67.5,68,69,73,0.169,'18:34:55',18.6,216,138,383,8,1,3],
    ["",'AEB1234','Fall 2018','067H',165,129,13,15,8,94,67.5,91,9,84,0.125,'16:08:15',16.1,348,377,498,10,10,2],
    ["",'DCP3456','Fall 2018',1052,327,255,26,29,16,91,69.8,63,74,46,0.54,'14:47:29',14.8,358,255,218,9,10,5],
    ["",'DCP3456','Fall 2018',1053,165,129,13,15,8,96,67.5,18,15,45,0.686,'19:46:56',19.8,406,302,331,1,7,8],
    ["",'DCP3456','Fall 2018','09FB',102,80,8,9,5,86,61.2,56,96,0,0.642,'11:41:57',11.7,485,207,423,7,6,4],
    ["",'DCP3456','Fall 2018','18GH',380,296,30,34,19,95,47.3,86,42,2,0.295,'10:13:13',10.2,184,467,132,0,4,4],
    ["",'DCP3456','Fall 2018',4284,158,123,13,14,8,85,65.4,55,66,54,0.484,'11:00:07',11.0,628,169,387,10,9,0],
    ["",'MAC2130','Fall 2018','09FB',327,255,26,29,16,88,69.8,75,82,45,0.878,'12:11:11',12.2,453,434,306,9,0,4],
    ["",'MAC2130','Fall 2018','067H',165,129,13,15,8,95,67.5,41,37,99,0.72,'19:02:29',19.0,343,361,322,8,5,0],
    ["",'MAC2130','Summer B 2018','067H',102,80,8,9,5,96,61.2,58,100,19,0.818,'13:03:54',13.1,909,344,297,5,5,6],
    ["",'AEB1234','Summer A/C 2018','09FB',380,296,30,34,19,85,47.3,55,5,30,0.614,'17:06:04',17.1,990,452,345,5,4,0],
    ["",'AEB1234','Summer A/C 2018',1053,112,87,9,10,6,94,61,86,12,18,0.207,'14:53:56',14.9,140,240,297,5,7,3],
    ["",'JOU1101','Summer A/C 2018','067H',355,277,28,32,18,91,50.4,54,1,18,0.342,'16:07:33',16.1,684,247,267,9,6,1],
    ["",'JOU1101','Summer A/C 2018',4284,356,278,28,32,18,99,67.5,91,15,50,0.702,'18:02:34',18.0,125,415,465,5,10,7],
    ["",'JOU1101','Summer A/C 2018','18GH',327,255,26,29,16,91,69.8,32,42,27,0.515,'16:05:31',16.1,832,328,396,3,6,5],
    ["",'DCP3456','Fall 2016',1052,165,129,13,15,8,94,67.5,44,84,96,0.125,'13:07:00',13.1,348,377,498,10,10,2],
    ["",'DCP3456','Fall 2016','09FB',380,296,30,34,19,88,47.3,44,67,95,0.253,'13:13:42',13.2,408,409,148,1,10,10],
    ["",'DCP3456','Fall 2016','18GH',371,289,30,33,19,90,58.2,66,36,27,0.997,'10:41:20',10.7,174,412,443,5,7,7],
    ["",'DCP3456','Fall 2016','067H',158,123,13,14,8,86,65.4,96,31,67,0.339,'11:17:48',11.3,388,407,280,0,4,5],
    ["",'DCP3456','Fall 2016',4284,112,87,9,10,6,88,61,41,85,57,0.249,'19:46:30',19.8,766,308,433,0,3,2],
    ["",'DCP3456','Fall 2016','2BL5',355,277,28,32,18,98,50.4,29,16,75,0.802,'13:31:10',13.5,782,109,283,5,4,7],
    ["",'DCP3456','Fall 2016',1053,356,278,28,32,18,87,67.5,38,56,85,0.841,'12:13:06',12.2,156,327,243,2,7,3],
    ["",'JOU1101','Fall 2016','067H',327,255,26,29,16,100,69.8,61,16,16,0.098,'17:23:44',17.4,234,481,423,4,1,6],
    ["",'JOU1101','Fall 2016',4284,165,129,13,15,8,87,67.5,30,23,39,0.825,'10:41:35',10.7,530,484,438,5,10,10],
    ["",'JOU1101','Fall 2016','2BL5',102,80,8,9,5,100,61.2,45,24,69,0.407,'19:24:50',19.4,853,221,455,10,5,8],
    ["",'JOU1101','Summer B 2016',4284,380,296,30,34,19,99,47.3,53,90,4,0.926,'11:24:43',11.4,798,257,303,0,4,3],
    ["",'JOU1101','Summer A/C 2016','2BL5',371,289,30,33,19,100,58.2,100,96,49,0.769,'14:31:16',14.5,720,362,418,3,5,0],
    ["",'JOU1101','Spring 2016',4284,158,123,13,14,8,86,65.4,55,15,88,0.356,'18:08:35',18.1,248,331,195,0,8,2],
    ["",'JOU1101','Fall 2018','09FB',293,229,23,26,15,91,59,43,1,37,0.220,'10:05:50',10.1,135,357,259,9,17,17],
    ["",'JOU1101','Fall 2018','067H',117,91,9,11,6,85,63,81,73,99,0.368,'13:55:19',13.9,433,318,100,14,7,13],
    ["",'AEB1234','Fall 2018','2BL5',143,112,11,13,7,85,46,39,8,69,0.259,'13:37:13',13.6,322,105,189,11,11,8],
    ["",'GEB2001','Fall 2018','09FB',355,277,28,32,18,90,37,73,77,40,0.814,'17:12:10',17.2,431,298,310,5,15,5],
    ["",'GEB2001','Fall 2018','067H',218,170,17,20,11,89,64,73,35,3,0.959,'14:33:15',14.6,176,348,306,14,20,7],
    ["",'GEB2001','Summer B 2018','067H',237,185,19,21,12,95,30,57,26,30,0.204,'14:56:42',14.9,353,266,128,8,9,16],
    ["",'JOU1101','Summer B 2018','09FB',156,122,12,14,8,87,48,79,54,43,0.043,'19:55:01',19.9,487,149,200,8,5,11],
    ["",'JOU1101','Summer B 2018','4GH9',362,282,29,33,18,97,35,60,99,75,0.034,'19:40:23',19.7,128,383,189,20,18,11],
    ["",'ISM6216','Fall 2016','4GH9',198,154,16,18,10,89,47,95,37,38,0.554,'11:57:42',12.0,352,256,459,19,16,20],
    ["",'ISM6216','Fall 2016','09FB',110,86,9,10,6,95,49,83,71,32,0.362,'11:34:32',11.6,352,223,457,11,10,16],
    ["",'ISM6216','Fall 2016','18GH',134,105,11,12,7,85,58,35,27,1,0.813,'18:10:41',18.2,452,171,199,14,13,20],
    ["",'ISM6216','Fall 2016','067H',400,312,32,36,20,92,50,42,29,46,0.834,'18:29:12',18.5,169,392,137,12,18,6],
    ["",'ISM6216','Fall 2016',4284,123,96,10,11,6,89,45,52,77,29,0.440,'19:09:33',19.2,225,213,102,12,7,10],
    ["",'ISM6216','Summer B 2016',4284,111,87,9,10,6,88,63,36,85,14,0.547,'15:55:06',15.9,177,168,185,18,13,15],
    ["",'ISM6216','Summer A/C 2016',4284,332,259,27,30,17,96,48,57,56,15,0.784,'11:16:27',11.3,140,393,304,18,8,13],
    ["",'ISM6216','Spring 2016',5648,190,148,15,17,10,85,44,50,61,12,0.777,'17:35:30',17.6,481,323,366,18,6,10]
];

let termData = [
    ["",'AEB1234','Fall 2018',"",664,710,73,82,46,98,67.5,68,69,73,0.169,'18:10:22',18.2,216,138,383,8,1,3],
    ["",'DCP3456','Fall 2018',"",1132,883,91,102,57,91,69.8,63,74,46,0.54,'14:23:11',14.4,358,255,218,9,10,5],
    ["",'MAC2130','Fall 2018',"",492,384,39,44,25,88,69.8,75,82,45,0.878,'16:03:34',16.1,453,434,306,9,0,4],
    ["",'MAC2130','Summer B 2018',"",102,80,8,9,5,96,61.2,58,100,19,0.818,'17:42:44',17.7,909,344,297,5,5,6],
    ["",'AEB1234','Summer A/C 2018',"",492,384,39,44,25,85,47.3,55,5,30,0.614,'11:16:43',11.3,990,452,345,5,4,0],
    ["",'JOU1101','Summer A/C 2018',"",1038,810,83,93,52,91,50.4,54,1,18,0.342,'14:39:49',14.7,684,247,267,9,6,1],
    ["",'DCP3456','Fall 2016',"",1897,1480,152,171,95,94,67.5,44,84,96,0.125,'14:16:33',14.3,348,377,498,10,10,2],
    ["",'JOU1101','Fall 2016',"",594,463,48,53,30,100,69.8,61,16,16,0.098,'10:23:22',10.4,234,481,423,4,1,6],
    ["",'JOU1101','Summer B 2016',"",380,296,30,34,19,99,47.3,53,90,4,0.926,'15:22:13',15.4,798,257,303,0,4,3],
    ["",'JOU1101','Summer A/C 2016',"",371,289,30,33,19,100,58.2,100,96,49,0.769,'15:36:55',15.6,720,362,418,3,5,0],
    ["",'JOU1101','Spring 2016',"",158,123,13,14,8,86,65.4,55,15,88,0.356,'18:06:43',18.1,248,331,195,0,8,2],
    ["",'JOU1101','Fall 2018',"",410,431,44,50,28,92,33,43,63,11,0.713,'19:16:02',19.3,232,380,424,14,14,10],
    ["",'GEB2001','Fall 2018',"",573,278,29,32,18,89,41,32,35,33,0.412,'13:30:47',13.5,376,416,191,11,14,11],
    ["",'GEB2001','Summer B 2018',"",237,311,32,36,20,90,48,30,28,0,0.333,'10:03:26',10.1,462,119,198,16,12,14],
    ["",'JOU1101','Summer B 2018',"",518,210,22,24,13,90,59,57,28,26,0.669,'10:52:53',10.9,157,387,436,6,6,8],
    ["",'ISM6216','Fall 2016',"",965,1037,106,120,67,100,51,98,88,85,0.721,'13:38:35',13.6,117,401,298,6,16,7],
    ["",'ISM6216','Summer B 2016',"",111,205,21,24,13,87,44,86,16,74,0.410,'10:10:28',10.2,221,497,137,9,18,15],
    ["",'ISM6216','Summer A/C 2016',"",332,299,31,34,19,85,45,32,81,72,0.673,'16:35:15',16.6,251,470,118,10,11,11],
    ["",'ISM6216','Spring 2016',"",190,275,28,32,18,89,44,38,91,89,0.531,'16:58:21',17.0,110,114,321,17,18,5]
];

let courseData = [
    ["",'AEB1234',"","",1156,902,92,104,58,98,67.5,68,69,73,0.169,'10:48:21',10.8,216,138,383,8,1,3],
    ["",'DCP3456',"","",3029,2363,242,273,151,91,69.8,63,74,46,0.54,'16:44:08',16.7,358,255,218,9,10,5],
    ["",'MAC2130',"","",594,463,48,53,30,88,69.8,75,82,45,0.878,'13:38:26',13.6,453,434,306,9,0,4],
    ["",'JOU1101',"","",3496,2727,280,315,175,91,50.4,54,1,18,0.342,'19:50:42',19.8,684,247,267,9,6,1],
    ["",'GEB2001',"","",810,632,65,73,41,86,60,72,22,47,0.525,'19:59:47',20.0,153,313,261,19,17,11],
    ["",'ISM6216',"","",1598,1246,128,144,80,88,58,98,86,28,0.983,'10:54:44',10.9,464,442,408,7,16,10]
];

let studentsList = ["# Satisf.", "# Unsatisf.", "# Drop", "# Incomplete"];
let scoresList = ["High Score", "Low Score", "Average", "Median", "Mode"];
let averageList = ["Logins", "Avg # Page Views", "Avg # File Views", "Avg # Submissions", "Avg # Conversations", "Avg # Discussions"];
let timeList = ["Avg Time"];

define(['jquery', 'datatable', 'plotly'], function($, dt, plotly) {
    $(document).ready(function() {

        let termsChecked = 0;
        let sectionsChecked = 0;
        let rows = 0;
        let yaxis = [];
        let xaxis = [];

        let courseRadio = $("#courseradio");
        let termRadio = $("#termradio");
        let sectionRadio = $("#sectionradio");
        let radiobutton  = $('input:radio');
        let table = null;

        courseRadio.prop("checked", true);

        coursesMenu();
        createTable();
        drawTable(courseData);
        loadGraphs(1,2,3,4);

        // // // // // Radio buttons: // // // // // // //

        radiobutton.on('change', function(){
            $('#select-all').trigger('click');

            if(this.id === "courseradio") {
                termRadio.checked = false;
                sectionRadio.checked = false;

                table.column(2).visible(false);
                table.column(3).visible(false);

                $('#terms').empty();
                $('#sections').empty();

                tableData = courseData;

            } else if (this.id === "termradio") {
                courseRadio.checked = false;
                sectionRadio.checked = false;

                table.column(2).visible(true);
                table.column(3).visible(false);

                $('#terms').empty();
                $('#sections').empty();
                termsMenu();

                tableData = termData;

            } else if (this.id === "sectionradio") {

                termRadio.checked = false;
                courseRadio.checked = false;

                table.column(2).visible(true);
                table.column(3).visible(true);

                $('#terms').empty();
                termsMenu();
                sectionsMenu();

                tableData = sectionData;
            }

            table.clear();
            table.rows.add(tableData);
            table.draw();
            $('#select-all').trigger('click');
            reloadGraphs();

        });

        // // // // Generate menu items: // // // // // // //

        function coursesMenu() {
            let courses = [];

            for(let row = 0; row < courseData.length; row++) {
                let course = courseData[row][1];
                if(!courses.includes(course)) {
                    courses.push(course);
                }
            }

            courses = courses.sort();

            for(let i = 0; i < courses.length; i++) {
                let k = courses[i];
                $('#courses').append('<input type="checkbox" id="' + k +'" name="Course" value="'+ k +'" /> ' + k + '<br />');
            }

            $( '#courses .selectAll' ).on('click', function () {
                $( '#courses input[type="checkbox"]' ).prop('checked', this.checked);
            });

            $( '#courses input[type="checkbox"]' ).prop('checked', true);

        }

        function termsMenu() {
            $('#terms').append("<label>Terms</label>");
            $('#terms').append('<hr>');
            $('#terms').append("<label><input type='checkbox' name='SelectAll' class='selectAll' id='Select_All_Term' value='Select_All_Term'></label>Select All<br/>");

            let terms = [];

            for(let row = 0; row < termData.length; row++) {
                let term = termData[row][2];
                if(!terms.includes(term)) {
                    terms.push(term);
                }
            }

            terms = terms.sort();

            for(let i = 0; i < terms.length; i++) {
                let k = terms[i];
                let j = k.replace(" ","_");
                $('#terms').append('<input type="checkbox" id="' + j +'" name="Term" value="'+ k +'" /> ' + k + '<br />');
            }

            $( '#terms .selectAll' ).on('click', function () {
                $( '#terms input[type="checkbox"]' ).prop('checked', this.checked);
                searchTerms();
            });

            $( '#terms input[type="checkbox"]' ).prop('checked', true);
        }

        function sectionsMenu() {
            $('#sections').append("<label>Sections</label>");
            $('#sections').append('<hr>');
            $('#sections').append("<label><input type='checkbox' name='SelectAll' class='selectAll' id='Select_All_Section' value='Select_All_Section'></label>Select All<br/>");

            let sections = [];

            for(let row = 0; row < sectionData.length; row++) {
                let section = sectionData[row][3];
                if(!sections.includes(section)) {
                    sections.push(section);
                }
            }

            sections = sections.sort();

            for(let i = 0; i < sections.length; i++) {
                let k = sections[i];
                $('#sections').append('<input type="checkbox" id="' + k +'" name="Sections" value="'+ k +'" /> ' + k + '<br />');
            }

            $( '#sections .selectAll' ).click( function () {
                $( '#sections input[type="checkbox"]' ).prop('checked', this.checked);
                searchSections();

            });

            $( '#sections input[type="checkbox"]' ).prop('checked', true)

        }

        // // // // // DataTable: // // // // // // //

        $('.dataTables_filter').hide();

        function drawTable(tableData) {
            table = $('#uf-datatable').DataTable({
                data: tableData,
                scrollX: true,
                scrollY: calcHeight(),
                paging: false,
                info: false,
                searching: true,
                columnDefs: [
                    {
                        targets: "_all",
                        orderable: false,
                        className: 'dt-center'
                    },
                    {
                        targets: 0,
                        searchable: false,
                        ordeable: false,
                        className: 'select-checkbox',
                        render: function (data, type, full, meta){
                            return '<input type="checkbox" name="id[]" value=1>';
                        },
                    },
                    {
                        targets: [2,3],
                        visible: false,
                        searching: true
                    },
                    {
                        targets: [16],
                        visible: false
                    }
                ],
                select: {
                    style: 'os',
                    selector: 'td:first-child'
                },
                order: [[1, 'asc'],[2, 'asc'],[3, 'asc']]
            });
        }

        // Handle click on "Select all" control for the table
        $('#select-all').on('click', function(){
            let rowss = table.rows({ 'search': 'applied' }).nodes();
            $('input[type="checkbox"]', rowss).prop('checked', this.checked);
        });

        $('#example tbody').on('change', 'input[type="checkbox"]', function(){
            if(!this.checked){
                let el = $('#select-all').get(0);
                if(el && el.checked && ('indeterminate' in el)){
                    el.indeterminate = true;
                }
            }
        });

        // Automatically select all rows
        setTimeout(function() {
            $('#select-all').trigger('click');
        },0);

        // Automatically open the sidebar
        setTimeout(function() {
            $('.sidebarBtn').trigger('click');
        },0);

        $(".sidebarBtn").click(function () {
            $(".sidebar").toggleClass("active");
            $(".sidebarBtn").toggleClass("toggle");
        });

        // filter datatable by clicking checkboxes

        $(document).on('change', 'input[name="Course"]', function() {
            searchCourses()
        });

        $(document).on('click', '#Select_All_Course', function() {
            // console.log($('#courses').children());
            // $('#courses').children();
            searchCourses()
        });

        function searchCourses() {
            let courses = $('input:checkbox[name="Course"]:checked').map(function () {
                return this.value
            }).get().join('|');
            table.column(1).search(courses, true, false, false).draw(false);

            reloadGraphs()
        }

        $(document).on('change', 'input[name="Term"]', function() {
            searchTerms();
        });

        function searchTerms() {
            let terms = $('input:checkbox[name="Term"]:checked').map(function () {
                return this.value
            }).get().join('|');
            table.search(terms, true, false, false).draw(false);

            reloadGraphs()
        }

        $(document).on('change', 'input[name="Section"]', function() {
            searchSections()
        });

        function searchSections() {
            let sections = $('input:checkbox[name="Section"]:checked').map(function () {
                return this.value
            }).get().join('|');
            table.column(3).search(sections, true, false, false).draw(false);

            reloadGraphs()
        }

        $(document).on('change', 'input[name="id[]"]', function() {
            if($(this).is(':checked')) {
                this.value = 1;
            } else {
                this.value = 0;
            }
            reloadGraphs();
        });

        function createTable() {
            let chartTable = $('#uf-table');
            if(courseRadio.is(':checked')) {
                for(let i = 1; i < 4; i+=2) {
                    let j = i +1;

                    chartTable.append("<tr><td id=" + i + "><td id=" + j + ">");
                }
            } else {
                for(let i = 1; i < 5; i++) {
                    chartTable.append("<tr><td id=" + i + ">");

                    $('#' + i).css({ width: "1500px"});
                }

            }
        }

        function loadGraphs(td1, td2, td3, td4) {

            let studentsDiv = document.createElement("div");
            studentsDiv.id = "students_graph";
            studentsDiv.name = 'uf-graphs';
            $('#' + td1).append(studentsDiv);

            newChart(studentsDiv, studentsList);

            let scoresDiv = document.createElement("div");
            scoresDiv.id = "scores_graph";
            scoresDiv.name = 'uf-graphs';
            $('#' + td2).append(scoresDiv);

            newChart(scoresDiv, scoresList);

            let activityList = ["Activity Index"];

            let activityDiv = document.createElement("div");
            activityDiv.id = "activity_graph";
            activityDiv.name = 'uf-graphs';
            $('#' + td3).append(activityDiv);

            newChart(activityDiv, activityList);

            let averageDiv = document.createElement("div");
            averageDiv.id = "average_graph";
            averageDiv.name = 'uf-graphs';
            $('#' + td4).append(averageDiv);

            multiChart(averageDiv, averageList, timeList);
        }

        function reloadGraphs() {
            $('#uf-table').empty();

            createTable();
            loadGraphs(1,2,3,4);
        }

        function maxValue(col) {
            let values = [];
            let data = table.column(col).data();
            for(let i = 0; i < data.length; i++) {
                values.push(data[i]);
            }
            let max = Math.max(...values);
            return max;
        }

        function newChart(div, list) {
            let data = [];
            let mode = "";
            let title = "";
            let yTitle = "";
            let maxYaxisValue;

            if(div.id === 'scores_graph') {
                mode = 'group';
                maxYaxisValue = 110;
            } else if (div.id === 'students_graph') {
                yTitle = "# of Students";
                mode = 'stack';
                maxYaxisValue = maxValue(4) + 10;
            } else if (div.id === 'activity_graph') {
                yTitle = "Activity Index";
                mode = 'bar';
                maxYaxisValue = 1;
            }

            for (let i = 0; i < list.length; i++) {
                let trace = {
                    x: getXaxis(),
                    y: getYaxis(getColumn(list[i])),
                    type: 'bar',
                    name: list[i]
                };
                data.push(trace);
            }

            let layout = {
                title: title,
                legend: {
                    orientation: "h",
                    x: 0.05,
                    y: 1.3
                },
                xaxis: {
                    automargin: true
                },
                yaxis: {
                    title: yTitle,
                    overlaying: 'y',
                    range: [0, maxYaxisValue],
                    automargin: true

                },
                barmode: mode
            };

            plotly.newPlot(div, data, layout);

        }

        function multiChart(div, list, list2) {
            let data = [];

            let layout = {
                title: "",
                xaxis: {
                    automargin: true
                },
                yaxis: {
                    title: 'Average Count',
                },
                yaxis2: {
                    title: 'Avg Time',
                    titlefont: {color: '#e377c2'},
                    tickfont: {color: '#e377c2'},
                    autorange: false,
                    range: [0, maxValue(16) + 5],
                    anchor: 'free',
                    overlaying: 'y',
                    side: 'right',
                    position: 1
                },
                legend: {
                    orientation: "h",
                    x: 0.05,
                    y: 1.3
                },
            };

            for (let i = 0; i < list.length; i++) {
                let trace = {
                    x: getXaxis(),
                    y: getYaxis(getColumn(list[i])),
                    type: 'bar',
                    yaxis: 'y',
                    name: list[i]
                };

                data.push(trace);
            }

            for (let i = 0; i < list2.length; i++) {
                let trace2 = {
                    x: getXaxis(),
                    y: getYaxis(getColumn(list2[i])),
                    type: 'scatter',
                    yaxis: 'y2',
                    name: list2[i]
                };
                data.push(trace2);
            }

            plotly.newPlot(div, data, layout);
        }

        // // // // // Accesory methods: // // // // // // //

        function getYaxis(column) {
            yaxis = [];

            for (let row = 0; row < rows; row ++) {
                let checkboxVal = table.context[0].nTBody.childNodes[row].childNodes[0].childNodes[0].getAttribute('value');

                if(checkboxVal > 0) {
                    let value = table.columns(column, {search: 'applied'}).data()[0][row];
                    yaxis.push(value);
                }
            }
            return yaxis;
        }

        function getXaxis() {
            xaxis = [];
            rows = table.page.info().recordsDisplay;
            termsChecked = $('#terms').find(':checked').length;
            sectionsChecked = $('#sections').find(':checked').length;

            if(sectionRadio.is(':checked')) {
                xaxis = getSectionXaxis();
            } else if (termRadio.is(':checked')) {
                xaxis = getTermXaxis();
            } else {
                xaxis = getCourseXaxis();
            }
            return xaxis;
        }

        function getCourseXaxis() {
            xaxis = [];

            let previousCourse = "";
            let currentCourse = "";
            let course = "";

            for (let row = 0; row < rows; row ++) {
                let checkboxVal = table.context[0].nTBody.childNodes[row].childNodes[0].childNodes[0].getAttribute('value');

                if(checkboxVal > 0) {
                    if (row > 0) {
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row - 1];
                    } else {
                        course = table.columns(1, {search: 'applied'}).data()[0][row];
                        xaxis.push(course);
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row];
                    }
                    currentCourse = table.columns(1, {search: 'applied'}).data()[0][row];
                    if (previousCourse !== currentCourse) {
                        course = table.columns(1, {search: 'applied'}).data()[0][row];
                        xaxis.push(course);
                    }
                }

            }
            return xaxis;
        }

        function getSectionXaxis() {
            xaxis = [];
            for (let row = 0; row < rows; row++) {
                let checkboxVal = table.context[0].nTBody.childNodes[row].childNodes[0].childNodes[0].getAttribute('value');

                if(checkboxVal > 0) {
                    let course = table.columns(1, {search: 'applied'}).data()[0][row];
                    let term = table.columns(2, {search: 'applied'}).data()[0][row];
                    let section = table.columns(3, {search: 'applied'}).data()[0][row];
                    xaxis.push(course + " - " + term + " - " + section);
                }

            }

            return xaxis;
        }

        function getTermXaxis() {
            xaxis = [];

            let previousCourse = "";
            let currentCourse = "";
            let previousTerm = "";
            let currentTerm = "";
            let course = "";
            let term = "";

            for (let row = 0; row < rows; row ++) {
                let checkboxVal = table.context[0].nTBody.childNodes[row].childNodes[0].childNodes[0].getAttribute('value');

                if(checkboxVal > 0) {
                    course = table.columns(1, {search: 'applied'}).data()[0][row];
                    term = table.columns(2, {search: 'applied'}).data()[0][row];

                    if (row > 0) {
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row - 1];
                        previousTerm = table.columns(2, {search: 'applied'}).data()[0][row - 1];
                    } else {
                        xaxis.push(course + " - " + term);
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row];
                        previousTerm = table.columns(2, {search: 'applied'}).data()[0][row];
                    }

                    currentCourse = table.columns(1, {search: 'applied'}).data()[0][row];
                    currentTerm = table.columns(2, {search: 'applied'}).data()[0][row];

                    if (previousCourse === currentCourse && previousTerm === currentTerm) {

                    } else {
                        xaxis.push(course + " - " + term);
                    }
                }

            }

            return xaxis;
        }

        function calcHeight() {
            return $(window).height() * 38/100;
        }

        function getColumn(column) {
            switch(column) {
                case 'Course':
                    column = 1;
                    break;
                case 'Term':
                    column = 2;
                    break;
                case 'Section':
                    column = 3;
                    break;
                case '# of Students':
                    column = 4;
                    break;
                case '# Satisf.':
                    column = 5;
                    break;
                case '# Unsatisf.':
                    column = 6;
                    break;
                case '# Drop':
                    column = 7;
                    break;
                case '# Incomplete':
                    column = 8;
                    break;
                case 'High Score':
                    column = 9;
                    break;
                case 'Low Score':
                    column = 10;
                    break;
                case 'Average':
                    column = 11;
                    break;
                case 'Median':
                    column = 12;
                    break;
                case 'Mode':
                    column = 13;
                    break;
                case 'Activity Index':
                    column = 14;
                    break;
                case 'Avg Time':
                    column = 16;
                    break;
                case 'Logins':
                    column = 17;
                    break;
                case 'Avg # Page Views':
                    column = 18;
                    break;
                case 'Avg # File Views':
                    column = 19;
                    break;
                case 'Avg # Submissions':
                    column = 20;
                    break;
                case 'Avg # Conversations':
                    column = 21;
                    break;
                case 'Avg # Discussions':
                    column = 22;
                    break;
            }
            return column;
        }
    });
});


