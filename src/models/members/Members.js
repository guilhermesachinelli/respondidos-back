import { v4 as uuidv4 } from 'uuid';

export class Members {
    constructor(name, age, description, image, github, instagram, ) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.image = image;
        this.github = github;
        this.instagram = instagram;
        this.id = uuidv4();
    }
}