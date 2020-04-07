let tableData = [];

let studentData = [
    // UFID, Course, Term, Section, Score, Activity Idx, Logins, Time, Page, File, Submissions, Conversations, Discussions
    [54447586,'AEB1234','Fall 2018','09FB',95,0.312,43,'2:33:50',79,25,8,18,4],
    [85370014,'AEB1234','Fall 2018','09FB',90,0.631,11,'1:33:50',65,4,17,7,16],
    [51570255,'DCP3456','Fall 2018','067H',71,0.459,69,'3:33:50',51,11,14,19,1],
    [29422276,'AEB1234','Fall 2018','09FB',52,0.868,100,'2:33:50',49,10,3,1,19],
    [80496218,'AEB1234','Fall 2018','09FB',72,0.918,129,'2:33:50',64,13,64,71,59],
    [58318085,'AEB1234','Fall 2018','09FB',95,0.407,28,'1:33:50',59,69,31,91,93],
    [28640784,'AEB1234','Fall 2018','09FB',77,0.896,55,'2:33:50',34,7,76,60,54],
    [59116675,'DCP3456','Fall 2018','067H',23,0.293,86,'4:33:50',30,23,12,8,15],
    [76284012,'DCP3456','Fall 2018','067H',84,0.355,84,'5:33:50',48,16,10,18,16],
    [37136686,'DCP3456','Fall 2018','067H',84,0.958,66,'6:33:50',62,4,8,3,4],
    [17300428,'DCP3456','Fall 2018','067H',28,0.078,55,'7:33:50',55,6,7,1,12],
    [65477063,'DCP3456','Fall 2018','09FB',67,0.413,19,'8:33:50',81,2,3,10,7],
    [39884824,'DCP3456','Fall 2018','09FB',17,0.373,93,'9:33:50',62,13,13,1,16],
    [85161500,'JOU1101','Fall 2016',1052,91,0.07,17,'10:33:50',49,7,10,10,20],
    [77584253,'JOU1101','Fall 2016',1052,20,0.759,20,'11:33:50',64,14,1,5,15],
    [41983729,'JOU1101','Fall 2016',1052,51,0.022,74,'12:33:50',70,6,20,7,4],
    [22709919,'JOU1101','Fall 2016',1053,7,0.547,72,'13:33:50',96,18,19,4,3],
    [23036655,'JOU1101','Fall 2016',1053,24,0.577,88,'14:33:50',44,19,6,9,6],
    [46114137,'JOU1101','Spring 2016',4284,53,0.517,76,'5:33:50',94,3,19,1,0],
    [21580084,'JOU1101','Spring 2016',4284,53,0.941,95,'5:33:50',66,6,1,7,12],
    [68929775,'JOU1101','Spring 2016',4284,19,0.224,74,'5:33:50',91,18,17,9,1],
    [72997854,'JOU1101','Spring 2016',4284,92,0.649,17,'5:33:50',79,4,5,15,18],
    [48628644,'JOU1101','Spring 2016','18GH',57,0.941,27,'5:33:50',30,21,3,1,19],
    [93071486,'JOU1101','Spring 2016','18GH',97,0.638,56,'5:33:50',73,13,7,18,10],
    [17633608,'JOU1101','Spring 2016','18GH',26,0.775,63,'5:33:50',32,23,19,8,0],
    [62081605,'JOU1101','Spring 2016','18GH',42,0.821,18,'5:33:50',67,6,19,7,0],
    [71883373,'GEB2001','Fall 2016','2BL5',79,0.893,92,'5:33:50',75,10,13,19,3],
    [94612280,'GEB2001','Fall 2016','2BL5',3,0.972,27,'5:33:50',74,15,3,19,19],
    [42489635,'GEB2001','Spring 2016',1052,91,0.66,64,'5:33:50',82,3,9,14,14],
    [27577663,'GEB2001','Spring 2016',1052,91,0.613,77,'5:33:50',41,23,16,20,6],
    [87122510,'GEB2001','Spring 2016',1052,40,0.626,68,'5:33:50',82,14,8,4,10],
    [64268885,'GEB2001','Spring 2016',1053,25,0.454,84,'5:33:50',41,2,15,14,2],
    [31327038,'GEB2001','Spring 2016',1053,90,0.687,64,'5:33:50',78,7,3,1,9],
    [99765987,'GEB2001','Spring 2016',4284,81,0.693,67,'5:33:50',69,15,15,8,10],
    [19156147,'GEB2001','Spring 2016',4284,57,0.879,97,'5:33:50',50,8,18,14,19],
    [65729335,'GEB2001','Spring 2016',4284,11,0.631,84,'5:33:50',53,15,11,7,6],
    [74960273,'GEB2001','Spring 2016',4284,96,0.421,100,'5:33:50',80,18,9,14,1],
    [52331115,'AEB1234','Summer A/C 2017','09FB',95,0.571,43,'5:33:50',90,20,16,7,9],
    [21317768,'AEB1234','Summer A/C 2017','09FB',64,0.052,19,'5:33:50',45,21,11,15,14],
    [89109452,'DCP3456','Summer A/C 2017','2BL5',18,0.901,38,'5:33:50',62,15,4,6,0],
    [50422230,'DCP3456','Summer A/C 2017','2BL5',38,0.014,64,'5:33:50',56,24,18,2,0],
    [18274486,'DCP3456','Summer A/C 2017','2BL5',58,0.421,78,'5:33:50',84,13,18,10,18],
    [50422456,'DCP3456','Summer A/C 2017','2BL5',60,0.35,80,'5:33:50',87,15,20,13,20],
    [26677739,'DCP3456','Fall 2018','067H',89,0.932,105,'3:33:50',78,77,27,58,57],
    [79419521,'DCP3456','Fall 2018','067H',61,0.790,29,'4:33:50',57,44,59,26,32],
    [12385792,'DCP3456','Fall 2018','067H',66,0.881,135,'5:33:50',63,66,23,73,74],
    [82288498,'DCP3456','Fall 2018','067H',75,0.207,31,'6:33:50',79,17,72,94,93],
    [41808884,'DCP3456','Fall 2018','067H',91,0.023,84,'7:33:50',76,53,40,63,51],
    [85603428,'DCP3456','Fall 2018','09FB',85,0.184,129,'8:33:50',94,74,14,66,52],
    [43708563,'DCP3456','Fall 2018','09FB',75,0.384,111,'9:33:50',37,83,83,30,17],
    [15140206,'JOU1101','Fall 2016',1052,92,0.315,52,'10:33:50',14,34,62,99,45],
    [52727577,'JOU1101','Fall 2016',1052,60,0.729,146,'11:33:50',93,81,14,56,55],
    [96136746,'JOU1101','Fall 2016',1052,76,0.786,88,'12:33:50',91,32,27,52,5],
    [85493806,'JOU1101','Fall 2016',1053,75,0.018,65,'13:33:50',14,20,23,24,5],
    [61374685,'JOU1101','Fall 2016',1053,87,0.043,55,'14:33:50',33,38,86,13,52],
    [90134064,'JOU1101','Spring 2016',4284,99,0.600,30,'5:33:50',61,40,10,30,98],
    [18394417,'JOU1101','Spring 2016',4284,83,0.405,60,'5:33:50',68,73,46,4,2],
    [23954306,'JOU1101','Spring 2016',4284,72,0.928,77,'5:33:50',75,41,17,39,58],
    [26763700,'JOU1101','Spring 2016',4284,74,0.295,132,'5:33:50',69,1,46,6,3],
    [24012085,'JOU1101','Spring 2016','18GH',63,0.062,81,'5:33:50',47,20,56,23,44],
    [92025505,'JOU1101','Spring 2016','18GH',71,0.672,36,'5:33:50',14,96,59,78,34],
    [76709836,'JOU1101','Spring 2016','18GH',90,0.541,28,'5:33:50',41,74,84,16,92],
    [64594520,'JOU1101','Spring 2016','18GH',97,0.265,118,'5:33:50',8,54,44,64,62],
    [95666006,'GEB2001','Fall 2016','2BL5',66,0.227,133,'5:33:50',60,87,76,8,2],
    [97950484,'GEB2001','Fall 2016','2BL5',98,0.867,127,'5:33:50',69,7,77,44,29],
    [83905879,'GEB2001','Spring 2016',1052,64,0.284,113,'5:33:50',38,9,16,23,47],
    [21027725,'GEB2001','Spring 2016',1052,71,0.459,134,'5:33:50',0,67,80,90,86],
    [69450246,'GEB2001','Spring 2016',1052,82,0.195,68,'5:33:50',51,23,69,85,83],
    [66289683,'GEB2001','Spring 2016',1053,88,0.948,128,'5:33:50',26,3,85,57,1],
    [13953502,'GEB2001','Spring 2016',1053,64,0.595,31,'5:33:50',55,35,84,1,97],
    [39284783,'GEB2001','Spring 2016',4284,84,0.865,80,'5:33:50',64,61,36,9,47],
    [60467572,'GEB2001','Spring 2016',4284,91,0.597,137,'5:33:50',8,91,78,64,78],
    [74381739,'GEB2001','Spring 2016',4284,95,0.059,15,'5:33:50',87,85,23,22,54],
    [16069249,'GEB2001','Spring 2016',4284,80,0.450,98,'5:33:50',17,65,60,61,55],
    [61713822,'AEB1234','Summer A/C 2017','09FB',68,0.179,68,'5:33:50',89,87,18,30,71],
    [74452398,'AEB1234','Summer A/C 2017','09FB',62,0.347,18,'5:33:50',43,88,79,30,64],
    [45140223,'DCP3456','Summer A/C 2017','2BL5',94,0.558,75,'5:33:50',23,60,96,36,50],
    [23262513,'DCP3456','Summer A/C 2017','2BL5',65,0.761,142,'5:33:50',99,80,47,6,84],
    [18508567,'DCP3456','Summer A/C 2017','2BL5',71,0.048,51,'5:33:50',63,44,60,35,36],
    [41609965,'DCP3456','Summer A/C 2017','2BL5',68,0.713,74,'5:33:50',19,97,37,84,51],
    [47300942,'AEB1234','Fall 2018','09FB',88,0.157,29,'2:33:50',49,8,48,33,63],
    [81983500,'AEB1234','Fall 2018','09FB',79,0.821,29,'1:33:50',65,67,15,3,39],
    [30287036,'AEB1234','Fall 2018','09FB',85,0.549,86,'2:33:50',36,73,100,52,74],
    [91081312,'DCP3456','Fall 2018','067H',93,0.990,24,'3:33:50',4,86,46,65,7],
    [85157884,'DCP3456','Fall 2018','067H',88,0.394,82,'4:33:50',37,91,22,13,81],
    [89113342,'DCP3456','Fall 2018','067H',93,0.307,44,'5:33:50',95,3,77,68,16],
    [22141050,'DCP3456','Fall 2018','067H',83,0.516,35,'6:33:50',81,23,45,4,52],
    [93256816,'DCP3456','Fall 2018','067H',88,0.229,17,'7:33:50',37,20,3,85,43],
    [35792776,'DCP3456','Fall 2018','09FB',87,0.294,124,'8:33:50',87,26,65,16,32],
    [15380905,'DCP3456','Fall 2018','09FB',93,0.085,32,'9:33:50',43,23,49,99,58],
    [65844683,'JOU1101','Fall 2016',1052,97,0.873,112,'10:33:50',7,88,30,96,32],
    [28702920,'JOU1101','Fall 2016',1052,64,0.595,50,'11:33:50',31,91,80,83,87],
    [16203072,'JOU1101','Fall 2016',1052,63,0.076,112,'12:33:50',28,41,9,74,95],
    [60679301,'JOU1101','Fall 2016',1053,89,0.626,51,'13:33:50',84,60,69,44,35],
    [57535444,'JOU1101','Fall 2016',1053,61,0.657,52,'14:33:50',37,72,6,83,22],
    [74824894,'JOU1101','Spring 2016',4284,63,0.007,54,'5:33:50',74,89,9,73,7],
    [53431991,'JOU1101','Spring 2016',4284,82,0.154,85,'5:33:50',86,16,0,99,59],
    [95331317,'JOU1101','Spring 2016',4284,84,0.148,58,'5:33:50',14,26,76,53,17],
    [50045934,'JOU1101','Spring 2016',4284,88,0.974,83,'5:33:50',83,74,72,1,73],
    [81066850,'JOU1101','Spring 2016','18GH',98,0.657,105,'5:33:50',72,31,82,15,77],
    [70952260,'JOU1101','Spring 2016','18GH',65,0.007,119,'5:33:50',77,82,0,36,31],
    [12407538,'JOU1101','Spring 2016','18GH',73,0.745,145,'5:33:50',63,45,5,35,80],
    [63428740,'JOU1101','Spring 2016','18GH',73,0.019,94,'5:33:50',56,62,71,60,9],
    [47695850,'GEB2001','Fall 2016','2BL5',65,0.246,129,'5:33:50',37,55,65,67,31],
    [86479808,'GEB2001','Fall 2016','2BL5',60,0.773,40,'5:33:50',16,8,34,4,37],
    [12295218,'GEB2001','Spring 2016',1052,94,0.891,138,'5:33:50',74,65,99,32,37],
    [91568602,'GEB2001','Spring 2016',1052,100,0.013,102,'5:33:50',9,53,69,13,93],
    [63173363,'GEB2001','Spring 2016',1052,75,0.941,37,'5:33:50',46,31,75,67,18],
    [43687011,'GEB2001','Spring 2016',1053,81,0.392,22,'5:33:50',76,86,8,4,45],
    [94891488,'GEB2001','Spring 2016',1053,81,0.473,43,'5:33:50',67,74,31,43,53],
    [54470870,'GEB2001','Spring 2016',4284,87,0.508,52,'5:33:50',15,67,98,13,49],
    [97171362,'GEB2001','Spring 2016',4284,77,0.286,78,'5:33:50',25,16,25,20,16],
    [79606030,'GEB2001','Spring 2016',4284,89,0.043,57,'5:33:50',1,50,85,28,98],
    [86135351,'GEB2001','Spring 2016',4284,65,0.678,108,'5:33:50',13,1,91,57,71],
    [58157361,'AEB1234','Summer A/C 2017','09FB',69,0.123,63,'5:33:50',66,32,59,58,73],
    [22932767,'AEB1234','Summer A/C 2017','09FB',97,0.406,85,'5:33:50',84,86,97,62,95],
    [31664490,'DCP3456','Summer A/C 2017','2BL5',89,0.026,47,'5:33:50',97,41,90,9,73],
    [39788035,'DCP3456','Summer A/C 2017','2BL5',89,0.824,85,'5:33:50',48,11,88,3,82],
    [17421054,'DCP3456','Summer A/C 2017','2BL5',79,0.751,140,'5:33:50',23,9,9,84,71],
    [83669987,'DCP3456','Summer A/C 2017','2BL5',89,0.747,49,'5:33:50',3,52,22,51,10],
    [31309871,'AEB1234','Fall 2018','09FB',83,0.401,35,'2:33:50',80,76,90,22,47],
    [67284321,'AEB1234','Fall 2018','09FB',90,0.353,94,'1:33:50',12,18,99,85,9],
    [29988137,'AEB1234','Fall 2018','09FB',90,0.143,119,'2:33:50',55,16,46,73,43],
    [96700308,'DCP3456','Fall 2018','067H',72,0.016,59,'3:33:50',38,12,53,86,86],
    [10337107,'DCP3456','Fall 2018','067H',89,0.070,74,'4:33:50',84,53,20,96,28],
    [32384923,'DCP3456','Fall 2018','067H',91,0.634,17,'5:33:50',85,62,59,79,65],
    [35840322,'DCP3456','Fall 2018','067H',73,0.808,61,'6:33:50',15,6,92,66,6],
    [21071894,'DCP3456','Fall 2018','067H',86,0.028,146,'7:33:50',0,0,97,85,81],
    [56602229,'DCP3456','Fall 2018','09FB',83,0.075,53,'8:33:50',79,70,82,2,48],
    [22040361,'DCP3456','Fall 2018','09FB',67,0.457,46,'9:33:50',30,16,88,15,73],
    [75102713,'JOU1101','Fall 2016',1052,91,0.922,75,'10:33:50',25,32,43,17,21],
    [31220441,'JOU1101','Fall 2016',1052,89,0.505,94,'11:33:50',74,48,11,72,4],
    [96176695,'JOU1101','Fall 2016',1052,65,0.311,62,'12:33:50',17,82,83,71,0],
    [63866187,'JOU1101','Fall 2016',1053,70,0.381,84,'13:33:50',65,64,76,19,76],
    [33489132,'JOU1101','Fall 2016',1053,63,0.226,92,'14:33:50',83,81,58,17,30],
    [55093311,'JOU1101','Spring 2016',4284,63,0.666,36,'5:33:50',17,84,38,26,93],
    [68929798,'JOU1101','Spring 2016',4284,88,0.061,88,'5:33:50',9,44,86,41,54],
    [29245952,'JOU1101','Spring 2016',4284,69,0.641,27,'5:33:50',69,57,19,99,66],
    [74001089,'JOU1101','Spring 2016',4284,93,0.944,143,'5:33:50',13,22,77,17,38],
    [19812244,'JOU1101','Spring 2016','18GH',97,0.374,144,'5:33:50',80,13,79,85,21],
    [24489653,'JOU1101','Spring 2016','18GH',67,0.409,98,'5:33:50',98,34,31,72,17],
    [71123298,'JOU1101','Spring 2016','18GH',76,0.982,30,'5:33:50',47,21,81,58,60],
    [97725755,'JOU1101','Spring 2016','18GH',74,0.743,127,'5:33:50',66,50,46,9,99],
    [28535587,'GEB2001','Fall 2016','2BL5',67,0.219,143,'5:33:50',55,21,95,95,80],
    [78966565,'GEB2001','Fall 2016','2BL5',78,0.859,60,'5:33:50',23,24,98,47,72],
    [25299344,'GEB2001','Spring 2016',1052,83,0.673,85,'5:33:50',30,52,63,57,61],
    [65891510,'GEB2001','Spring 2016',1052,88,0.559,111,'5:33:50',43,51,40,25,47],
    [23202972,'GEB2001','Spring 2016',1052,79,0.687,34,'5:33:50',22,64,12,81,21],
    [77497828,'GEB2001','Spring 2016',1053,70,0.883,122,'5:33:50',78,14,19,65,47],
    [81213537,'GEB2001','Spring 2016',1053,88,0.261,103,'5:33:50',67,97,93,77,7],
    [66820501,'GEB2001','Spring 2016',4284,81,0.096,97,'5:33:50',24,6,64,55,48],
    [10354136,'GEB2001','Spring 2016',4284,99,0.801,38,'5:33:50',33,42,1,28,12],
    [21862947,'GEB2001','Spring 2016',4284,100,0.225,93,'5:33:50',33,71,26,12,52],
    [27060240,'GEB2001','Spring 2016',4284,72,0.620,122,'5:33:50',81,82,37,50,62],
    [46887555,'AEB1234','Summer A/C 2017','09FB',69,0.392,112,'5:33:50',7,48,84,2,17],
    [34502740,'AEB1234','Summer A/C 2017','09FB',90,0.024,67,'5:33:50',77,21,92,53,15],
    [85767963,'AEB1234','Summer A/C 2017','09FB',90,0.507,118,'5:33:50',9,10,40,42,77],
    [75303443,'AEB1234','Summer A/C 2017','09FB',73,0.191,67,'5:33:50',44,71,34,29,12],
    [85238159,'AEB1234','Summer A/C 2017','09FB',87,0.054,37,'5:33:50',56,63,66,11,52],
    [75851669,'AEB1234','Summer A/C 2017','09FB',71,0.720,124,'5:33:50',12,6,68,95,45],
    [21572232,'AEB1234','Fall 2018','09FB',80,0.407,116,'2:33:50',3,11,41,64,97],
    [47978370,'AEB1234','Fall 2018','09FB',81,0.850,112,'1:33:50',96,64,42,12,59],
    [69696936,'AEB1234','Fall 2018','09FB',65,0.942,75,'2:33:50',100,0,70,55,18],
    [56255912,'DCP3456','Fall 2018','067H',73,0.563,134,'3:33:50',87,7,58,35,32],
    [97993790,'DCP3456','Fall 2018','067H',94,0.451,109,'4:33:50',33,86,55,7,54],
    [52970192,'DCP3456','Fall 2018','067H',96,0.114,114,'5:33:50',84,43,87,36,46],
    [57515201,'DCP3456','Fall 2018','067H',94,0.063,37,'6:33:50',68,82,95,11,33],
    [83689099,'DCP3456','Fall 2018','067H',95,0.147,116,'7:33:50',65,8,10,83,79],
    [88212388,'DCP3456','Fall 2018','09FB',69,0.142,106,'8:33:50',95,55,36,33,17],
    [19093660,'DCP3456','Fall 2018','09FB',69,0.780,33,'9:33:50',64,52,19,84,42],
    [97870425,'JOU1101','Fall 2016',1052,81,0.103,26,'10:33:50',50,34,53,35,83],
    [97658316,'JOU1101','Fall 2016',1052,63,0.719,99,'11:33:50',36,49,16,63,92],
    [71754603,'JOU1101','Fall 2016',1052,87,0.717,129,'12:33:50',17,50,19,22,22],
    [33567234,'JOU1101','Fall 2016',1053,77,0.420,111,'13:33:50',50,45,69,63,18],
    [82907819,'JOU1101','Fall 2016',1053,88,0.340,119,'14:33:50',92,72,34,60,20],
    [55479931,'JOU1101','Spring 2016',4284,79,0.274,107,'5:33:50',19,86,78,8,92],
    [48377090,'JOU1101','Spring 2016',4284,99,0.774,124,'5:33:50',52,28,33,39,71],
    [32972192,'JOU1101','Spring 2016',4284,91,0.593,100,'5:33:50',16,96,28,54,1],
    [54725643,'JOU1101','Spring 2016',4284,76,0.588,81,'5:33:50',45,19,11,99,21],
    [91731388,'QMB5230','Spring 2016','18GH',75,0.961,88,'5:33:50',25,98,33,2,68],
    [76537850,'QMB5230','Spring 2016','18GH',77,0.470,55,'5:33:50',36,98,7,16,50],
    [71527734,'QMB5230','Spring 2016','18GH',73,0.287,104,'5:33:50',21,55,85,37,53],
    [76312448,'QMB5230','Spring 2016','18GH',80,0.943,113,'5:33:50',90,30,23,13,77],
    [90551905,'QMB5230','Spring 2016','18GH',60,0.372,52,'5:33:50',98,0,70,99,19],
    [99685134,'QMB5230','Spring 2016','18GH',94,0.474,55,'5:33:50',43,10,23,12,10],
    [40800202,'QMB5230','Spring 2016','18GH',100,0.996,104,'5:33:50',27,65,42,72,45],
    [68697790,'QMB5230','Spring 2016','18GH',86,0.855,28,'5:33:50',7,27,5,97,81],
    [25353582,'QMB5230','Spring 2016','18GH',86,0.795,106,'5:33:50',61,50,49,42,15],
    [51407795,'ISM6236','Spring 2016',4319,70,0.713,20,'5:33:50',41,96,23,92,23],
    [20748853,'ISM6236','Spring 2016',4319,92,0.482,31,'5:33:50',87,49,3,94,88],
    [34445382,'ISM6236','Spring 2016',4319,76,0.675,141,'5:33:50',98,79,76,23,81],
    [47714695,'ISM6236','Spring 2016',4319,61,0.743,99,'5:33:50',44,37,36,10,98],
    [79407868,'ISM6236','Spring 2016',4319,79,0.848,83,'5:33:50',37,35,64,87,25],
    [88585013,'ISM6236','Spring 2016','4G18',85,0.552,49,'5:33:50',43,45,6,0,16],
    [55373893,'ISM6236','Spring 2016','4G18',98,0.382,139,'5:33:50',57,78,42,0,38],
    [44731231,'ISM6236','Spring 2016','4G18',86,0.293,53,'5:33:50',10,80,77,83,12],
    [37784109,'ISM6236','Spring 2016','4G18',100,0.670,83,'5:33:50',55,6,51,49,87],
    [10421520,'ISM6236','Spring 2016','4G18',67,0.399,115,'5:33:50',99,71,58,39,37],
    [27065340,'ISM6236','Spring 2016','4G18',70,0.659,105,'5:33:50',52,79,58,6,5],
    [95969429,'ISM6236','Spring 2016','4G18',66,0.094,21,'5:33:50',96,78,5,96,10]
];

