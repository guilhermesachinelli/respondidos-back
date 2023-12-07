import { Router } from 'express';
import { getMemberById, createMember, removeMemberById, updateMemberById, pagenationMembers} from '../controllers/members.controller.js';

const memberRouter = Router();

//memberRouter.get('/', getMembers);
memberRouter.get('/:id', getMemberById);
memberRouter.post('/', createMember);
memberRouter.delete('/:id', removeMemberById);
memberRouter.put('/:id', updateMemberById);
memberRouter.get('/', pagenationMembers);

export default memberRouter;