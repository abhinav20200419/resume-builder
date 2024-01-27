
var cv_template_id=getVariable_cv();
console.log('file reloaded');
console.log(cv_template_id);
/* 
var id_html = document.getElementsByClassName('template_id');
console.log(id_html);
console.log(id_html.textContent); */


function setVariable_cv(value) {
    localStorage.setItem('cv_template_id', value);
}


function getVariable_cv() {
    console.log("this is "+localStorage.getItem('cv_template_id'));
    return localStorage.getItem('cv_template_id');
}

function choose_template_cv(i)
{
    setVariable_cv(i);
    console.log(cv_template_id);
    console.log("\ni is "+i+"\n");
    window.open("cover-letter.html", '_self');
}

var icons_list = {
  name_span: "",
  email_span: "fa-solid fa-envelope",
  jobTitle_span: "",
  phone_span: "fa-solid fa-phone",
  address_span: "fa-solid fa-location-dot",
  nationality_span: "fas  fa-flag ",
  passport_span: "fa-solid fa-passport",
  martial_status_span: "fa-solid fa-heart",
  military_service_span: "fa-solid fa-person-military-rifle",
  driving_license_span: "fa-solid fa-car",
  gender_span: "fa-solid fa-user",
  dob_span: "fa-solid fa-calendar-days",
};

var template0 = {
    
}

var template1 = {
    linebr : {
        br_height : "tw-h-1",
        br_width : "tw-w-full",
        br_color : "tw-bg-black",
        br_margin : "tw-mx-2",
        br_padding : "",
        br_extra : "",
    },
    left : {
        span_heading_fontSize : "tw-text-xl",
        span_heading_fontWeight : "tw-font-bold",
        span_heading_fontColor : "tw-text-black",
        span_heading_fontFamily : "",
        span_heading_fontStyle : "",
        span_heading_margin : "tw-mx-2 tw-my-1",
        span_heading_padding : "",
        span_heading_extra : "",

        span_name_fontSize : "tw-text-4xl",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black",
        span_name_fontFamily : "tw-font-mono",
        span_name_fontStyle : "tw-font-italic",
        span_name_margin : "tw-my-1",
        span_name_padding : "",
        span_name_extra : "",

        span_jobtitle_fontSize : "tw-text-2xl",
        span_jobtitle_fontWeight : "",
        span_jobtitle_fontColor : "tw-text-black",
        span_jobtitle_fontFamily : "tw-font-mono",
        span_jobtitle_fontStyle : "",
        span_jobtitle_margin : "tw-my-1",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",
        
        span_fontSize : "tw-text-sm",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontFamily : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2",
        span_extra : "col",
    },
    right : {
        span_heading_fontSize : "tw-text-xl",
        span_heading_fontWeight : "tw-font-bold",
        span_heading_fontColor : "tw-text-black",
        span_heading_fontFamily : "",
        span_heading_fontStyle : "",
        span_heading_margin : "tw-mx-2 tw-my-1",
        span_heading_padding : "",
        span_heading_extra : "",

        span_name_fontSize : "tw-text-4xl",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black",
        span_name_fontFamily : "tw-font-mono",
        span_name_fontStyle : "tw-font-italic",
        span_name_margin : "tw-my-1",
        span_name_padding : "",
        span_name_extra : "",

        span_jobtitle_fontSize : "tw-text-2xl",
        span_jobtitle_fontWeight : "",
        span_jobtitle_fontColor : "tw-text-black",
        span_jobtitle_fontFamily : "tw-font-mono",
        span_jobtitle_fontStyle : "",
        span_jobtitle_margin : "tw-my-1",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",
        
        span_fontSize : "tw-text-sm",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontFamily : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2",
        span_extra : "col",
    }
}
var template2 = {
    
}
var template_class_list = [
    template0,
    template1,
    template2
]

