namespace Subjects {
  // Declaration merging for the Teacher interface to add the optional attribute.
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    public getRequirements() {
      return "Here is the list of requirements for Java";
    }

    public getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
