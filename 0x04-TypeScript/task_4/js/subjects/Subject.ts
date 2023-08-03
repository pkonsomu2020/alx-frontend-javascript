namespace Subjects {
  export class Subject {
    private teacher: Teacher | undefined;

    public setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
