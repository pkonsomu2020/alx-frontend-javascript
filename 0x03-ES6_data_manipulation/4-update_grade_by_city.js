function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchedGrade) {
      return {
        ...student,
        grade: matchedGrade.grade,
      };
    } else {
      return {
        ...student,
        grade: "N/A",
      };
    }
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
