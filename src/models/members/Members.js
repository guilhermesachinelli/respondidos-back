import { v4 as uuidv4 } from 'uuid';

export class Members {
    constructor(name, age, github, instagram, description, image) {
        this.name = name;
        this.age = age;
        this.github = github;
        this.instagram = instagram;
        this.description = description;
        this.image = image;
        this.id = uuidv4();
    }
}