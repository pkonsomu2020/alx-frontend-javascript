namespace Subjects {
  // Declaration merging for the Teacher interface to add the optional attribute.
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    public getRequirements() {
      return "Here is the list of requirements for React";
    }

    public getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
