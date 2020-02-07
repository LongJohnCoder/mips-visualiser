export class Register
{
    protected _aliases: string[];
    protected _binary: string;
    protected _value: string;
    protected _editable: boolean;

    public constructor (aliases: string[], binary: string, value: string = '', editable: boolean = true)
    {
        this._aliases = aliases;
        this._binary = binary;
        this._value = value;
        this._editable = editable;
    }

    public hasAlias (value: string): boolean
    {
        return this._aliases.find(it => it === value) !== undefined;
    }

    public get binary (): string
    {
        return this._binary;
    }

    public get value (): string
    {
        return this._value;
    }

    public set value (value: string)
    {
        this._value = value;
    }

    public get editable ()
    {
        return this._editable;
    }

    public get aliases ()
    {
        return this._aliases;
    }
}
