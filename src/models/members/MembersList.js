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
    updateMemberById(id, name, age, description, image, github, instagram ) {
        const memberToUpdate = this.getMemberById(id);
        if (!memberToUpdate) {
            return null;
        }
        if (memberToUpdate) {
            memberToUpdate.name = name;
            memberToUpdate.age = age;
            memberToUpdate.description = description;
            memberToUpdate.image = image;
            memberToUpdate.github = github;
            memberToUpdate.instagram = instagram;
        }
        return memberToUpdate;

    }
    pagenationMembers(page) {
        const limit = 3;
        const results = {};
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        results.results = this.members.slice(startIndex, endIndex);
        return results;
    }
    membersAmount() {
        return this.members.length;
    }
}
