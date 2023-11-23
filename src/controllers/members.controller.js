import { Members } from "../models/members/Members.js";
import { MembersList } from "../models/members/MembersList.js";

const membersList = new MembersList();
let members = [
    new Members("Guilherme Lima", 17, "https://github.com/GuiLimaSeila", "https://instagram.com/guilherme.j.lima?igshid=OGQ5ZDc2ODk2ZA==", "Estudante de Desenvolvimento de Sistemas no SENAI Valinhos.", "https://i.imgur.com/a0jlA3y.jpg"),
    new Members("Amanda Santos", 17, "https://github.com/Amandamoonchild", "https://instagram.com/silva.santos.amanda?igshid=OGQ5ZDc2ODk2ZA==", "Estudante de Desenvolvimento de Sistemas no SENAI Valinhos.", "https://i.imgur.com/qgY0NqB.jpg"),
    new Members("Guilherme Godoy", 18, "https://github.com/guilhermesachinelli", "https://instagram.com/guilhermesachinelli?igshid=OGQ5ZDc2ODk2ZA==", "Estudante de Desenvolvimento de Sistemas no SENAI Valinhos.", "https://i.imgur.com/5ZQqZ9I.jpg"),
    new Members("Manuela", 16, "https://github.com/manuumqm", "https://instagram.com/manuumqm?igshid=NzZlODBkYWE4Ng==", "Estudante de Desenvolvimento de Sistemas no SENAI Valinhos.", "https://i.imgur.com/jVw7Nss.png"),
    new Members("Andrey Castro", 17, "https://github.com/andreyfdecastro", "https://instagram.com/andreyctr59?igshid=OGQ5ZDc2ODk2ZA==", "Estudante de Desenvolvimento de Sistemas no SENAI Valinhos.", "https://i.imgur.com/oC1b8Jm.jpg"),
    new Members("Nicolly", 16, "https://github.com/santni", "https://instagram.com/santnii?igshid=OGQ5ZDc2ODk2ZA==", "Estudante de Desenvolvimento de Sistemas no SENAI Valinhos.", "https://i.imgur.com/oZg5y1J.png"),
];
members.forEach(member => membersList.addMember(member));


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
        return res.status(404).send({ message: "Member not found" });
    }
    return res.status(200).send(member);
}

export const createMember = (req, res) => {
    const { name, age, github, instagram, description, image } = req.body;
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
    if (image.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        error += " Imagem inválida."
        errorCount++
    }

    if (errorCount > 0) {
        return res.status(400).send({ message: error });
    }
    const member = new Members(name, age, github, instagram, description, image);
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
    const { name, age, github, instagram, description, image} = req.body;
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
    if (image.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        error += " Imagem inválida."
        errorCount++
    }

    if (errorCount > 0) {
        return res.status(400).send({ message: error });
    }

    membersList.updateMemberById(id, name, age, github, instagram, description, image);
    return res.status(200).send({ message: "Member updated successfully" });
}