const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const FirstNameInput = studentForm["FirstName"];
const LastNameInput = studentForm["LastName"];
const EmailIDInput = studentForm["EmailID"];
const MobileNumberInput = studentForm["MobileNumber"];
const Gender1Input = studentForm["Gender1"];
const Gender2Input = studentForm["Gender2"];
const BirthDayInput = studentForm["BirthDay"];
const BirthDayMonthInput = studentForm["BirthDayMonth"];
const BirthDayYearInput = studentForm["BirthDayYear"];
const AddressTextarea = studentForm["Address"];
const CityInput = studentForm["City"];
const PinCodeInput = studentForm["PinCode"];
const StateInput = studentForm["State"];
const CountryInput = studentForm["Country"];
const HobbyDrawingInput = studentForm["HobbyDrawing"];
const HobbySingingInput = studentForm["HobbySinging"];
const HobbyDancingInput = studentForm["HobbyDancing"];
const HobbyCookingInput = studentForm["HobbyCooking"];
const HobbyOtherInput = studentForm["HobbyOther"];
const Other_HobbyInput = studentForm["Other_Hobby"];
const HighSchoolInput = studentForm["HighSchool"];
const HigherSchoolInput = studentForm["HigherSchool"];
const GraduationInput = studentForm["Graduation"];
const PostGraduationInput = studentForm["PostGraduation"];
const PhdInput = studentForm["Phd"];
const CourseBCAInput = studentForm["CourseBCA"];
const CourseBComInput = studentForm["CourseBCom"];
const CourseBScInput = studentForm["CourseBSc"];
const CourseBAInput = studentForm["CourseBA"];
const CourseMCAInput = studentForm["CourseMCA"];
const CourseMComInput = studentForm["CourseMCom"];
const CourseMScInput = studentForm["CourseMSc"];
const CourseMAInput = studentForm["CourseMA"];




