import type {ISystem, TSystemFunction, TSystemParameterDesc} from "./system.spec";

export interface ISystemBuilder<PARAMDESC extends TSystemParameterDesc> {
    parameterDesc: PARAMDESC
    setupFunction: TSystemFunction<PARAMDESC>
    runFunction: TSystemFunction<PARAMDESC>

    build(): ISystem<PARAMDESC>
    withName(name: string): ISystemBuilder<PARAMDESC>
    withRunFunction(fn: TSystemFunction<PARAMDESC>): ISystemBuilder<PARAMDESC>
    withSetupFunction(fn: TSystemFunction<PARAMDESC>): ISystemBuilder<PARAMDESC>
}
