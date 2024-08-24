import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FdModuleBase } from "./base/fd.module.base";
import { FdService } from "./fd.service";
import { FdController } from "./fd.controller";
import { FdResolver } from "./fd.resolver";

@Module({
  imports: [FdModuleBase, forwardRef(() => AuthModule)],
  controllers: [FdController],
  providers: [FdService, FdResolver],
  exports: [FdService],
})
export class FdModule {}
