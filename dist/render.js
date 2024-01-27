
var resume_template_id=getVariable();
console.log('file reloaded');
console.log('-----'+resume_template_id);
/* 
var id_html = document.getElementsByClassName('template_id');
console.log(id_html);
console.log(id_html.textContent); */





function setVariable(value) {
    localStorage.setItem('template_id', value);
}


function getVariable() {
    console.log("this is "+localStorage.getItem('template_id'));
    return localStorage.getItem('template_id');
}

function choose_template(i)
{
    setVariable(i);
    console.log(resume_template_id);
    console.log("\ni is "+i+"\n");
    window.open("resume.html", '_self');
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

  icon_fontSize : " ",
  icon_height : "",
  icon_width : "",
  icon_margin : " ",
  icon_extra : " ",
};


var template0 = {
    common : {
        borderColor : "",
        borderThickness : "",
        fontFamily : "tw-font-serif",
        newDiv_class : " col ",
    },

    linebr : {
        br_height : "tw-h-1 ",
        br_width : "tw-w-2/3 ",
        br_color : "bg-black ",
        br_margin : "tw-mx-1 tw-mb-2 ",
        br_padding : "  ",
        br_extra : "",
    },

    middle : {
       
        backgroundColor : "tw-bg-lime-200 ",

        heading_span_fontSize : "tw-text-xl ",
        heading_span_fontWeight : "tw-font-bold ",
        heading_span_fontColor : "tw-text-black ",
        heading_span_fontStyle : "",
        heading_span_margin : "tw-mx-2 tw-my-1 ",
        heading_span_padding : "",
        heading_span_extra : "",

        span_name_fontSize : "tw-text-2xl ",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black ",
        span_name_fontStyle : "tw-font-italic ",
        span_name_backgroundColor : "tw-blue-100 ",
        span_name_margin : "tw-my-1 tw-mx-2 ",
        span_name_padding : "",
        span_name_extra : "tw-container-fluid ",

        span_jobtitle_fontSize : "tw-text-xl ",
        span_jobtitle_fontWeight : "tw-font-semibold ",
        span_jobtitle_fontColor : "tw-text-black ",
        span_jobtitle_fontStyle : "",
        span_jobtitle_backgroundColor : "tw-blue-100 ",
        span_jobtitle_margin : "tw-my-1 tw-mx-2 ",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",

        
        span_iconlabel_fontSize : "tw-text-sm ",
        span_iconlabel_fontWeight : "tw-font-thin ",
        span_iconlabel_fontColor : "tw-text-black ",
        span_iconlabel_fontStyle : "",
        span_iconlabel_backgroundColor : " ",
        span_iconlabel_margin : " tw-mx-2 ",
        span_iconlabel_padding: "",
        span_iconlabel_extra : " col ",
        
        span_fontSize : "tw-text-xs ",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2 ",
        span_extra : " col ",
    }
}
var template3 = {
    common : {
        borderColor : "",
        borderThickness : "",
        fontFamily : "tw-font-serif",
        newDiv_class : " col ",
    },

    linebr : {
        br_height : "tw-h-1 ",
        br_width : "tw-w-2/3 ",
        br_color : "bg-black ",
        br_margin : "tw-mx-1 tw-mb-2 ",
        br_padding : "  ",
        br_extra : "",
    },

    middle : {
       
        backgroundColor : "tw-bg-lime-200 ",

        heading_span_fontSize : "tw-text-xl ",
        heading_span_fontWeight : "tw-font-bold ",
        heading_span_fontColor : "tw-text-black ",
        heading_span_fontStyle : "",
        heading_span_margin : "tw-mx-2 tw-my-1 ",
        heading_span_padding : "",
        heading_span_extra : "",

        span_name_fontSize : "tw-text-2xl ",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black ",
        span_name_fontStyle : "tw-font-italic ",
        span_name_backgroundColor : "tw-blue-100 ",
        span_name_margin : "tw-my-1 tw-mx-2 ",
        span_name_padding : "",
        span_name_extra : "tw-container-fluid ",

        span_jobtitle_fontSize : "tw-text-xl ",
        span_jobtitle_fontWeight : "tw-font-semibold ",
        span_jobtitle_fontColor : "tw-text-black ",
        span_jobtitle_fontStyle : "",
        span_jobtitle_backgroundColor : "tw-blue-100 ",
        span_jobtitle_margin : "tw-my-1 tw-mx-2 ",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",

        
        span_iconlabel_fontSize : "tw-text-sm ",
        span_iconlabel_fontWeight : "tw-font-thin ",
        span_iconlabel_fontColor : "tw-text-black ",
        span_iconlabel_fontStyle : "",
        span_iconlabel_backgroundColor : " ",
        span_iconlabel_margin : " tw-mx-2 ",
        span_iconlabel_padding: "",
        span_iconlabel_extra : " col ",
        
        span_fontSize : "tw-text-xs ",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2 ",
        span_extra : " col ",
    }
}

