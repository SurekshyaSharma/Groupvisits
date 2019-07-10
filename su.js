// Do some stuff when page hmtl page is launched
$(document).ready(

    function showAvaialableVisitDays() {

        var groupVisit_SalesForce_API = 'https://stthomas.force.com/applicantportal/services/apexrest/usteventfeed?eventId=a3s0a000000Auzz&feedType=eventList&viewStart=2019-6-3+00:00:00&viewEnd=2020-5-29+24:59:59';

        $.ajax({

            type: "GET",

            url: groupVisit_SalesForce_API,

            dataType: "jsonP",

            error: function (e) {
                alert("An error occurred while processing API calls");
                console.log("API call Failed: ", e);
            },

            success: function (data) {

                console.log('Data: ', data);
                
                // sort data by date
                _sortedData = data.sort(function(a, b) { 
                    // * - 1 : get a reverse sort
                    return (new Date(b.start) - new Date(a.start)) * - 1; 
                });
        
                $.each(_sortedData, function (index, value) {
                  
                    // get Event dates for sign up
                    var _date = new Date(value.start);
                    var month = _date.getMonth();

                    var _eventUrl = value.eventUrl;
                    var _title = value.title;

                    console.log('Title: ', _title);
                    

                    var partsArray = _title.split('-');
                    console.log(partsArray);
                    console.log(partsArray[1],  partsArray[2]);
                
                         
          
                    if(month > 1 && month < 5){
                       $('.showSignUp').show();
                        $('#spring').append(
                        
                            '<div class="row">' +
                                '<div class="left">' +
                                    '<p style="display: inline; float: left;">' +
                                        '<p class="time">' +
                                            '<strong>' + partsArray[1] + ' - ' + partsArray[2] + '</strong>' +
                                        '</p>' +
                                    '</p>' +
                                '</div>' +
    
                                '<div class="right">' +
                                    '<p style="margin: 0px 0px 0px 15px!Important; display: inline;">' +
                                        '<a href="' + _eventUrl + '" target="_blank" style="font-weight: bold; color: #9e28b5;">' +
                                            '<button><span>Register </span></button>' +
                                        '</a>' +
                                    '</p>' +
                                '</div>' +
                            '</div>'
                        );
    
                        }
                 else if(month > 4 && month < 8){
                    $('#summer').show();
                $('#summer').append(
                    '<div class="row">' +
                        '<div class="left">' +
                            '<p style="display: inline; float: left;">' +
                                '<p class="time">' +
                                    '<strong>' + partsArray[1] + ' - ' + partsArray[2] + '</strong>' +
                                '</p>' +
                            '</p>' +
                        '</div>' +

                        '<div class="right">' +
                            '<p style="margin: 0px 0px 0px 15px!Important; display: inline;">' +
                                '<a href="' + _eventUrl + '" target="_blank" style="font-weight: bold; color: #9e28b5;">' +
                                    '<button><span>Register </span></button>' +
                                '</a>' +
                            '</p>' +
                        '</div>' +
                    '</div>'
                );

                }
                else if(month > 7 && month < 11){
                    $('#fall').show();

                    $('#fall').append(
                        '<div class="row">' +
                        '<div class="left">' +
                            '<p style="display: inline; float: left;">' +
                                '<p class="time">' +
                                    '<strong>' + partsArray[1] + ' - ' + partsArray[2] + '</strong>' +
                                '</p>' +
                            '</p>' +
                        '</div>' +

                            '<div class="right">' +
                                '<p style="margin: 0px 0px 0px 15px!Important; display: inline;">' +
                                    '<a href="' + _eventUrl + '" target="_blank" style="font-weight: bold; color: #9e28b5;">' +
                                        '<button><span>Register </span></button>' +
                                    '</a>' +
                                '</p>' +
                            '</div>' +
                        '</div>'
                    );
                }
                else if (month == 11 || (month >= 0 && month < 2)) {
                    $('#winter').show();

                    $('#winter').append(
                        
                        '<div class="row">' +
                            '<div class="left">' +
                                '<p style="display: inline; float: left;">' +
                                    '<p class="time">' +
                                        '<strong>' + partsArray[1] + ' - ' + partsArray[2] + '</strong>' +
                                    '</p>' +
                                '</p>' +
                            '</div>' +

                            '<div class="right">' +
                                '<p style="margin: 0px 0px 0px 15px!Important; display: inline;">' +
                                    '<a href="' + _eventUrl + '" target="_blank" style="font-weight: bold; color: #9e28b5;">' +
                                        '<button><span>Register </span></button>' +
                                    '</a>' +
                                '</p>' +
                            '</div>' +
                        '</div>'
                    );
                }
                
             });

            } // end:  Ajax success API call

        }); // end: of Ajax call

    } // end: showEvent function

); // end: document.ready()
