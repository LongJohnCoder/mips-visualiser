import { Clock } from '../clock';
import { CPU } from '../../cpu/cpu';
import { BinaryEncoder } from '../../library/binary-encoder/binary-encoder';

export class ClockIX  implements Clock
{
    protected _encoder: BinaryEncoder;

    public constructor ()
    {
        this._encoder = new BinaryEncoder();
    }

    public execute (cpu: CPU): void
    {
        this.setControl(cpu);
        this.writeToRegister(cpu);
    }

    protected setControl (cpu: CPU): void
    {
        cpu.control.regDst = '1';
        cpu.control.regWrite = '1';
        cpu.control.memToReg = '0';
    }

    protected writeToRegister (cpu: CPU): void
    {
        // Writes ALU result to destination register.
        cpu.register(cpu.instruction.rd).value = cpu.alu.result;
    }
}