const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (FirstName,LastName,EmailID,MobileNumber,Gender1,Gender2,BirthDay,BirthDayMonth,BirthDayYear,Address,City,PinCode,State,Country,HobbyDrawing,HobbySinging,HobbyDancing,HobbyCooking,HobbyOther,Other_Hobby,HighSchool,HigherSchool,Graduation,PostGraduation,Phd,CourseBCA,CourseBCom,CourseBSc,CourseBA,CourseMCA,CourseMCom,CourseMSc,CourseMA) => {
  students.push({
    FirstName,
    LastName,
    EmailID,
    MobileNumber,
    Gender1,
    Gender2,
    BirthDay,
    BirthDayMonth,
    BirthDayYear,
    Address,
    City,
    PinCode,
    State,
    Country,
    HobbyDrawing,
    HobbySinging,
    HobbyDancing,
    HobbyCooking,
    HobbyOther,
    Other_Hobby,
    HighSchool,
    HigherSchool,
    Graduation,
    PostGraduation,
    Phd,
    CourseBCA,
    CourseBCom,
    CourseBSc,
    CourseBA,
    CourseMCA,
    CourseMCom,
    CourseMSc,
    CourseMA,
    
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { FirstName,LastName,EmailID,MobileNumber,Gender1,Gender2,BirthDay,
    // BirthDayMonth,BirthDayYear,
    Address,City,PinCode,State,Country,HobbyDrawing,HobbySinging,HobbyDancing,HobbyCooking,HobbyOther,Other_Hobby,HighSchool,HigherSchool,Graduation,PostGraduation,Phd,CourseBCA,CourseBCom,CourseBSc,CourseBA,CourseMCA,CourseMCom,CourseMSc,CourseMA };
};

const createStudentElement = ({ FirstName,LastName,EmailID,MobileNumber,Gender1,Gender2,BirthDay,
    // BirthDayMonth,BirthDayYear,
    Address,City,PinCode,State,Country,HobbyDrawing,HobbySinging,HobbyDancing,HobbyCooking,HobbyOther,Other_Hobby,HighSchool,HigherSchool,Graduation,PostGraduation,Phd,CourseBCA,CourseBCom,CourseBSc,CourseBA,CourseMCA,CourseMCom,CourseMSc,CourseMA }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentFirstName = document.createElement("h2");
  const studentLastName = document.createElement('h2');
  const studentEmailID = document.createElement("p");
  const studentMobileNumber = document.createElement("p");
  const studentGender1 = document.createElement("p");
  const studentGender2 = document.createElement("p");
  const studentBirthDay = document.createElement("p");
//   const studentBirthdayMonth = document.createElement("p");
//   const studentBirthdayYear = document.createElement("p");
  const studentAddress = document.createElement("p");
  const studentCity = document.createElement("p");
  const studentPinCode = document.createElement("p");
  const studentState = document.createElement("p");
  const studentCountry = document.createElement("p");
  const studentHobbyDrawing = document.createElement("p");
  const studentHobbySinging = document.createElement("p");
  const studentHobbyDancing = document.createElement("p");
  const studentHobbyCooking = document.createElement("p");
  const studentHobbyOther = document.createElement("p");
  const studentOther_Hobby = document.createElement("p");
  const studentHighSchool = document.createElement("p");
  const studentHigherSchool = document.createElement("p");
  const studentGraduation = document.createElement("p");
  const studentPostGraduation = document.createElement("p");
  const studentPhd = document.createElement("p");
  const studentCourseBCA = document.createElement("p");
  const studentCourseBCom = document.createElement("p");
  const studentCourseBSc = document.createElement("p");
  const studentCourseBA = document.createElement("p");
  const studentCourseMCA = document.createElement("p");
  const studentCourseMCom = document.createElement("p");

  const studentCourseMSc = document.createElement("p");
  const studentCourseMA = document.createElement("p");



  // Fill the content
  studentFirstName.innerText = "Student FirstName: " + FirstName;
  studentLastName.innerText = "Student LastName: " + LastName;
  studentEmailID.innerText = "Student EmailID: " + EmailID ;
  studentMobileNumber.innerText = "Student MobileNumber: " + MobileNumber;
  studentGender1.innerText = "Student  Gender1:" + Gender1;
  studentGender2.innerText = "Student Gender2: " + Gender2;
  studentBirthDay.innerText = "Student  BirthDay:" + BirthDay;
//   studentBirthdayMonth.innerText = "Student BirthdayMonth: " + BirthdayMonth;
//   studentBirthdayYear.innerText = "Student BirthdayYear: " + BirthdayYear;
  studentAddress.innerText = "Student Address: " + Address;
  studentCity.innerText = "Student City: " + City;
  studentPinCode.innerText = "Student PinCode: " + PinCode;
  studentState.innerText = "Student State: " + State;
  studentCountry.innerText = "Student Country: " + Country;
  studentHobbyDrawing.innerText = "Student HobbyDrawing: " + HobbyDrawing;
  studentHobbySinging.innerText = "Student HobbySinging: " + HobbySinging;
  studentHobbyDancing.innerText = "Student  HobbyDancing:" + HobbyDancing;
  studentHobbyCooking.innerText = "Student HobbyCooking: " + HobbyCooking;
  studentHobbyOther.innerText = "Student HobbyOther: " + HobbyOther;
  studentOther_Hobby.innerText = "Student Other_Hobby: " + Other_Hobby;
  studentHighSchool.innerText = "Student HighSchool: " + HighSchool;
  studentHigherSchool.innerText = "Student HigherSchool: " + HigherSchool;
  studentGraduation.innerText = "Student Graduation: " + Graduation;
  studentPostGraduation.innerText = "Student PostGraduation: " + PostGraduation;
  studentPhd.innerText = "Student Phd: " + Phd;
  studentCourseBCA.innerText = "Student CourseBCA: " + CourseBCA;
  studentCourseBCom.innerText = "Student CourseBCom: " + CourseBCom;
  studentCourseBSc.innerText = "Student CourseBSc: " + CourseBSc;
  studentCourseBA.innerText = "Student CourseBA: " + CourseBA;
  studentCourseMCA.innerText = "Student CourseMCA: " +CourseMCA ;
  studentCourseMCom.innerText = "Student CourseMCom: " + CourseMCom;
  studentCourseMSc.innerText = "Student CourseMSc: " + CourseMSc;
  studentCourseMA.innerText = "Student CourseMA: " + CourseMA;

  


  // Add to the DOM
  studentDiv.append(studentFirstName, studentLastName,studentEmailID,studentMobileNumber,studentGender1,
    studentGender2,studentBirthDay,
    // studentBirthdayMonth,studentBirthdayYear,
    studentAddress,studentCity,studentPinCode,studentState,studentCountry,
    studentHobbySinging,studentHobbyDancing,studentHobbyCooking,studentHobbyOther,studentOther_Hobby,
    studentHighSchool,studentHigherSchool,studentGraduation,studentPostGraduation,studentPhd,
    studentCourseBCA,studentCourseBCom,studentCourseBSc,studentCourseBA,studentCourseMCA,
    studentCourseMCom,studentCourseMSc,studentCourseMA,);
  
  
  
  
  
  
  
  
  
    studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};







studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    
    FirstNameInput.value ,
  LastNameInput.value ,
  EmailIDInput.value ,
  MobileNumberInput.value,
  Gender1Input.value,
  Gender2Input.value,
  BirthDayInput.value,
//   BirthDayMonthInput.value,
//   BirthDayYearInput.value,
  AddressTextarea.value,
  CityInput.value,
  PinCodeInput.value,
  StateInput.value,
  CountryInput.value,
  HobbyDrawingInput.value,
  HobbySingingInput.value,
  HobbyDancingInput.value,
  HobbyCookingInput.value,
  HobbyOtherInput.value,
  Other_HobbyInput.value,
  HighSchoolInput.value,
  HigherSchoolInput.value,
  GraduationInput.value,
  PostGraduationInput.value,
  PhdInput.value,
  CourseBCAInput.value,
  CourseBComInput.value,
  CourseBScInput.value,
  CourseBAInput.value,
  CourseMCAInput.value,
  CourseMComInput.value,
  CourseMScInput.value, 
  CourseMAInput.value 
  
  );

  createStudentElement(newStudent);

  FirstNameInput.value = "";
  LastNameInput.value = "";
  EmailIDInput.value = "";
  MobileNumberInput.value = "";
  Gender1Input.value = "";
  Gender2Input.value = "";
  BirthDayInput.value = "";
//   BirthDayMonthInput.value = "";
//   BirthDayYearInput.value = "";
  AddressTextarea.value = "";
  CityInput.value = "";
  PinCodeInput.value = "";
  StateInput.value = "";
  CountryInput.value = "";
  HobbyDrawingInput.value = "";
  HobbySingingInput.value = "";
  HobbyDancingInput.value = "";
  HobbyCookingInput.value = "";
  HobbyOtherInput.value = "";
  Other_HobbyInput.value = "";
  HighSchoolInput.value = "";
  HigherSchoolInput.value = "";
  GraduationInput.value = "";
  PostGraduationInput.value = "";
  PhdInput.value = "";
  CourseBCAInput.value = "";
  CourseBComInput.value = "";
  CourseBScInput.value = "";
  CourseBAInput.value = "";
  CourseMCAInput.value = "";
  CourseMComInput.value = "";
  CourseMScInput.value = "";
  CourseMAInput.value = "";
  

};