var template1 = {
    common : {
        borderColor : "",
        borderThickness : "",
        fontFamily : "tw-font-serif",
    },

    linebr : {
        br_height : "tw-h-1 ",
        br_width : "tw-w-2/3 ",
        br_color : "bg-black ",
        br_margin : "tw-mx-1 tw-mb-2 ",
        br_padding : "  ",
        br_extra : "",
    },

    left : {
       
        backgroundColor : "tw-bg-lime-200 ",

        heading_span_fontSize : "tw-text-xl ",
        heading_span_fontWeight : "tw-font-bold ",
        heading_span_fontColor : "tw-text-black ",
        heading_span_fontStyle : "",
        heading_span_margin : "tw-mx-2 tw-my-1 ",
        heading_span_padding : "",
        heading_span_extra : "",

        span_name_fontSize : "tw-text-2xl ",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black ",
        span_name_fontStyle : "tw-font-italic ",
        span_name_backgroundColor : "tw-blue-100 ",
        span_name_margin : "tw-my-1 tw-mx-2 ",
        span_name_padding : "",
        span_name_extra : "tw-container-fluid ",

        span_jobtitle_fontSize : "tw-text-xl ",
        span_jobtitle_fontWeight : "tw-font-semibold ",
        span_jobtitle_fontColor : "tw-text-black ",
        span_jobtitle_fontStyle : "",
        span_jobtitle_backgroundColor : "tw-blue-100 ",
        span_jobtitle_margin : "tw-my-1 tw-mx-2 ",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",

        
        span_iconlabel_fontSize : "tw-text-sm ",
        span_iconlabel_fontWeight : "tw-font-thin ",
        span_iconlabel_fontColor : "tw-text-black ",
        span_iconlabel_fontStyle : "",
        span_iconlabel_backgroundColor : " ",
        span_iconlabel_margin : " tw-mx-2 ",
        span_iconlabel_padding: "",
        span_iconlabel_extra : "col ",
        
        span_fontSize : "tw-text-xs ",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2 ",
        span_extra : "col ",
    },
    right : {

        backgroundColor : "tw-bg-lime-200 ",

        heading_span_fontSize : "tw-text-xl ",
        heading_span_fontWeight : "tw-font-bold ",
        heading_span_fontColor : "tw-text-black ",
        heading_span_fontStyle : "",
        heading_span_margin : "tw-mx-2 tw-my-1 ",
        heading_span_padding : "",
        heading_span_extra : "",

        span_name_fontSize : "tw-text-2xl ",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black ",
        span_name_fontStyle : "tw-font-italic ",
        span_name_backgroundColor : "tw-blue-100 ",
        span_name_margin : "tw-my-1 tw-mx-2 ",
        span_name_padding : "",
        span_name_extra : "tw-container-fluid ",

        span_jobtitle_fontSize : "tw-text-xl ",
        span_jobtitle_fontWeight : "tw-font-semibold ",
        span_jobtitle_fontColor : "tw-text-black ",
        span_jobtitle_fontStyle : "",
        span_jobtitle_backgroundColor : "tw-blue-100 ",
        span_jobtitle_margin : "tw-my-1 tw-mx-2 ",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",

        
        span_iconlabel_fontSize : "tw-text-sm ",
        span_iconlabel_fontWeight : "tw-font-thin ",
        span_iconlabel_fontColor : "tw-text-black ",
        span_iconlabel_fontStyle : "",
        span_iconlabel_backgroundColor : " ",
        span_iconlabel_margin : " tw-mx-2 ",
        span_iconlabel_padding: "",
        span_iconlabel_extra : "col ",
        
        span_fontSize : "tw-text-xs ",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2 ",
        span_extra : "col ",
    }
}

