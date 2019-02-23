$(document).ready(function () {

    var json = [
    {
        "ID": "james.fernandes",
        "Name": "James Fernandes"
    },
    {
        "ID": "vaibhav.s.suresh",
        "Name": "Vaibhav More"
    },
    {
        "ID": "vaibhav.c.joshi",
        "Name": "Vaibhav Joshi"
    },
    {
        "ID": "ashish.waman",
        "Name": "Ashish Waman"
    },
    {
        "ID": "sanjay.rohra",
        "Name": "Sanjay Rohra"
    },
    {
        "ID": "pratik.sakate",
        "Name": "Pratik Sakate"
    },
    {
        "ID": "neelam.d.singh",
        "Name": "Neelam D. Singh"
    },
    {
        "ID": "nikita.yadav",
        "Name": "Nikita Yadav"
    },
    {
        "ID": "jayprakash.v.chauhan",
        "Name": "Jayprakash V. Chauhan"
    },
    {
        "ID": "yogesh.jiandani",
        "Name": "Yogesh Jiandani"
    },
    {
        "ID": "rutuja.dilip.kankale",
        "Name": "Rutuja Dilip Kankale"
    },
    {
        "ID": "shambhu.hiralal.das",
        "Name": "Shambhu Hiralal Das Jiandani"
    },
    {
        "ID": "pradnya.kedare",
        "Name": "Pradnya Kedare"
    },
    {
        "ID": "g.m.kumar",
        "Name": "G.M.Kumar"
    },
    {
        "ID": "priyanka.nevrekar",
        "Name": "Priyanka Nevrekar"
    },
    {
        "ID": "vijay.kumar.chanchal",
        "Name": "Vijay Kumar Chanchal"
    },
    {
        "ID": "shubhprakash.s.jha",
        "Name": "Shubhprakash S. Jha"
    },
    {
        "ID": "swapnali.s.mestri",
        "Name": "Swapnali S. Mestri"
    },
    {
        "ID": "shahrukh.shaikh",
        "Name": "Sharukh Shaikh"
    },
    {
        "ID": "swati.warwadekar",
        "Name": "Swati Warwadekar"
    },
    {
        "ID": "gautam.bellare",
        "Name": "Gautam Bellare"
    },
    {
        "ID": "s.c.dubey",
        "Name": "Saurabh Dubey"
    },
    {
        "ID": "ankita.patel",
        "Name": "Ankita Patel"
    },
    {
        "ID": "priyanka.rathod",
        "Name": "Priyanka Rathod"
    },
    {
        "ID": "minakshee.a.soni",
        "Name": "Minakshee A. Soni"
    },
    {
        "ID": "deepika.d.yadav",
        "Name": "Deepika D. Yadav"
    },
    {
        "ID": "riya.bhardwaj",
        "Name": "Riya Bhardwaj"
    },
    {
        "ID": "manohar.chaudhari",
        "Name": "Manohar Chaudhari"
    },
    {
        "ID": "rohan.gosavi",
        "Name": "Rohan Gosavi"
    },
    {
        "ID": "rohit.patgaonkar",
        "Name": "Rohit Patgaonkar"
    },
    {
        "ID": "d.a.varshney",
        "Name": "Divya A. Varshney"
    },
    {
        "ID": "neha.d.vengurlekar",
        "Name": "Neha D. Vengurlekar"
    },
    {
        "ID": "swapnil.dabholkar",
        "Name": "Swapnil Dabholkar"
    },
    {
        "ID": "swapnil.dabholkar",
        "Name": "Swapnil Dabholkar"
    },
    {
        "ID": "vishal.govekar",
        "Name": "Vishal Govekar"
    },
    {
        "ID": "veena.kariappa",
        "Name": "Veena Kariappa"
    },
    {
        "ID": "suresh.lohare",
        "Name": "Suresh Lohare"
    },
    {
        "ID": "bhupendra.rajput",
        "Name": "Bhupendra Rajput"
    },
    {
        "ID": "santosh.shinde",
        "Name": "Santosh Shinde"
    },
    {
        "ID": "vikram.sutar",
        "Name": "Vikram Sutar"
    },
    {
        "ID": "akshay.mudliar",
        "Name": "Akshay Mudliar"
    },
    {
        "ID": "nilesh.dj",
        "Name": "Nilesh Dj"
    },
    {
        "ID": "prasad.gawade",
        "Name": "Prasad Gawade"
    },
    {
        "ID": "zaid.siddiqui",
        "Name": "Zaid Siddiqui"
    },
    {
        "ID": "nisha.gajanan.thakur",
        "Name": "Nisha Gajanan Thakur"
    },
]

    var config = {
    apiKey: "AIzaSyC9BWZ9hUuF5HGfAllvY6vOh5sg169Rs1s",
    authDomain: "sanauto-ec9a3.firebaseapp.com",
    databaseURL: "https://sanauto-ec9a3.firebaseio.com",
    projectId: "sanauto-ec9a3",
    storageBucket: "",
    messagingSenderId: "33960134666"
  };
  firebase.initializeApp(config);

    var database = firebase.database();



        // EXTRACT JSON DATA.
        
            $.each(json, function (index, value) {
                // APPEND OR INSERT DATA TO SELECT ELEMENT.
                $('#sel').append('<option value="'+ value.ID +'">' + value.Name + '</option>');
            });


            //sorting the data 

                var options = $('select.data option');
        var arr = options.map(function(_, o) {
            return {
                t: $(o).text(),
                v: o.value
            };
        }).get();
        arr.sort(function(o1, o2) {
            return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
        });
        options.each(function(i, o) {
            console.log(i);
            o.value = arr[i].v;
            $(o).text(arr[i].t);
        });
        

         $("#wfh").click(function () {
             var isWfmChecked = $("#wfh").is(':checked');
        	 if(isWfmChecked == true){
        	 	$("#datepicker").css("display", "inline-block");
        	 	$(".hours").css("display", "none");
        	 	$("#hrs").css("display", "none");
        	 }
         });

         $("#late").click(function () {
             var isLateChecked = $("#late").is(':checked');
        	 if(isLateChecked == true){
        	 	$("#datepicker").css("display", "inline-block");
        	 	$(".hours").css("display", "inline-block");
        	 	$("#hrs").css("display", "inline-block");
        	 }
         });

         $("#early").click(function () {
             var isLateChecked = $("#early").is(':checked');
             if(isLateChecked == true){
                $("#datepicker").css("display", "inline-block");
                $(".hours").css("display", "inline-block");
                $("#hrs").css("display", "inline-block");
             }
         });

         $("#add").click(function(){
         	var empName = $("#sel option:selected").html();
         	var wfmDate = $("#datepicker").val();
         	var entId = $("#sel").val();
         	var hours = $(".hours").val();
            var earlyHours;
            var datepickerLate;
         	var hrs;
            var hrsEarly;

         	if($("#late").is(':checked') == true){
         		hrs =  $("#hrs").html();
                wfmDate = "";
                datepickerLate = $(".datepickerLate").val();
                earlyHours = "";
                hrsEarly = "";
         	}

            if($("#wfh").is(':checked') == true){
                datepickerLate = "";
                hours = ""
                earlyHours = "";
                hrsEarly = "";
                hrs = "";
            }

            if($("#early").is(':checked') == true){
                hrs = "";
                wfmDate = "";
                datepickerLate = $(".datepickerLate").val();
                hours = "";
                earlyHours = $("#earlyHours").val();
                hrsEarly = $("#hrs").html();
            }

         	// var markup = '<tr><td><input type="checkbox" name="record"></td><td>'+ empName +'</td><td>'+ entId +'</td><td>'+ wfmDate +'</td><td>'+ datepickerLate +'</td><td>'+ hours + ' ' + hrs +'</td><td>'+ earlyHours + ' ' + hrsEarly +'</td></tr>'

         	// $("#tbody").append(markup);

            var employeeName = empName,
            enterpriseID = entId,
            wfh = wfmDate,
            lateEarlyDate = datepickerLate,
            lateHours = hours + ' ' + hrs,
            earlyHours = earlyHours + ' ' + hrsEarly;

            writeNewPost(employeeName, enterpriseID, wfh, lateEarlyDate, lateHours, earlyHours);
         });


        //  $("#delete-row").click(function(){
        //     $("table tbody").find('input[name="record"]').each(function(){
        //     	if($(this).is(":checked")){
        //             var ref = firebase.database().ref();
        //             ref.on("child_added", function(data) {
        //             var a = data.val();
        //             ref.child(data.key).remove();
        //         });
        //             $(this).parents("tr").remove();
        //         }
        //     });
        // });


        $("#export").click(function(e){
        	window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('#divData').html()));
    		e.preventDefault();
        });

        function writeNewPost(employeeName, enterpriseID, wfh, lateEarlyDate, lateHours, earlyHours){
            var postData = {
                employeeName: employeeName,
                enterpriseID: enterpriseID,
                wfh: wfh,
                lateEarlyDate: lateEarlyDate,
                lateHours: lateHours,
                earlyHours: earlyHours
            };

            var newPostKey = database.ref().push();

            newPostKey.set(postData);
        }

        fetchTable();

    });

function fetchTable(){

        var ref = firebase.database().ref();

        ref.on("child_added", function(snapshot,prevChildKey) {
           var data = snapshot.val();
           var empNameFetched = data.employeeName;
           var entIdFetched = data.enterpriseID;
           var wfhFetched = data.wfh;
           var lateEarlyDateFetched = data.lateEarlyDate;
           var lateHoursFetched = data.lateHours;
           var earlyHoursFetched = data.earlyHours;
           var markup = '<tr><td>'+ empNameFetched +'</td><td>'+ entIdFetched +'</td><td>'+ wfhFetched +'</td><td>'+ lateEarlyDateFetched +'</td><td>'+ lateHoursFetched +'</td><td>'+ earlyHoursFetched +'</td></tr>';
           $("#tbody").append(markup);
        }, function (error) {
           console.log("Error: " + error.code);
        });

    }