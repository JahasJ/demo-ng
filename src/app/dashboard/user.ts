export class User
{
    username : string;
    password : string;
    mailid : string;
    constructor(uname : string, upass : string, umail : string)
    {
        this.username = uname;
        this.password = upass;
        this.mailid = umail;
    }
}