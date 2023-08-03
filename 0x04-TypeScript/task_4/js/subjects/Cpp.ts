namespace Subjects {
  // Declaration merging for the Teacher interface to add the optional attribute.
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    public getRequirements() {
      return "Here is the list of requirements for Cpp";
    }

    public getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
