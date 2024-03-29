import { Members} from "../models/members/Members.js";
import { MembersList } from "../models/members/MembersList.js";
import { members } from "../data/members.js";

const membersList = new MembersList();

members.map(member => new Members(
    member.name,
    member.age,
    member.description,
    member.image,
    member.github,
    member.instagram,
)).forEach(member => membersList.addMember(member));

export const getMembers = (req, res) => {
    const members = membersList.getMembers();
    if (!members) {
        return res.status(404).send({ message: "Members not found" });
    }
    return res.status(200).send({ message: `Numero de membros cadastrados: ${membersList.membersAmount()}`, data: members });
}

export const getMemberById = (req, res) => {
    const { id } = req.params;
    const member = membersList.getMemberById(id);
    if (!member) {
    }
    return res.status(200).send(member);
}

export const createMember = (req, res) => {
    const { name, age, description, image, github, instagram } = req.body;
    let error = "Erro no dados enviados: ";
    let errorCount = 0;
    if (!name) {
        error += "Nome não informado";
        errorCount++;
    }
    if (!age) {
        error += "Idade não informada";
        errorCount++;
    }
    if (!github) {
        error += "Github não informado";
        errorCount++;
    }
    if (!instagram) {
        error += "Instagram não informado";
        errorCount++;
    }
    if (!description) {
        error += "Descrição não informada";
        errorCount++;
    }
    if(name.length < 3){
        error += "Nome deve conter entre 3";
        errorCount++;
    }
    if (age < 15 || age > 100) {
        error += "Idade não permitida";
        errorCount++;
    }
    if (description.length < 10 || description.length > 100) {
        error += "Descrição deve conter entre 10 e 100 caracteres";
        errorCount++;
    }
    if (image.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        error += " Imagem inválida."
        errorCount++
    }

    if (errorCount > 0) {
        return res.status(400).send({ message: error });
    }
    const member = new Members(name, age, description, image, github, instagram );
    membersList.addMember(member);
    return res.status(201).send(member);
}

export const removeMemberById = (req, res) => {
    const { id } = req.params;
    const member = membersList.getMemberById(id);
    if (!member) {
        return res.status(404).send({ message: "Member not found" });
    }
    membersList.removeMemberById(id);
    return res.status(200).send({ message: "Member deleted successfully" });
}

export const updateMemberById = (req, res) => {
    const { id } = req.params;
    const { name, age, description, image, github, instagram } = req.body;
    const member = membersList.getMemberById(id);
    let error = "Erro no dados enviados: ";
    let errorCount = 0;
    
    if (!member) {
        return res.status(404).send({ message: "Member not found" });
    }
    if (!name) {
        error += "Nome não informado";
        errorCount++;
    }
    if (!age) {
        error += "Idade não informada";
        errorCount++;
    }
    if (!github) {
        error += "Github não informado";
        errorCount++;
    }
    if (!instagram) {
        error += "Instagram não informado";
        errorCount++;
    }
    if (!description) {
        error += "Descrição não informada";
        errorCount++;
    }
    if(name.length < 3 || name.length > 50){
        error += "Nome deve conter entre 3 e 50 caracteres";
        errorCount++;
    }
    if (age < 15|| age > 100) {
        error += "Idade não permitida";
        errorCount++;
    }
    if(description.length < 10 || description.length > 100){
        error += "Descrição deve conter entre 10 e 100 caracteres";
        errorCount++;
    }
    if (image.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        error += " Imagem inválida."
        errorCount++
    }

    if (errorCount > 0) {
        return res.status(400).send({ message: error });

    }

    membersList.updateMemberById(id, name, age, description, image, github, instagram );
    return res.status(200).send({ message: "Member updated successfully" });
}

export const pagenationMembers = (req, res) => {
    const { page } = req.query;
    const members = membersList.pagenationMembers(page);
    if (!members) {
        return res.status(404).send({ message: "Members not found" });
    }
    return res.status(200).send(members);
}
