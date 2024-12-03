import prisma from '../../lib/prisma';

export default defineEventHandler(async (event)=>{
    const body = await readBody(event);

    const newUser = await prisma.user.create({
        date: {
            name: body.name,
            email: body.email
        }
    });

    return {
        message: 'User created successfully',
        user: newUser, 
    };
});