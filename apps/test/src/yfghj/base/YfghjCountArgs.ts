/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { YfghjWhereInput } from "./YfghjWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class YfghjCountArgs {
  @ApiProperty({
    required: false,
    type: () => YfghjWhereInput,
  })
  @Field(() => YfghjWhereInput, { nullable: true })
  @Type(() => YfghjWhereInput)
  where?: YfghjWhereInput;
}

export { YfghjCountArgs as YfghjCountArgs };
