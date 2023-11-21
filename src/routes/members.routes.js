import { Router } from 'express';
import { getMembers, getMemberById, createMember, removeMemberById, updateMemberById } from '../controllers/members.controller.js';

const memberRouter = Router();

memberRouter.get('/', getMembers);
memberRouter.get('/:id', getMemberById);
memberRouter.post('/', createMember);
memberRouter.delete('/:id', removeMemberById);
memberRouter.put('/:id', updateMemberById);

export default memberRouter;