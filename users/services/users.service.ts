import { CRUD } from '../../common/interfaces/crud.interface';
import { UserDto } from '../../users/dto/users.model';
import UsersDao from '../../users/daos/users.dao';
import usersDao from '../../users/daos/users.dao';
import e from 'express';

class UsersService implements CRUD {
    private static instance: UsersService;

    static getInstance(): UsersService {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    }

    async list(limit: number, page: number): Promise<any>{
        return await usersDao.getUsers();
    };

    async create(resource: any): Promise<any> {
        return await usersDao.addUser(resource);
    }

    async updateById(resourceId: any): Promise<string> {
        return await usersDao.putUserById(resourceId);
    }

    async readById(resourceId: any): Promise<any> {
        return await usersDao.getUserById(resourceId);
    }

    async deleteById(resourceId: any): Promise<string> {
        return await usersDao.removeUserById(resourceId);
    }

    async patchById(resourceId: any): Promise<string> {
        return await usersDao.patchUserById(resourceId);
    }
    
    async getUserByEmail(email: string) {
        return await usersDao.getUserByEmail(email);
    }
}

export default UsersService.getInstance();