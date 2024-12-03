// 사용자 목록 API
import prisma from '../../lib/prisma';

export default defineEventHandler(async (event)=>{
    const users = await prisma.user.findMany();
    return users;
});