var template2 = {
    common : {
        borderColor : "",
        borderThickness : "",
        fontFamily : "tw-font-serif",
    },

    linebr : {
        br_height : "tw-h-1 ",
        br_width : "tw-w-2/3 ",
        br_color : "bg-black ",
        br_margin : "tw-mx-1 tw-mb-2 ",
        br_padding : "  ",
        br_extra : "",
    },

    
    left : {

        backgroundColor : "tw-bg-lime-200 ",

        heading_span_fontSize : "tw-text-xl ",
        heading_span_fontWeight : "tw-font-bold ",
        heading_span_fontColor : "tw-text-black ",
        heading_span_fontStyle : "",
        heading_span_margin : "tw-mx-2 tw-my-1 ",
        heading_span_padding : "",
        heading_span_extra : "",

        span_name_fontSize : "tw-text-2xl ",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black ",
        span_name_fontStyle : "tw-font-italic ",
        span_name_backgroundColor : "tw-blue-100 ",
        span_name_margin : "tw-my-1 tw-mx-2 ",
        span_name_padding : "",
        span_name_extra : "tw-container-fluid ",

        span_jobtitle_fontSize : "tw-text-xl ",
        span_jobtitle_fontWeight : "tw-font-semibold ",
        span_jobtitle_fontColor : "tw-text-black ",
        span_jobtitle_fontStyle : "",
        span_jobtitle_backgroundColor : "tw-blue-100 ",
        span_jobtitle_margin : "tw-my-1 tw-mx-2 ",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",

        
        span_iconlabel_fontSize : "tw-text-sm ",
        span_iconlabel_fontWeight : "tw-font-thin ",
        span_iconlabel_fontColor : "tw-text-black ",
        span_iconlabel_fontStyle : "",
        span_iconlabel_backgroundColor : " ",
        span_iconlabel_margin : " tw-mx-2 ",
        span_iconlabel_padding: "",
        span_iconlabel_extra : "col ",
        
        span_fontSize : "tw-text-xs ",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2 ",
        span_extra : "col ",
    },
    right : {
       
        backgroundColor : "tw-bg-lime-200 ",

        heading_span_fontSize : "tw-text-xl ",
        heading_span_fontWeight : "tw-font-bold ",
        heading_span_fontColor : "tw-text-black ",
        heading_span_fontStyle : "",
        heading_span_margin : "tw-mx-2 tw-my-1 ",
        heading_span_padding : "",
        heading_span_extra : "",

        span_name_fontSize : "tw-text-2xl ",
        span_name_fontWeight : "tw-font-bold ",
        span_name_fontColor : "tw-text-black ",
        span_name_fontStyle : "tw-font-italic ",
        span_name_backgroundColor : "tw-blue-100 ",
        span_name_margin : "tw-my-1 tw-mx-2 ",
        span_name_padding : "",
        span_name_extra : "tw-container-fluid ",

        span_jobtitle_fontSize : "tw-text-xl ",
        span_jobtitle_fontWeight : "tw-font-semibold ",
        span_jobtitle_fontColor : "tw-text-black ",
        span_jobtitle_fontStyle : "",
        span_jobtitle_backgroundColor : "tw-blue-100 ",
        span_jobtitle_margin : "tw-my-1 tw-mx-2 ",
        span_jobtitle_padding: "",
        span_jobtitle_extra : "",

        
        span_iconlabel_fontSize : "tw-text-sm ",
        span_iconlabel_fontWeight : "tw-font-thin ",
        span_iconlabel_fontColor : "tw-text-black ",
        span_iconlabel_fontStyle : "",
        span_iconlabel_backgroundColor : " ",
        span_iconlabel_margin : " tw-mx-2 ",
        span_iconlabel_padding: "",
        span_iconlabel_extra : "col ",
        
        span_fontSize : "tw-text-xs ",
        span_fontWeight : "",
        span_fontColor : "",
        span_fontStyle : "",
        span_margin : "",
        span_padding : "tw-mx-2 ",
        span_extra : "col ",
    },
}

