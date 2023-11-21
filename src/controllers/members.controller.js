import { Members } from "../models/members/Members.js";
import { MembersList } from "../models/members/MembersList.js";

const membersList = new MembersList();
let members = [
    new Members("Guilherme Lima", 17, "https://github.com/GuiLimaSeila", "https://instagram.com/guilherme.j.lima?igshid=OGQ5ZDc2ODk2ZA==", "Guilherme é um cara legal"),
    new Members("Amanda Santos", 17, "maria", "maria", "Maria é uma garota legal"),
    new Members("Guilherme Godoy", 20, "jose", "jose", "José é um cara legal"),
    new Members("Manuela", 16, "", "joana", "Manu é uma garota legal"),
    new Members("Andrey Castro", 20, "pedro", "pedro", "Pedro é um cara legal"),
    new Members("Nicolly", 20, "paula", "paula", "Paula é uma garota legal"),
];
members.forEach(member => membersList.addMember(member));


export const getMembers = (req, res) => {
    const members = membersList.getMembers();
    if (!members) {
        return res.status(404).send({ message: "Members not found" });
    }
    return res.status(200).send({ message: `Numero de membros cadastrados: ${membersList.length}`, data: members });
}

export const getMemberById = (req, res) => {
    const { id } = req.params;
    const member = membersList.getMemberById(id);
    if (!member) {
        return res.status(404).send({ message: "Member not found" });
    }
    return res.status(200).send(member);
}

export const createMember = (req, res) => {
    const { name, age, github, instagram, description } = req.body;
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
    if(name.length < 3 || name.length > 50){
        error += "Nome deve conter entre 3 e 50 caracteres";
        errorCount++;
    }
    if (age < 3 || age > 100) {
        error += "Idade não permitida";
        errorCount++;
    }

    if (errorCount > 0) {
        return res.status(400).send({ message: error });
    }
    const member = new Members(name, age, github, instagram, description);
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
    const { name, age, github, instagram, description } = req.body;
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
    if (age < 3 || age > 100) {
        error += "Idade não permitida";
        errorCount++;
    }

    if (errorCount > 0) {
        return res.status(400).send({ message: error });
    }

    membersList.updateMemberById(id, name, age, github, instagram, description);
    return res.status(200).send({ message: "Member updated successfully" });
}