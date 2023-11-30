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
    membersAmount() {
        return this.members.length;
    }
}