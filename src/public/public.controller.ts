import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AboutController {
  @Get(['/', '/about'])
  @Render('about')
  root() {
    return { message: 'Hello world!' };
  }
}
@Controller()
export class InvestorController {
  @Get('/investor')
  @Render('investor')
  root() {
    return { message: 'Hello world!' };
  }
}
@Controller()
export class DocumentsController {
  @Get('/docs')
  @Render('documents')
  root() {
    return { message: 'Hello world!' };
  }
}
@Controller()
export class LenderController {
  @Get('/lender')
  @Render('lender')
  root() {
    return { message: 'Hello world!' };
  }
}
@Controller()
export class TempController {
  @Get('/temp')
  @Render('temp')
  root() {
    return { message: 'Hello world!' };
  }
}
@Controller()
export class FAQController {
  @Get('/faq')
  @Render('faq')
  root() {
    return { message: 'Hello world!' };
  }
}
