import Jwt, { JsonWebTokenError } from 'jsonwebtoken'
import {ErrorFactory} from '../factory/ErrorMessage'
import {ErrorEnum, Message} from '../factory/Message'

const errorFactory: ErrorFactory = new ErrorFactory();

 export const checkInputEmail = function (req: any, res: any, next: any) {
    try {
      //checking if email is valid (is string and respect the pattern <user>@<server>.<domain>)
      if (
        typeof req.body.email !== "string"     
      ) {
        next(ErrorEnum.EmailNotValidAddress)        
      } else {
	
	// This complex regular expression is designed to validate different formats of email addresses according to the standard rules, including:
	// Email addresses with quoted local parts.
	// Email addresses with unquoted local parts containing alphanumeric characters and hyphens, separated by dots.
	// Domains with subdomains and TLDs.
	// IP addresses enclosed in square brackets as domains.

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(req.body.email)) {
          next(ErrorEnum.EmailNotValidAddress) 
          } else {
          next();
        }
      }
    } catch (error: any) {
      next(ErrorEnum.EmailNotValidAddress) 
    }
  };

 export const checkInputPassword = function (req: any, res: any, next: any) {
    try {
      //checking if password is valid (it must be max 50 char)
      if (
        typeof req.body.password !== "string" ||
        req.body.password.length > 50
      ) {
        next(ErrorEnum.LoginBadRequest)
      } else next();
    } catch (error: any) {
      next(ErrorEnum.LoginBadRequest)
    }
  };

  export const checkJWT = function (req: any, res: any, next: any) {
    try {
      //checking if jwt is valid
      if(req.headers.authorization){
        const decoded = <string>Jwt.verify(req.headers.authorization, <string>process.env.SECRET_KEY)
        next();
      }
      else
      {        
        next(ErrorEnum.JwtNotValid)        
      }

    } catch (error:any) {
      next(ErrorEnum.JwtNotValid) 
    }
  };

  export const checkRoleAdmin = function (req: any, res: any, next: any) {
    try {
      //check if role is Admin by decoding jwt
      if(req.headers.authorization){
        const decoded:any = <string>Jwt.decode(req.headers.authorization)
        if(decoded.role === "admin"){
          next();
        }else{
          next(ErrorEnum.ForbiddenRole)
        }
        
      }
    }
    catch (error:any){
      next(ErrorEnum.ForbiddenRole)
    } 
  }

  export const checkRolePlayer = function (req: any, res: any, next: any) {
    try {
      //check if role is player by decoding jwt
      if(req.headers.authorization){
        const decoded:any = <string>Jwt.decode(req.headers.authorization)
        if(decoded.role === "player"){
          next();
        }else{
          next(ErrorEnum.ForbiddenRole)
        }
        
      }
    }
    catch (error:any){
      next(ErrorEnum.ForbiddenRole)
    } 
  }

  export const checkInputToken = function (req: any, res: any, next: any) {
    try {
      //checking if token input is valid, it must be number and greater than 0
      if (
        typeof req.body.token === "number" &&
        req.body.token > 0
      ) {
        next();        
      } else {
        next(ErrorEnum.TokenChargeBadRequest)
      }
    } catch (error: any) {
      next(ErrorEnum.TokenChargeBadRequest)
    }
  };
