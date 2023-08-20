import { Body, Controller, Get, Post, Query, Req, Res} from '@nestjs/common';
import { JoinRequestDto } from './dto/join.requrdt.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(@Req() req) {
        return req.user
    }

    @Post()
    postUsers(@Body() body: JoinRequestDto) {
        this.usersService.postUsers(body.email, body.nickname, body.password);
    }

    @Post('login')
    logIn(@Req() req) {
        return req.user
    }

    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut()
        res.clearCookie('connext.sid', {httoOnly:true})
        res.send('ok')
    }

}
