import { forwardRef, Module } from '@nestjs/common';
import {
  AboutController,
  DocumentsController, FAQController,
  InvestorController,
  LenderController,
  TempController,
} from './public.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [
    InvestorController,
    LenderController,
    AboutController,
    DocumentsController,
    TempController,
    FAQController,
  ],
  exports: [],
})
export class PublicModule {}
