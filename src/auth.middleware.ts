import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
// import { JwtService } from '@nestjs/jwt';

interface token {
  id: string
  name: string
  iat: number
  exp: number
}

declare module "express" { 
  export interface Request {
    id: string
    name: string
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  // constructor(private readonly jwtServ: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const JWT_SECRET = "LINKTREE%21$"
    const verToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGUwZTgwMWEzOTAwZjg5NjQ5M2Q3MiIsIm5hbWUiOiJiYXQiLCJpYXQiOjE2NzAxNDc0NjUsImV4cCI6MTY3MjczOTQ2NX0.ntFQOliHXIn67Is57YAVsfrJtOIKdhueMMf5Comn8sc";
    if (!req.headers.authorization) {
      res.status(401).json({
        success: false,
        message: 'ta newtreh ystoi'
      });
      return
    }
    
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    if (token !== verToken) {
      res.status(401).json({
        success: false,
        message: 'buruu bn!!!'
      });
      return
    }

    // const tokenObj = this.jwtServ.verify(token);
    const tokenObj = jwt.verify(token, JWT_SECRET);
    console.log(tokenObj);
    
    // req.id = tokenObj.id;
    // req.name = tokenObj.name;
    next();
  }
}