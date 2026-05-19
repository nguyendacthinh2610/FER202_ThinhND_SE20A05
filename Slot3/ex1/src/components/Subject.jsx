function Subject() {
    //Khai báo mảnh chứa tên các môn học: React, ReactNative,NodeJS,ExpressJS
    const subjects = ['React', 'ReactNative', 'NodeJS', 'ExpressJS'];
  return (
    <div>
        <h1>Course name : </h1>
        <ul>
            {
                subjects.map((subject,index) => <li key={index}>{subject}</li>)
            }
        </ul>
    </div>
  );
}

export default Subject;