export class MembersList {
    constructor() {
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
    }
    getMemberById(id) {
        return this.members.find(member => member.id === id);
    }
    getMembers() {
        return this.members;
    }
    removeMemberById(id) {
        this.members = this.members.filter(member => member.id !== id);
    }
    updateMemberById(id, name, age, github, instagram, description, image) {
        const memberToUpdate = this.getMemberById(id);
        if (memberToUpdate) {
            memberToUpdate.name = name;
            memberToUpdate.age = age;
            memberToUpdate.github = github;
            memberToUpdate.instagram = instagram;
            memberToUpdate.description = description;
            memberToUpdate.image = image;
        }
    }
    pagenationMembers(page) {
        const limit = 3;
        const results = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        if (endIndex < this.members.length) {
            results.next = {
                page: page + 1,
                limit: limit
            };
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            };
        }

        results.results = this.members.slice(startIndex, endIndex);
        return results;
    }
    membersAmount() {
        return this.members.length;
    }
}

export class ErrorList {
    constructor() {
        this.errors = [];
    }
    getErrors() {
        return this.errors;
    }
    addError(error) {
        this.errors.push(error);
    }
}