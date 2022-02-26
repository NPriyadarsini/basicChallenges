const data = {
  markSheets:[
      {
          student: 'Sriram',
          rollNo: 11,
          tamil: 80,
          english: 90,
          science: 86,
          maths: 97,
          social: 76,
      },
      {
          student: 'Ram',
          rollNo: 16,
          tamil: 60,
          english: 97,
          science: 100,
          maths: 34,
          social: 100,
          
      },
      {
          student: 'sri',
          rollNo: 18,
          tamil: 60,
          english: 90,
          science: 66,
          maths: 93,
          social: 46,
      },
      {
          student: 'mani',
          rollNo: 20,
          tamil: 43,
          english: 70,
          science: 86,
          maths: 73,
          social: 86,
      },
  ] 
};
const getTotalMarks = (ms) =>  ms.tamil+ms.english+ms.science+ms.maths+ms.social;

const getResult = (ms) => ms.tamil < 35 || ms.english < 35 || ms.science < 35 || ms.maths < 35 || ms.social < 35 ? "FAIL" : "PASS";

const getRank = (students) =>  {
  let rank = 0;
  for(let y of students){
     y.result === "PASS" ? y.rank = ++rank : y.rank == "-";
     }
     return students;
};

const getStudentData = () => {
  var pass =0 ,fail=0;
  const dict = data.markSheets;
  for(let x of dict){
    x.total = getTotalMarks(x),
    x.result = getResult(x)
    x.result === "PASS" ? pass++ : fail++;
  }
  const sortedList = dict.sort((a,b)=>{return b.total - a.total});
  console.table(getRank(sortedList));
  console.table({"No of students Passed" :pass,"No of students Failed":fail });
};
getStudentData();