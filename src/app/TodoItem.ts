export class TodoItem {
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _title: string;
    public get title(): string {
        return this.title;
    }
    public set title(value: string) {
        this.title = value;
    }
    

    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
   

    private _checked: boolean;
    public get checked(): boolean {
        return this._checked;
    }
    public set checked(value: boolean) {
        this._checked = value;
    }
    

    constructor(id:number,title:string, content:string, checked:boolean){
        this.id=id;
        this.title = title;
        this.content=content;
        this.checked=checked;
    }


}