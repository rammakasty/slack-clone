import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";
import { request } from "http";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');

    use(req: any, res: any, next: NextFunction): void {
        const { ip, method, originalUrl } = req
        const userAgent = req.get('user-agent') || '';

        res.on('finish', () => {
            const { statusCode } = res
            const contentLength = req.headers['content-length']
            this.logger.log(
                `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
            )
        })
    }
}