function updateSpan(input, cvDivId) {
  console.log("update span called\n");
  cvDivId +=getVariable_cv();
  console.log("template id is "+cv_template_id+"\n");

  var inputValue = input.value;
  var inputId = input.id;
  var inputName = input.name;
  inputName = inputName.slice(0, -2);
  console.log(inputName);
  console.log(cvDivId);
  //console.log("parent Element Div id is "+document.getElementById(cvDivId).parentElement.id);
  var spanId = inputId + "_span";

  //var cvDivId_parentId = document.getElementById(cvDivId).parentElement.id;
  console.log(spanId);
  var existingSpan = document.getElementById(spanId);

  if (!existingSpan) {
    console.log("span doesnt exists");
    var newDiv = document.createElement("div");
    var newSpan = document.createElement("span");
    var newIcon = document.createElement("i");
    newIcon.className = icons_list[spanId];
    newDiv.id = inputId + "_div";
    newDiv.appendChild(newIcon);
    newDiv.appendChild(newSpan);
    newSpan.id = spanId;

    newSpan.textContent = inputValue;
    console.log(cvDivId);
    var parentDiv = document.getElementById(cvDivId);
    parentDiv.appendChild(newDiv);
    /* 
          document.getElementById(cvDivId).appendChild(newDiv); */
    if (inputName == "personal_details") {
      if (spanId == "name_span") {
        newSpan.className = "tw-mx-0 items-center justify-center";
        newSpan.className +=
          " tw-container-fluid tw-bg-blue-100 w-100 fw-bold tw-text-xl my-1 ";
      } else if (spanId == "job_title_span") {
        newSpan.className = "tw-mx-2";
        newSpan.className += "text-black tw-bg-blue-100 tw-text-2xl my-1";
      } else {
        newDiv.className = "col";
        newSpan.className = "tw-mx-2";
      }
    } else {
      newDiv.className = "col";
      newSpan.className = "tw-mx-2 tw-text-sm";
      //document.getElementById().appendChild(newDiv);
    }

    document.getElementById(cvDivId).appendChild(newDiv);
    console.log(document.getElementById(cvDivId));
  } else {
    console.log("span exists");
    renderText(existingSpan);
  }

  function renderText(span) {
    newDiv = document.getElementById(inputId + "_div");
    console.log(newDiv);
    span.textContent = inputValue;
    console.log(cvDivId);
    var parentDiv = document.getElementById(cvDivId);
    parentDiv.appendChild(newDiv);
    /* 
          document.getElementById(cvDivId).appendChild(newDiv); */
    if (inputName == "personal_details") {
      if (spanId == "name_span") {
        span.className = "tw-mx-0";
        span.className +=
          " tw-container-fluid tw-bg-blue-100 w-100 fw-bold tw-text-xl my-1";
      } else if (spanId == "job_title_span") {
        span.className = "tw-mx-2";
        span.className += "text-black tw-bg-blue-100 tw-text-2xl my-1";
      } else {
        newDiv.className = "col";
        span.className = "tw-mx-2";
      }
    }
  }
  /* 
                  if(existingSpan)
                  {
                      console.log('span exists');
                      newSpan.textContent = inputValue;
                      document.getElementById(cvDivId).appendChild(newDiv);
                      if (inputName == 'personal_details') {
                          if (spanId == "name_span") {
                              newSpan.className = 'tw-mx-2';
                              newSpan.className += " tw-container-fluid bg-info w-100 fw-bold tw-text-4xl my-1";
                          } else if (spanId == 'job_title_span') {
                              newSpan.className = 'tw-mx-2';
                              newSpan.className += "text-black bg-info tw-text-2xl my-1";

                          } else {

                              newDiv.className = 'col';
                              newSpan.className = 'tw-mx-2';
                          }
                      }
                  } */

  /* 
                  if (existingSpan) {
                      existingSpan.textContent = inputValue;
                      console.log('span didnt existed');
                  } else {
                      console.log('span already existed');
                      var newDiv = document.createElement('div');
                      var newSpan = document.createElement('span');
                      var newIcon = document.createElement('i');
                      newIcon.className = icons_list[spanId];
                      newDiv.appendChild(newIcon);
                      newDiv.appendChild(newSpan);
                      newSpan.id = spanId;
                      newSpan.textContent = inputValue;



                      console.log(newIcon);

                      if (inputName == 'personal_details') {
                          if (spanId == "name_span") {
                              newSpan.className = 'tw-mx-2';
                              newSpan.className += " tw-container-fluid bg-info w-100 fw-bold tw-text-4xl my-1";
                          } else if (spanId == 'job_title_span') {
                              newSpan.className = 'tw-mx-2';
                              newSpan.className += "text-black bg-info tw-text-2xl my-1";

                          } else {

                              newDiv.className = 'col';
                              newSpan.className = 'tw-mx-2';
                          }
                          console.log(newDiv);
                          document.getElementById('cv_personal_details').appendChild(newDiv);
                      } else if (inputName == "education") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_education').appendChild(headingSpan);
                              document.getElementById('cv_education').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_education').appendChild(newDiv);

                      } else if (inputName == "projects") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_projects').appendChild(headingSpan);
                              document.getElementById('cv_projects').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_projects').appendChild(newDiv);

                      } else if (inputName == "languages") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_languages').appendChild(headingSpan);
                              document.getElementById('cv_languages').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_languages').appendChild(newDiv);

                      } else if (inputName == "awards") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_awards').appendChild(headingSpan);
                              document.getElementById('cv_awards').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_awards').appendChild(newDiv);

                      } else if (inputName == "courses") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_courses').appendChild(headingSpan);
                              document.getElementById('cv_courses').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_courses').appendChild(newDiv);

                      } else if (inputName == "publications") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_publications').appendChild(headingSpan);
                              document.getElementById('cv_publications').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_publications').appendChild(newDiv);

                      } else if (inputName == "profile") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_profile').appendChild(headingSpan);
                              document.getElementById('cv_profile').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_profile').appendChild(newDiv);

                      } else if (inputName == "references") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_references').appendChild(headingSpan);
                              document.getElementById('cv_references').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_references').appendChild(newDiv);

                      } else if (inputName == "organization") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('cv_organization').appendChild(headingSpan);
                              document.getElementById('cv_organization').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('cv_organization').appendChild(newDiv);

                      }
                  } */
}

/* const inputElement = document.getElementById("name");
  const spanElement = document.getElementById('_name');

  const spanElementq = document.getElementById('name1');
  let div_list = document.getElementById('personal_details')
  inputElement.addEventListener('input', function() {
      spanElement.textContent = inputElement.value;
      spanElementq.textContent = inputElement.value;

      let span1 = document.createElement('span');
      span1.id = "namee";
      span1.class="text-white";
      span1.textContent = inputElement.value;
      span1.style = "background-color:#000;";
      div_list.appendChild(span1);
  }); 
  console.log(document.getElementById('namee'));
*/

/* $(document).ready(function(){
      $('#inputText').on('input', function()
      {
          var data = $(this).val();
          $('#outputText').val(data);
      });
  }); */





  window.onload = function(){
    document.getElementById('download_pdf').addEventListener("click", ()=>{
        console.log('download clicked');
        const template_cv = document.getElementById('template'+getVariable_cv());
        console.log('template'+getVariable_cv());
        console.log(template_cv);
        console.log(window);
        html2pdf(template_cv).save();
    })
  }