var classList = [
    template0,
    template1,
    template2,
    template3
]

var text_sizes = ["tw-text-xs", "tw-text-sm", "tw-text-base", "tw-text-lg", "tw-text-xl", "tw-text-2xl", "tw-text-3xl", "tw-text-4xl", "tw-text-5xl"];

function updateSpan(input, resumeDivId) {
  console.log("update span called\n");
  
  resumeDivId +=getVariable();
  console.log("template id is "+resume_template_id+"\n");
  console.log(input);
    
  var inputValue = input.value;
  var inputId = input.id;
  var inputName = input.name;
  console.log("input name is "+inputName);
  inputName = inputName.slice(0, -2);
  console.log(inputName);
  console.log(resumeDivId);
    
  var orientation ="left";
  var parentDiv = document.getElementById(resumeDivId);
  var parentDivClass = parentDiv.parentElement.className ;
  
  console.log("parent Element Div class name is "+parentDivClass);
  //console.log("index of left is "+parentDivClass.indexOf("left"));
  console.log(parentDivClass.indexOf("middle"));
  if(parentDivClass.indexOf("left") > 0)
  {
    orientation = "left";
  }
  else if(parentDivClass.indexOf("middle") > 0)
  {
    orientation = "middle";
  }
  else if(parentDivClass.indexOf("right") > 0)
  {
    orientation = "right";
  }

  var spanId = inputId + "_span";

  //var resumeDivId_parentId = parentDiv.parentElement.id;
  var headingSpanId = inputName + "_heading_span";
  console.log(spanId);
  var existingSpan = document.getElementById(spanId);
  var existingHeadingSpan = document.getElementById(headingSpanId);

  console.log(existingHeadingSpan);

  if (!existingHeadingSpan) {

    // following code will change the color of changing the color of the section either left or right , that will depend on the orientation variable
    /* 
        
    var a = parentDivClass.indexOf(" bg-");
    if(a<0)
    {
        a = parentDivClass.indexOf(" tw-bg-");
    }
    var temp = a+1;
    while(parentDivClass[temp++] != " ")
    {
        console.log(parentDivClass[temp]);
    }

    console.log(classList[getVariable()][orientation].backgroundColor);
    console.log(parentDivClass.substring(++a,temp));
    parentDivClass = parentDivClass.replace(parentDivClass.substring(a,temp), classList[getVariable()][orientation].backgroundColor);
    console.log(parentDivClass);

    parentDiv.parentElement.className = parentDivClass; */

    var headingSpan = document.createElement("span");
    headingSpan.textContent = inputName;
    headingSpan.id = headingSpanId;
    //headingSpan.className = "tw-mx-2 text-black tw-text-xl my-1";
    
    /* console.log(classList[getVariable()][orientation].heading_span_margin);
    console.log(classList[getVariable()][orientation].heading_span_fontColor);
    console.log(classList[getVariable()][orientation].heading_span_fontSize);
    console.log(typeof classList[getVariable()][orientation].heading_span_margin); */
    
    headingSpan.className = classList[getVariable()][orientation].heading_span_margin;
    headingSpan.className += classList[getVariable()][orientation].heading_span_fontColor;
    headingSpan.className += classList[getVariable()][orientation].heading_span_fontSize;
    console.log(headingSpan.className);

    console.log('existing heading span not found');

    parentDiv.appendChild(headingSpan);
    var lineBreak = document.createElement("span");
    //lineBreak.className = "tw-h-1 tw-w-full bg-black tw-mb-2 tw-px-10 tw-mx-2";
    
    /* console.log(classList[getVariable()]['linebr'].br_height);
    console.log(classList[getVariable()]['linebr'].br_width);
    console.log(classList[getVariable()]['linebr'].br_color);
    console.log(classList[getVariable()]['linebr'].br_margin);
    console.log(classList[getVariable()]['linebr'].br_padding); */

    console.log(lineBreak.className);
    lineBreak.className = classList[getVariable()]['linebr'].br_height;
    lineBreak.className += classList[getVariable()]['linebr'].br_width;
    lineBreak.className += classList[getVariable()]['linebr'].br_color;
    lineBreak.className += classList[getVariable()]['linebr'].br_margin;
    lineBreak.className += classList[getVariable()]['linebr'].br_padding;
    console.log(lineBreak.className);

    parentDiv.appendChild(lineBreak);
  }
  if (!existingSpan) {
    console.log("span doesnt exists");
    var newDiv = document.createElement("div");
    var newSpan = document.createElement("span");
    var newIcon = document.createElement("i");
    newIcon.className = icons_list[spanId];
    /* newIcon.className += icons_list[icon_height];
    newIcon.className += icons_list[icon_width];
    newIcon.className += icons_list[icon_margin];
    newIcon.className += icons_list[icon_extra]; */
    newDiv.id = inputId + "_div";
    newDiv.appendChild(newIcon);
    newDiv.appendChild(newSpan);
    newSpan.id = spanId;

    newSpan.textContent = inputValue;
    console.log(resumeDivId);
    parentDiv.appendChild(newDiv);
    /* 
          parentDiv.appendChild(newDiv); */
    if (inputName == "personal_details") {
      if (spanId == "name_span") {
        //newSpan.className = "tw-mx-0";
        //newSpan.className += " tw-container-fluid tw-bg-blue-100 w-100 fw-bold tw-text-4xl my-1";
        
       /*  console.log(classList[getVariable()][orientation].span_name_extra);
        console.log(classList[getVariable()][orientation].span_name_margin);
        console.log(classList[getVariable()][orientation].span_name_backgroundColor);
        console.log(classList[getVariable()][orientation].span_name_fontWeight);
        console.log(classList[getVariable()][orientation].span_name_fontSize); */
        
        newSpan.className = classList[getVariable()][orientation].span_name_extra;  
        newSpan.className += classList[getVariable()][orientation].span_name_margin;
        newSpan.className += classList[getVariable()][orientation].span_name_backgroundColor;
        newSpan.className += classList[getVariable()][orientation].span_name_fontColor;
        newSpan.className += classList[getVariable()][orientation].span_name_fontWeight;
        newSpan.className += classList[getVariable()][orientation].span_name_fontSize;
        console.log(newSpan.className);


      } else if (spanId == "job_title_span") {
        //newSpan.className = "tw-mx-2";
        //newSpan.className += "text-black tw-bg-blue-100 tw-text-2xl my-1";
        
        /* console.log(classList[getVariable()][orientation].span_jobtitle_extra);
        console.log(classList[getVariable()][orientation].span_jobtitle_margin);
        console.log(classList[getVariable()][orientation].span_jobtitle_backgroundColor);
        console.log(classList[getVariable()][orientation].span_jobtitle_fontColor);
        console.log(classList[getVariable()][orientation].span_jobtitle_fontWeight);
        console.log(classList[getVariable()][orientation].span_jobtitle_fontSize); */
        
        
        newSpan.className = classList[getVariable()][orientation].span_jobtitle_extra;  
        newSpan.className += classList[getVariable()][orientation].span_jobtitle_margin;
        newSpan.className += classList[getVariable()][orientation].span_jobtitle_backgroundColor;
        newSpan.className += classList[getVariable()][orientation].span_jobtitle_fontColor;
        newSpan.className += classList[getVariable()][orientation].span_jobtitle_fontWeight;
        newSpan.className += classList[getVariable()][orientation].span_jobtitle_fontSize;
        console.log(newSpan.className);

        
      } else {

        /* newDiv.className = "col";
        newSpan.className = "tw-mx-2"; */

         
        /* console.log(classList[getVariable()][orientation].span_iconlabel_extra);
        console.log(classList[getVariable()][orientation].span_iconlabel_margin);
        console.log(classList[getVariable()][orientation].span_iconlabel_backgroundColor);
        console.log(classList[getVariable()][orientation].span_iconlabel_fontColor);
        console.log(classList[getVariable()][orientation].span_iconlabel_fontWeight);
        console.log(classList[getVariable()][orientation].span_iconlabel_fontSize); */
        
        console.log(classList[getVariable()].common.newDiv_class);
        newDiv.className = classList[getVariable()].common.newDiv_class;
        
        //newSpan.className = classList[getVariable()][orientation].span_iconlabel_extra;  
        newSpan.className = classList[getVariable()][orientation].span_iconlabel_margin;
        newSpan.className += classList[getVariable()][orientation].span_iconlabel_backgroundColor;
        newSpan.className += classList[getVariable()][orientation].span_iconlabel_fontColor;
        newSpan.className += classList[getVariable()][orientation].span_iconlabel_fontWeight;
        newSpan.className += classList[getVariable()][orientation].span_iconlabel_fontSize;
        console.log(newSpan.className);
      } 
    } 
    else {
        console.log('else');
      //newDiv.className = "col";
      //newSpan.className = "tw-mx-2 tw-text-sm";
      //document.getElementById().appendChild(newDiv);

         
      /* console.log(classList[getVariable()][orientation].span_extra);
      console.log(classList[getVariable()][orientation].span_margin);
      console.log(classList[getVariable()][orientation].span_backgroundColor);
      console.log(classList[getVariable()][orientation].span_fontColor);
      console.log(classList[getVariable()][orientation].span_fontWeight);
      console.log(classList[getVariable()][orientation].span_fontSize); */
      
      
      newSpan.className = classList[getVariable()][orientation].span_extra;  
      newSpan.className += classList[getVariable()][orientation].span_margin;
      newSpan.className += classList[getVariable()][orientation].span_backgroundColor;
      newSpan.className += classList[getVariable()][orientation].span_fontColor;
      newSpan.className += classList[getVariable()][orientation].span_fontWeight;
      newSpan.className += classList[getVariable()][orientation].span_fontSize;
      console.log(newSpan.className);

    }

    document.getElementById(resumeDivId).appendChild(newDiv);
    console.log(document.getElementById(resumeDivId));
  } else {
    console.log("span exists");
    renderText(existingSpan);
  }

  function renderText(span) {
    console.log('render text function called');
    newDiv = document.getElementById(inputId + "_div");
    console.log(newDiv);
    span.textContent = inputValue;
    console.log(resumeDivId);
    var parentDiv = document.getElementById(resumeDivId);
    //parentDiv.appendChild(newDiv);
    /* 
          document.getElementById(resumeDivId).appendChild(newDiv); */


    if (inputName == "personal_details") {
      if (spanId == "name_span") {
        /* span.className = "tw-mx-0";
        span.className +=
          " tw-container-fluid tw-bg-blue-100 w-100 fw-bold tw-text-xl my-1"; */

           /*  console.log(classList[getVariable()][orientation].span_name_extra);
        console.log(classList[getVariable()][orientation].span_name_margin);
        console.log(classList[getVariable()][orientation].span_name_backgroundColor);
        console.log(classList[getVariable()][orientation].span_name_fontWeight);
        console.log(classList[getVariable()][orientation].span_name_fontSize); */
        
        span.className = classList[getVariable()][orientation].span_name_extra;  
        span.className += classList[getVariable()][orientation].span_name_margin;
        span.className += classList[getVariable()][orientation].span_name_backgroundColor;
        span.className += classList[getVariable()][orientation].span_name_fontColor;
        span.className += classList[getVariable()][orientation].span_name_fontWeight;
        span.className += classList[getVariable()][orientation].span_name_fontSize;
        console.log(span.className);



      } else if (spanId == "job_title_span") {
        /* span.className = "tw-mx-2";
        span.className += "text-black tw-bg-blue-100 tw-text-2xl my-1"; */
        
        /* console.log(classList[getVariable()][orientation].span_jobtitle_extra);
        console.log(classList[getVariable()][orientation].span_jobtitle_margin);
        console.log(classList[getVariable()][orientation].span_jobtitle_backgroundColor);
        console.log(classList[getVariable()][orientation].span_jobtitle_fontColor);
        console.log(classList[getVariable()][orientation].span_jobtitle_fontWeight);
        console.log(classList[getVariable()][orientation].span_jobtitle_fontSize); */
        
        
        span.className = classList[getVariable()][orientation].span_jobtitle_extra;  
        span.className += classList[getVariable()][orientation].span_jobtitle_margin;
        span.className += classList[getVariable()][orientation].span_jobtitle_backgroundColor;
        span.className += classList[getVariable()][orientation].span_jobtitle_fontColor;
        span.className += classList[getVariable()][orientation].span_jobtitle_fontWeight;
        span.className += classList[getVariable()][orientation].span_jobtitle_fontSize;
        console.log(span.className);


      } else { // else part means elements in personal details section which are left means all span tag which are just adjacent to icons.

        /* newDiv.className = "col";
        span.className = "tw-mx-2"; */


        /* console.log(classList[getVariable()][orientation].span_iconlabel_extra);
        console.log(classList[getVariable()][orientation].span_iconlabel_margin);
        console.log(classList[getVariable()][orientation].span_iconlabel_backgroundColor);
        console.log(classList[getVariable()][orientation].span_iconlabel_fontColor);
        console.log(classList[getVariable()][orientation].span_iconlabel_fontWeight);
        console.log(classList[getVariable()][orientation].span_iconlabel_fontSize); */
        
        console.log(classList[getVariable()].common.newDiv_class);

        newDiv.className = classList[getVariable()].common.newDiv_class;
        span.className = classList[getVariable()][orientation].span_iconlabel_extra;  
        span.className += classList[getVariable()][orientation].span_iconlabel_margin;
        span.className += classList[getVariable()][orientation].span_iconlabel_backgroundColor;
        span.className += classList[getVariable()][orientation].span_iconlabel_fontColor;
        span.className += classList[getVariable()][orientation].span_iconlabel_fontWeight;
        span.className += classList[getVariable()][orientation].span_iconlabel_fontSize;
        console.log(span.className);

        



      }
    }
  }
  /* 
                  if(existingSpan)
                  {
                      console.log('span exists');
                      newSpan.textContent = inputValue;
                      document.getElementById(resumeDivId).appendChild(newDiv);
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
                          document.getElementById('resume_personal_details').appendChild(newDiv);
                      } else if (inputName == "education") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_education').appendChild(headingSpan);
                              document.getElementById('resume_education').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_education').appendChild(newDiv);

                      } else if (inputName == "projects") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_projects').appendChild(headingSpan);
                              document.getElementById('resume_projects').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_projects').appendChild(newDiv);

                      } else if (inputName == "languages") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_languages').appendChild(headingSpan);
                              document.getElementById('resume_languages').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_languages').appendChild(newDiv);

                      } else if (inputName == "awards") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_awards').appendChild(headingSpan);
                              document.getElementById('resume_awards').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_awards').appendChild(newDiv);

                      } else if (inputName == "courses") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_courses').appendChild(headingSpan);
                              document.getElementById('resume_courses').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_courses').appendChild(newDiv);

                      } else if (inputName == "publications") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_publications').appendChild(headingSpan);
                              document.getElementById('resume_publications').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_publications').appendChild(newDiv);

                      } else if (inputName == "profile") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_profile').appendChild(headingSpan);
                              document.getElementById('resume_profile').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_profile').appendChild(newDiv);

                      } else if (inputName == "references") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_references').appendChild(headingSpan);
                              document.getElementById('resume_references').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_references').appendChild(newDiv);

                      } else if (inputName == "organization") {
                          if (!existingHeadingSpan) {
                              console.log('heading span create function called');
                              var headingSpan = document.createElement('span');
                              headingSpan.textContent = inputName;
                              headingSpan.id = headingSpanId;
                              headingSpan.className = 'tw-mx-2 text-black tw-text-3xl my-1';
                              document.getElementById('resume_organization').appendChild(headingSpan);
                              document.getElementById('resume_organization').appendChild(document.createElement('hr'));
                          }
                          newDiv.className = 'col';
                          newSpan.className = 'tw-mx-2';
                          console.log(newDiv);
                          document.getElementById('resume_organization').appendChild(newDiv);

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

  var sections = [
    "personal_details",
    "languages",
    "awards",
    "courses",
    "publications",
    "profile",
    "references",
    "organization",
    "skills",
    "education",
    "projects"
  ]
  console.log(sections);
 


  function load_json()
  {
    sections.forEach(function(s){
        console.log(s);
        $.get("load_resume.php"+"?section="+s, function(data,status)
        {
    
            if(status == 'success')
            {
                load_fields(data,s);
    
            }
            console.log(data);
            console.log(JSON.parse(data));
            console.log(status);
        });
      });
    
   
      // the following code has not been used yet
    /* $.ajax({
        url : 'load_resume.php',
        method : 'POST',
        data : { section : "personal_details"},
        dataType : 'json',
        success : function(data){
            console.log(data);
        },
        error: function()
        {
            console.error("failed to load json data");
        }
    }); */
  }
  function load_fields(data,section_name)
  {
    console.log("load_fields called : " + section_name);
   
    //const arr = JSON.parse(data);
    $.each(JSON.parse(data) , function(key, value)
    {
        if(key != "0")
        {

            console.log(key +" : " + value + "\n");
            var el = document.getElementById(key);
            console.log(el);
            console.log(el.value);
            document.getElementById(key).value = value;
            updateSpan(el, "resume_"+section_name);
        }
    });
  }





  

  window.onload = function(){
    document.getElementById('download_pdf').addEventListener("click", ()=>{
        console.log('download clicked');
        const template_resume = document.getElementById('template'+getVariable());
        console.log('template'+getVariable());
        console.log(template_resume);
        console.log(window);
        html2pdf(template_resume).save();
    })


  }



  window.onload = function(){
    document.getElementById('')
  }

  function cust_name_size(e, new_size, span_id)
  {
    
    console.log("customize resume called");
    console.log(e.innerHTML);
    console.log(new_size);
        var temp_class = document.getElementById(span_id).className;
        console.log(temp_class);
        text_sizes.forEach((ts)=>
        {
            if(temp_class.indexOf(ts) > 0)
            {
                document.getElementById(span_id).className = class_replace(temp_class, ts, "tw-text-"+new_size);
                /* n1 = temp_class.indexOf(ts);
                console.log(n1)
                n2=n1;
                while(temp_class[n2] != " ")
                {
                    n2++;
                }
                if(n1 != n2)
                {   
                    temp_class = temp_class.replace(temp_class.substring(n1,n2), "tw-text-"+new_size);
                    console.log(temp_class);
        
                    document.getElementById(span_id).className = temp_class;

                } */
            }
            else{
                console.log("text css not found in class");
            }
        });
        
        //classList[getVariable()][]
  }

  function class_replace(str, org_class, new_class)
  {
    console.log('class_replace function called');
    n1 = str.indexOf(org_class);
    console.log(n1);
    n2=n1;
    while(str[n2] != " ")
    {
        n2++;
    }
    if(n1 != n2)
    {   
        str = str.replace(str.substring(n1,n2), new_class);
        console.log(str);
        return str;
        //document.getElementById(span_id).className = str;

    }
    else{
        return str;
    }
  }