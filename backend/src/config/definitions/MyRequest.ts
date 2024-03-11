import { Request } from 'express';

interface MyUserRequest extends Request {
    // make sure it has all the properties of the Request

    user?: any;

    }


export { MyUserRequest };