define(['jquery', 'datatable', 'plotly'], function($, dt, plotly) {
    $(document).ready(function() {

        let termMap, sectionMap, courseMap = new Map();
        let courseTermMap, courseTermSectionMap, dataMap = new Map();
        let termKey, courseKey, sectionKey, dataKey;
        let dataRow = null;

        // // // // // // Create maps of courses, terms and sections: // // // // // // // //

        dataKey = 0;

        for (let i = 0; i < studentData.length; i++) {
            courseKey = studentData[i][1];
            termKey = studentData[i][2];
            sectionKey = studentData[i][3];
            dataRow = studentData[i];

            if (courseMap.has(courseKey)) {
                courseTermMap = courseMap.get(courseKey);

                if (courseTermMap.has(termKey)) {
                    courseTermSectionMap = courseTermMap.get(termKey);

                    if (courseTermSectionMap.has(sectionKey)) {
                        dataMap = courseTermSectionMap.get(sectionKey);

                        let ks = [...dataMap.keys()];
                        dataKey = ks[ks.length-1];

                        if (dataMap.has(dataKey)) {
                            dataKey++;
                            dataMap.set(dataKey, dataRow);
                        } else {
                            console.log("Error / Should not happen?");
                        }
                    } else {
                        dataKey = 0;
                        dataMap = new Map();
                        courseTermSectionMap.set(sectionKey, dataMap);
                        dataMap.set(dataKey, dataRow);
                    }
                } else {
                    dataKey = 0;
                    courseTermSectionMap = new Map();
                    dataMap = new Map();
                    courseTermMap.set(termKey, courseTermSectionMap);
                    courseTermSectionMap.set(sectionKey, dataMap);
                    dataMap.set(dataKey, dataRow);
                }
            } else {
                dataKey = 0;
                courseTermMap = new Map();
                courseTermSectionMap = new Map();
                dataMap = new Map();
                courseMap.set(courseKey, courseTermMap);
                courseTermMap.set(termKey, courseTermSectionMap);
                courseTermSectionMap.set(sectionKey, dataMap);
                dataMap.set(dataKey, dataRow);
            }
        }

        console.log(courseMap);

        // // // // // Radio buttons: // // // // // // //

        let courseRadio = $("#courseradio");
        let termRadio = $("#termradio");
        let sectionRadio = $("#sectionradio");

        courseRadio.prop("checked", true);

        let radiobutton  = $('input:radio');

        radiobutton.on('change', function(){
            $('#select-all').trigger('click');

            loadData();
            table.clear();
            table.rows.add(tableData);
            table.draw();

            if(this.id === "courseradio") {
                $('#select-all').trigger('click');
                termRadio.checked = false;
                sectionRadio.checked = false;

                table.column(2).visible(false);
                table.column(3).visible(false);

                $('#terms').empty();
                $('#sections').empty();

            } else if (this.id === "termradio") {
                $('#select-all').trigger('click');
                courseRadio.checked = false;
                sectionRadio.checked = false;

                table.column(2).visible(true);
                table.column(3).visible(false);

                $('#terms').empty();
                $('#sections').empty();
                termsMenu();

            } else if (this.id === "sectionradio") {
                $('#select-all').trigger('click');
                termRadio.checked = false;
                courseRadio.checked = false;

                table.column(2).visible(true);
                table.column(3).visible(true);

                $('#terms').empty();
                termsMenu();
                sectionsMenu();
            }

            reloadGraphs();

        });

        // // // // // Generate table data from the incoming student data: // // // // // // //
        let numOfStudents = 0, scores = [], activityIdxs = [], logins = [], time = [], satisf = 0, drop = 0
        let incomplete = 0, pageViews = [], fileViews = [], submissions = [], conversations = [], discussions = [];

        loadData();

        function loadData() {
            tableData = [];
            let courses = [...courseMap.keys()];
            for(let i = 0; i < courses.length; i++) {
                let course = courses[i];
                if (courseRadio.is(':checked')) {
                    tableData.push(getCourseValues(course));
                }
                let terms = [...courseMap.get(courses[i]).keys()];
                for (let r = 0; r < terms.length; r++) {
                    let term = terms[r];
                    if (termRadio.is(':checked')) {
                        tableData.push(getTermValues(courseMap, course, term));
                    }
                    let sections = [...courseMap.get(courses[i]).get(terms[r]).keys()];
                    for (let j = 0; j < sections.length; j++) {
                        let section = sections[j];
                        if (sectionRadio.is(':checked')) {
                            tableData.push(getSectionValues(courseMap, course, term, section));
                        }
                    }
                }
            }
            // console.log(tableData);
        }

        function getSectionValues(courseMap, course, term, section) {
            let row = [];
            numOfStudents = 0, scores = [], activityIdxs = [], logins = [];
            time = [], satisf = 0, drop = 0, incomplete = 0;
            pageViews = [], fileViews = [], submissions = [], conversations = [], discussions = [];

            let count = [...courseMap.get(course).get(term).get(section).keys()];
            for (let k = 0; k < count.length; k++) {
                let dataRow = courseMap.get(course).get(term).get(section).get(k);
                numOfStudents++;
                getValuesFromDataRow(dataRow);
            }

            row = pushToRow(course, term, section, scores, activityIdxs, logins, pageViews, fileViews, submissions, conversations, discussions);

            return row;
        }

        function getTermValues(courseMap, course, term) {
            let row = [];
            numOfStudents = 0, scores = [], activityIdxs = [], logins = [];
            time = [], satisf = 0, drop = 0, incomplete = 0;
            pageViews = [], fileViews = [], submissions = [], conversations = [], discussions = [];

            let sections = [...courseMap.get(course).get(term).keys()];
            for (let j = 0; j < sections.length; j++) {
                let section = sections[j];
                let count = [...courseMap.get(course).get(term).get(section).keys()];
                for (let k = 0; k < count.length; k++) {
                    let dataRow = courseMap.get(course).get(term).get(section).get(k);
                    numOfStudents++;
                    getValuesFromDataRow(dataRow);
                }
            }

            let section = "";

            row = pushToRow(course, term, section, scores, activityIdxs, logins, pageViews, fileViews, submissions, conversations, discussions);

            return row;
        }

        function getCourseValues(course) {
            let row = [];
            numOfStudents = 0, scores = [], activityIdxs = [], logins = [];
            time = [], satisf = 0, drop = 0, incomplete = 0;
            pageViews = [], fileViews = [], submissions = [], conversations = [], discussions = [];

            let terms = [...courseMap.get(course).keys()];

            let term = "";
            let section = "";

            for (let i = 0; i < terms.length; i ++) {
                let sections = [...courseMap.get(course).get(terms[i]).keys()];
                for(let j = 0; j < sections.length; j++) {
                    let count = [...courseMap.get(course).get(terms[i]).get(sections[j]).keys()];
                    for(let k = 0; k < count.length; k++) {
                        let dataRow = courseMap.get(course).get(terms[i]).get(sections[j]).get(k);
                        numOfStudents++;
                        getValuesFromDataRow(dataRow);
                    }
                }
            }

            row = pushToRow(course, term, section, scores, activityIdxs, logins, pageViews, fileViews, submissions, conversations, discussions);

            return row;
        }

        function pushToRow(course, term, section, scores, activityIdxs, logins, pageViews, fileViews, submissions, conversations, discussions) {
            let highScore = Math.max(...scores);
            let lowScore = Math.min(...scores);
            let average = round(avg(scores), 1);
            let mdn = median(scores);
            let md = mode(scores);
            let ai = round(avg(activityIdxs), 3);
            let logs = round(avg(logins), 1);
            let tm = time[0]; // using the first time value until we know what format it will be
            let pv = round(avg(pageViews), 1);
            let fv = round(avg(fileViews), 1);
            let sb = round(avg(submissions), 1);
            let cv = round(avg(conversations), 1);
            let ds = round(avg(discussions), 1);
            let drop = 2;
            let incomplete = 5;
            // If there are multiple modes return a string of them
            if (md.length > 1) {
                md = "N/A";
            } else {
                md = parseInt(md.toString());
            }
            let row = [];

            row.push(""); // 0
            row.push(course); // 1
            row.push(term); // 2
            row.push(section); // 3
            row.push(numOfStudents); // 4
            row.push(highScore); // 5
            row.push(lowScore); //6
            row.push(average); // 7
            row.push(mdn); // 8
            row.push(md); // 9
            row.push(satisf); // 10
            row.push(numOfStudents - satisf); // 11
            row.push(drop); // Drop // 12
            row.push(incomplete); // Incomplete // 13
            row.push(ai); // 14
            row.push(logs); // 15
            row.push(tm); // 16
            row.push(pv); // 17
            row.push(fv); // 18
            row.push(sb); // 19
            row.push(cv); // 20
            row.push(ds); // 21

            return row;
        }

        function getValuesFromDataRow(dataRow) {
            scores.push(dataRow[4]);
            activityIdxs.push(dataRow[5]);
            logins.push(dataRow[6]);
            time.push(dataRow[7]);
            if (dataRow[4] > 60) {
                satisf++;
            }
            pageViews.push(dataRow[8]);
            fileViews.push(dataRow[9]);
            submissions.push(dataRow[10]);
            conversations.push(dataRow[11]);
            discussions.push(dataRow[12]);
        }

        // // // // Generate menu items: // // // // // // //

        let checkbox = $('input:checkbox');

        function termsMenu() {
            $('#terms').append("<label>Terms</label>");
            $('#terms').append('<hr>');
            $('#terms').append("<label><input type='checkbox' name='SelectAll' class='selectAll' id='Select_All_Term' value='Select_All_Term'></label>Select All<br/>");

            termMap = new Map();
            for(let i = 0; i < studentData.length; i++) {
                termKey = studentData[i][2];
                if (termMap.has(termKey)) {
                    sectionMap = termMap.get(termKey);
                } else {
                    sectionMap = new Map();
                    termMap.set(termKey, sectionMap);
                }
            }
            termMap = new Map([...termMap.entries()].sort());
            termMap.forEach(getTermKeys);

            $( '#terms .selectAll' ).on('click', function () {
                $( '#terms input[type="checkbox"]' ).prop('checked', this.checked)
            });

        }

        function sectionsMenu() {
            $('#sections').append("<label>Sections</label>");
            $('#sections').append('<hr>');
            $('#sections').append("<label><input type='checkbox' name='SelectAll' class='selectAll' id='Select_All_Section' value='Select_All_Section'></label>Select All<br/>");

            for(let i = 0; i < studentData.length; i++) {
                sectionKey = studentData[i][3];
                if (sectionMap.has(sectionKey)) {

                } else {
                    dataRow = studentData[i];
                    sectionMap.set(sectionKey, dataRow);
                }
            }
            sectionMap = new Map([...sectionMap.entries()].sort());
            sectionMap.forEach(getSectionKeys);

            $( '#sections .selectAll' ).click( function () {
                $( '#sections input[type="checkbox"]' ).prop('checked', this.checked)
            });

        }

        courseMap = new Map([...courseMap.entries()].sort());
        courseMap.forEach(getCourseKeys);

        function getCourseKeys(value, key) {
            let k = `${key}`;
            let i = k.replace(" ","_");
            $('#courses').append('<input type="checkbox" id="' + i +'" name="Course" value="'+ k +'"/> ' + k + '<br />');
        }

        function getTermKeys(value, key) {
            let k = `${key}`;
            let i = k.replace(" ","_");
            $('#terms').append('<input type="checkbox" id="' + i +'" name="Term" value="'+ k +'" /> ' + k + '<br />');
        }

        function getSectionKeys(value, key) {
            let k = `${key}`;
            let i = k.replace(" ","_");
            $('#sections').append('<input type="checkbox" id="' + i +'" name="Section" value="'+ k +'" /> ' + k + '<br />');
        }

        // // // // // Select All checkboxes in the menu: // // // // // // //

        $( '#courses .selectAll' ).click( function () {
            $( '#courses input[type="checkbox"]' ).prop('checked', this.checked)
        });

        // // // // // DataTable: // // // // // // //

        let table = null;
        drawTable(tableData);
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

        $(document).on('change', 'input[name="Term"]', function() {
            let terms = $('input:checkbox[name="Term"]:checked').map(function () {
                return this.value
            }).get().join('|');
            table.search(terms, true, false, false).draw(false);

            reloadGraphs()
        });

        $(document).on('change', 'input[name="Course"]', function() {
            let courses = $('input:checkbox[name="Course"]:checked').map(function () {
                return this.value
            }).get().join('|');
            table.column(1).search(courses, true, false, false).draw(false);

            reloadGraphs()
        });

        $(document).on('change', 'input[name="Section"]', function() {
            let sections = $('input:checkbox[name="Section"]:checked').map(function () {
                return this.value
            }).get().join('|');
            table.column(3).search(sections, true, false, false).draw(false);

            reloadGraphs()
        });

        $(document).on('change', 'input[name="id[]"]', function() {
            if($(this).is(':checked')) {
                this.value = 1;
            } else {
                this.value = 0;
            }
            reloadGraphs();
        });

        let scoresList = ["High Score", "Low Score", "Average", "Median", "Mode"];

        function reloadGraphs() {
            let children = $('#uf-graphs-container').children();
            if(children.length > 0) {
                for(let i = 0; i < children.length; i++) {
                    let graph = children.get(i).id;
                    let title = graph.replace("_graph", "");

                    if(title === "scores") {
                        let column = getColumn(currentTraces[0]);
                        if(drawGraph("scores_graph",column,currentTraces[0])) {
                            for(let i = 1; i < currentTraces.length; i++) {
                                let column = getColumn(currentTraces[i]);
                                if(!addTrace("scores_graph", column, currentTraces[i])) {
                                    let idx = currentTraces.indexOf(currentTraces[i]);
                                    let id = "#" + currentTraces[i];
                                    currentTraces.splice(idx, 1);
                                    $(id).prop('checked',false);
                                }
                            }
                        }
                    } else {
                        let column = getColumn(title);
                        drawGraph(graph, column, title);
                    }
                }
            }
        }

        // create graph

        let currentTraces = [];

        checkbox.on('change', function() {
            $('input:checkbox[name="data"]:checked').map(function () {
                let graphContainer = $('#uf-graphs-container');
                let column = getColumn(this.value);

                if (scoresList.includes(this.value)) {
                    if(document.getElementById("scores_graph") == null) {
                        let div = document.createElement("div");
                        div.id = "scores_graph";
                        div.name = 'uf-graphs';
                        graphContainer.append(div);

                        if(drawGraph(div, column, this.value)) {
                            currentTraces.push(this.value);
                        }
                    } else {
                        let div = document.getElementById("scores_graph");
                        console.log("addTrace");
                        if(!currentTraces.includes(this.value)) {
                            if(addTrace(div, column, this.value)) {
                                currentTraces.push(this.value);
                            } else {
                                let id = "#" + this.value;
                                $(id).prop('checked',false);
                                if(currentTraces.includes(this.value)) {
                                    let idx = currentTraces.indexOf(this.value);
                                    currentTraces.splice(idx, 1);
                                }

                            }
                        }
                    }
                } else {
                    if (document.getElementById(this.value + "_graph") == null) {
                        let div = document.createElement("div");
                        div.id = this.value + "_graph";
                        div.name = 'uf-graphs';
                        graphContainer.append(div);

                        drawGraph(div, column, this.value);
                    }
                }
            });
        });

        // hide graph when deselected checkbox
        $('input:checkbox[name="data"]').on("click", function () {
            if ($(this).is(":not(:checked)")) {
                if(scoresList.includes(this.value)) {
                    if(currentTraces.length > 1) {
                        let idx = currentTraces.indexOf(this.value);
                        console.log(idx);
                        plotly.deleteTraces("scores_graph", idx);
                        currentTraces.splice(idx, 1);
                        console.log(currentTraces);
                    } else {
                        document.getElementById("scores_graph").remove();
                        arr = [];
                    }
                } else {
                    let id = this.value + "_graph";
                    document.getElementById(id).remove();
                    arr = [];
                }
            }
        });

        function addTrace(div, column, traceName) {

            let y = getYaxis(column);

            let trace = {
                x: getXaxis(),
                y: y,
                name: traceName,
                title: ""
            };

            let data = [trace];

            if(!y.includes("N/A")) {
                plotly.addTraces(div, data);
                return true;
            } else {
                return false;
            }
        }

        function drawGraph(div, column, title) {

            let y = getYaxis(column);
            let name = title;

            if(scoresList.includes(title)) {
                maxYaxisValue = 110;
                title = "";
            }

            let trace = {
                x: getXaxis(),
                y: y,
                type: 'line',
                name: name
            };

            let data = [trace] ;

            let layout = {
                title: title,
                xaxis: {
                    title: '',
                    automargin: true
                },
                yaxis: {
                    range: [0, maxYaxisValue],
                    title: title,
                    automargin: true
                },
            };

            if(!y.includes("N/A")) {
                plotly.newPlot(div, data, layout);
                return true;
            } else {
                return false;
            }
        }

        let termsChecked = 0;
        let sectionsChecked = 0;
        let rows = 0;
        let yaxis = [];
        let xaxis = [];
        let maxYaxisValue = 500;
        let sums = [4,10,11,12,13];
        let avgs = [13,14,15,16,17,18,19,20,21,7];
        let arr = [];

        // // // // // Accesory methods: // // // // // // //

        function getYaxis(column) {
            rows = table.page.info().recordsDisplay;
            termsChecked = $('#terms').find(':checked').length;
            sectionsChecked = $('#sections').find(':checked').length;
            arr = [];
            if(sectionRadio.is(':checked')) {
                yaxis = getSectionYaxis(column);
            } else if (termRadio.is(':checked')) {
                yaxis = getTermYaxis(column);
            } else {
                yaxis = getCourseYaxis(column);
            }
            maxYaxisValue = Math.max.apply(Math, yaxis) + 10;
            // console.log(yaxis);
            return yaxis;
        }

        function getCourseYaxis(column) {
            yaxis = [];

            let previousCourse = "";
            let currentCourse = "";
            let value = 0;

            for (let row = 0; row < rows; row++) {
                let checkboxVal = table.context[0].nTBody.childNodes[row].childNodes[0].childNodes[0].getAttribute('value');
                if(checkboxVal > 0) {

                    if (row > 0) {
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row - 1];
                    } else {
                        // First row
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row];
                    }
                    currentCourse = table.columns(1, {search: 'applied'}).data()[0][row];

                    if (previousCourse === currentCourse) { // if the course is the same
                        arr.push(table.columns(column, {search: 'applied'}).data()[0][row]);
                        value = arr[0];
                        if (row === (rows - 1) || row === 0) { // last or first row
                            yaxis.push(value);
                        }
                    } else { // if course changes
                        arr = [];
                        arr.push(table.columns(column, {search: 'applied'}).data()[0][row]);
                        value = table.columns(column, {search: 'applied'}).data()[0][row];
                        yaxis.push(value);
                    }
                }
            }
            console.log(yaxis);
            return yaxis;
        }

        function getCourseXaxis() {
            xaxis = [];

            let previousCourse = "";
            let currentCourse = "";
            let course = "";

            for (let row = 0; row < rows; row ++) {
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
            console.log(xaxis);
            return xaxis;
        }

        function getTermYaxis(column) {
            yaxis = [];

            let previousCourse = "";
            let currentCourse = "";
            let previousTerm = "";
            let currentTerm = "";
            let value = 0;

            for (let row = 0; row < rows; row ++) {

                let checkboxVal = table.context[0].nTBody.childNodes[row].childNodes[0].childNodes[0].getAttribute('value');

                if (checkboxVal > 0) {

                    if (row > 0) {
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row - 1];
                        previousTerm = table.columns(2, {search: 'applied'}).data()[0][row - 1];
                    } else {
                        previousCourse = table.columns(1, {search: 'applied'}).data()[0][row];
                        previousTerm = table.columns(2, {search: 'applied'}).data()[0][row];
                    }
                    currentCourse = table.columns(1, {search: 'applied'}).data()[0][row];
                    currentTerm = table.columns(2, {search: 'applied'}).data()[0][row];

                    if (previousCourse === currentCourse && previousTerm === currentTerm) {
                        arr.push(table.columns(column, {search: 'applied'}).data()[0][row]);
                        value = getValue(column, arr);
                        if (row === (rows - 1)) {
                            yaxis.push(value);
                        }
                    } else {
                        arr = [];
                        arr.push(table.columns(column, {search: 'applied'}).data()[0][row]);
                        yaxis.push(value);
                        value = table.columns(column, {search: 'applied'}).data()[0][row];
                    }
                }
            }

            yaxis.push(value);
            arr = [];
            return yaxis;
        }

        function getSectionYaxis(column) {
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
            // console.log(xaxis);
            return xaxis;
        }

        function getSectionXaxis() {
            xaxis = [];
            for (let row = 0; row < rows; row++) {
                let course = table.columns(1, {search: 'applied'}).data()[0][row];
                let term = table.columns(2, {search: 'applied'}).data()[0][row];
                let section = table.columns(3, {search: 'applied'}).data()[0][row];
                xaxis.push(course + " - " + term + " - " + section);
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

            return xaxis;
        }

        function mode(numbers) {
            // as result can be bimodal or multi-modal,
            // the returned result is provided as an array
            // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
            let modes = [], count = [], i, number, maxIndex = 0;

            for (i = 0; i < numbers.length; i += 1) {
                number = numbers[i];
                count[number] = (count[number] || 0) + 1;
                if (count[number] > maxIndex) {
                    maxIndex = count[number];
                }
            }

            for (i in count)
                if (count.hasOwnProperty(i)) {
                    if (count[i] === maxIndex) {
                        modes.push(Number(i));
                    }
                }

            return modes;
        }

        function median(numbers) {
            if(numbers.length === 0) return 0;

            numbers.sort(function(a,b){
                return a-b;
            });

            var half = Math.floor(numbers.length / 2);

            if (numbers.length % 2)
                return numbers[half];

            return (numbers[half - 1] + numbers[half]) / 2.0;
        }

        function sum(numbers) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i ++) {
                sum += numbers[i];
            }
            return sum;
        }

        function avg(numbers) {
            let avg = 0;
            avg = sum(numbers) / numbers.length;
            return avg;
        }

        function getValue(column, arr) {
            let value = 0;
            if(sums.indexOf(column) !== -1) {
                value = sum(arr);
            } else if (avgs.indexOf(column) !== -1) {
                value = avg(arr);
            } else if (column === 5) {
                value = Math.max(...arr);
            } else if (column === 6) {
                value = Math.min(...arr);
            } else if (column === 8) {
                // Median
                value = median(arr);
            } else if (column === 9) {
                // Mode
                value = mode(arr);
            }
            return value;
        }

        function round(number, dp) {
            // number to be rounded and the decimal point
            return parseFloat(number.toFixed(dp));
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
                case 'High Score':
                    column = 5;
                    break;
                case 'Low Score':
                    column = 6;
                    break;
                case 'Average':
                    column = 7;
                    break;
                case 'Median':
                    column = 8;
                    break;
                case 'Mode':
                    column = 9;
                    break;
                case '# Satisf.':
                    column = 10;
                    break;
                case '# Unsatisf.':
                    column = 11;
                    break;
                case '# Drop':
                    column = 12;
                    break;
                case '# Incomplete':
                    column = 13;
                    break;
                case 'Activity Index':
                    column = 14;
                    break;
                case 'Logins':
                    column = 15;
                    break;
                case 'Avg Time':
                    column = 16;
                    break;
                case 'Avg # Page Views':
                    column = 17;
                    break;
                case 'Avg # File Views':
                    column = 18;
                    break;
                case 'Avg # Submissions':
                    column = 19;
                    break;
                case 'Avg # Conversations':
                    column = 20;
                    break;
                case 'Avg # Discussions':
                    column = 21;
                    break;
            }
            return column;
        }
    });
});


